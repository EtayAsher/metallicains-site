const category = document.body.dataset.category;
const isHub = document.body.dataset.page === "shop-hub";

const categoryIcons = {
  apparel: "👕",
  vinyl: "💿",
  posters: "🖼️",
};

const defaultBlurbs = {
  apparel: "Bold print, everyday wear.",
  vinyl: "Collector-friendly press.",
  posters: "Instant room upgrade.",
};

function ensureTitles(items, prefix) {
  return items.map((item, index) => {
    const title = item.title || `${prefix} Pick #${String(index + 1).padStart(2, "0")}`;
    return {
      ...item,
      title,
      blurb: item.blurb || defaultBlurbs[category] || "Premium fan pick.",
    };
  });
}

function getClickCount(cat, index) {
  return Number(localStorage.getItem(`clicks:${cat}:${index}`) || 0);
}

function setClickCount(cat, index) {
  const current = getClickCount(cat, index);
  localStorage.setItem(`clicks:${cat}:${index}`, String(current + 1));
}

function getTopPopular(cat, items) {
  return items
    .map((_, index) => ({ index, count: getClickCount(cat, index) }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 3)
    .filter((entry) => entry.count > 0)
    .map((entry) => entry.index);
}

function createCard(item, index, cat, popularSet) {
  const card = document.createElement("article");
  card.className = "product-card";

  const media = document.createElement("div");
  media.className = "product-card__media";
  if (item.imageUrl) {
    const img = document.createElement("img");
    img.src = item.imageUrl;
    img.alt = item.title;
    img.loading = "lazy";
    img.decoding = "async";
    media.append(img);
  } else {
    media.classList.add("product-card__media--placeholder");
    media.textContent = categoryIcons[cat] || "★";
  }

  const title = document.createElement("h3");
  title.textContent = item.title;

  const blurb = document.createElement("p");
  blurb.className = "muted";
  blurb.textContent = item.blurb;

  const tag = document.createElement("span");
  tag.className = "tag-pill";
  tag.textContent = item.tags?.[0] || "Featured";

  const actions = document.createElement("div");
  actions.className = "product-actions";

  const primary = document.createElement("a");
  primary.className = "btn btn-primary";
  primary.href = item.url;
  primary.target = "_blank";
  primary.rel = "nofollow sponsored noopener";
  primary.textContent = "View on Amazon";
  primary.addEventListener("click", () => setClickCount(cat, index));

  const copy = document.createElement("button");
  copy.className = "btn-link";
  copy.type = "button";
  copy.textContent = "Copy link";
  copy.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(item.url);
      copy.textContent = "Copied";
      setTimeout(() => (copy.textContent = "Copy link"), 1500);
    } catch (error) {
      copy.textContent = "Copy failed";
      setTimeout(() => (copy.textContent = "Copy link"), 1500);
    }
  });

  actions.append(primary, copy);
  card.append(media, title, tag, blurb, actions);

  if (popularSet.has(index)) {
    const badge = document.createElement("span");
    badge.className = "popular-badge";
    badge.textContent = "Popular";
    card.append(badge);
  }

  return card;
}

function renderGrid(container, items, cat) {
  const popularSet = new Set(getTopPopular(cat, items));
  container.innerHTML = "";
  items.forEach((item, index) => {
    container.append(createCard(item, index, cat, popularSet));
  });
}

if (isHub) {
  const featuredStrip = document.querySelector("[data-featured-strip]");
  const categorySections = document.querySelectorAll("[data-category-preview]");

  if (featuredStrip) {
    const featuredItems = ["apparel", "vinyl", "posters"].flatMap((cat) => {
      const items = ensureTitles(SHOP_DATA[cat], `${cat.charAt(0).toUpperCase()}${cat.slice(1)}`);
      return items.slice(0, 2).map((item, index) => ({ ...item, cat, index }));
    });

    const popularIndices = {
      apparel: new Set(getTopPopular("apparel", SHOP_DATA.apparel)),
      vinyl: new Set(getTopPopular("vinyl", SHOP_DATA.vinyl)),
      posters: new Set(getTopPopular("posters", SHOP_DATA.posters)),
    };

    featuredStrip.innerHTML = "";
    featuredItems.forEach((item) => {
      featuredStrip.append(
        createCard(
          item,
          item.index,
          item.cat,
          popularIndices[item.cat]
        )
      );
    });
  }

  categorySections.forEach((section) => {
    const cat = section.dataset.categoryPreview;
    const grid = section.querySelector(".product-grid");
    if (!grid) return;
    const items = ensureTitles(SHOP_DATA[cat], `${cat.charAt(0).toUpperCase()}${cat.slice(1)}`).slice(0, 3);
    renderGrid(grid, items, cat);
  });
}

if (category) {
  const searchInput = document.querySelector("[data-search]");
  const sortSelect = document.querySelector("[data-sort]");
  const chipButtons = document.querySelectorAll("[data-chip]");
  const grid = document.querySelector(".product-grid");
  const backToTop = document.querySelector(".back-to-top");

  let activeTag = "All";

  const items = ensureTitles(SHOP_DATA[category], `${category.charAt(0).toUpperCase()}${category.slice(1)}`);

  function applyFilters() {
    const query = searchInput?.value.trim().toLowerCase() || "";
    let filtered = items.filter((item) => {
      const matchesQuery = item.title.toLowerCase().includes(query) ||
        item.tags?.some((tag) => tag.toLowerCase().includes(query));
      const matchesTag = activeTag === "All" || item.tags?.includes(activeTag);
      return matchesQuery && matchesTag;
    });

    const sortValue = sortSelect?.value || "featured";
    if (sortValue === "newest") {
      filtered = [...filtered].reverse();
    }
    if (sortValue === "az") {
      filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    }

    renderGrid(grid, filtered, category);
  }

  chipButtons.forEach((chip) => {
    chip.addEventListener("click", () => {
      chipButtons.forEach((btn) => btn.classList.remove("active"));
      chip.classList.add("active");
      activeTag = chip.dataset.chip;
      applyFilters();
    });
  });

  searchInput?.addEventListener("input", applyFilters);
  sortSelect?.addEventListener("change", applyFilters);

  applyFilters();

  if (backToTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}
