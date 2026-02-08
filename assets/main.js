const navToggle = document.querySelector(".nav-toggle");
const navDrawer = document.querySelector(".nav-drawer");

if (navToggle && navDrawer) {
  navToggle.addEventListener("click", () => {
    navDrawer.classList.toggle("open");
    navToggle.setAttribute(
      "aria-expanded",
      navDrawer.classList.contains("open")
    );
  });

  navDrawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navDrawer.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const yearTarget = document.querySelector("[data-year]");
if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

const currentPath = window.location.pathname.replace(/\/index\.html$/, "/");
document.querySelectorAll(".nav-links a, .nav-drawer a").forEach((link) => {
  const linkPath = link.getAttribute("href");
  if (!linkPath || linkPath.startsWith("http")) return;
  if (currentPath === linkPath || (currentPath.startsWith("/shop/") && linkPath === "/shop/")) {
    link.classList.add("active");
  }
});

const shopData = window.SHOP_DATA;
if (shopData) {
  const categoryIcons = document.querySelectorAll(".icon-box[data-category]");
  categoryIcons.forEach((iconBox) => {
    const category = iconBox.dataset.category;
    const label = iconBox.dataset.categoryLabel || category;
    const product = shopData[category]?.find((item) => item.imageUrl);
    if (!product || !product.imageUrl) return;

    const previewImage = new Image();
    previewImage.src = product.imageUrl;
    previewImage.alt = `${label} preview`;
    previewImage.loading = "lazy";
    previewImage.decoding = "async";
    iconBox.textContent = "";
    iconBox.appendChild(previewImage);
  });

  const featuredCard = document.querySelector("[data-featured-card]");
  if (featuredCard) {
    const categoryOrder = ["apparel", "vinyl", "posters"];
    const categoryKeys = [
      ...categoryOrder.filter((key) => key in shopData),
      ...Object.keys(shopData).filter((key) => !categoryOrder.includes(key))
    ];
    const featuredProduct = categoryKeys
      .flatMap((key) => shopData[key] || [])
      .find((item) => item.imageUrl);

    if (featuredProduct) {
      const media = featuredCard.querySelector("[data-featured-media]");
      const title = featuredCard.querySelector("[data-featured-title]");
      const blurb = featuredCard.querySelector("[data-featured-blurb]");
      const tags = featuredCard.querySelector("[data-featured-tags]");
      const link = featuredCard.querySelector("[data-featured-link]");

      if (media) {
        const featuredImage = new Image();
        featuredImage.src = featuredProduct.imageUrl;
        featuredImage.alt = featuredProduct.title;
        featuredImage.loading = "lazy";
        featuredImage.decoding = "async";
        media.appendChild(featuredImage);
      }

      if (title) title.textContent = featuredProduct.title;
      if (blurb) blurb.textContent = featuredProduct.blurb;

      if (tags) {
        tags.innerHTML = "";
        (featuredProduct.tags || []).slice(0, 2).forEach((tag) => {
          const pill = document.createElement("span");
          pill.className = "tag-pill";
          pill.textContent = tag;
          tags.appendChild(pill);
        });
      }

      if (link) {
        link.href = featuredProduct.url;
        link.target = "_blank";
        link.rel = "nofollow sponsored noopener";
      }
    }
  }
}
