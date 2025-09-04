<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>@metallicains • Link in Bio</title>
  <meta name="description" content="Fuel your metal spirit with Metallica merch! #Metallica #ShopNow" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root{
      --bg:#12161d;
      --panel:#161b24;
      --muted:#98a2b3;
      --text:#e6edf4;
      --ring:rgba(125,211,252,.6);
      --stroke:rgba(255,255,255,.08);
      --hover:rgba(255,255,255,.06);
      --white:rgba(255,255,255,.98);
      --radius:22px;
      --shadow:0 18px 35px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.03);
      --grad: radial-gradient(1400px 800px at 50% -10%, #3b82f622 0%, transparent 70%),
              linear-gradient(180deg,#2a3342 0%,#1a212e 65%,#141a22 100%);
    }
    *{box-sizing:border-box}
    html,body{height:100%}
    body{
      margin:0;background:#0d1219;color:var(--text);
      font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,"Helvetica Neue",sans-serif;
      display:flex;align-items:center;justify-content:center;padding:24px;
    }

    /* Canvas */
    .stage{
      width:min(980px,100%);
      position:relative;
      display:flex;
      justify-content:center;
    }
    .card{
      width:min(720px,100%);
      border-radius:30px;
      background:var(--grad);
      border:1px solid var(--stroke);
      box-shadow:0 30px 60px rgba(0,0,0,.35);
      overflow:hidden;
      position:relative;
    }

    /* Header chips */
    .topbar{
      display:flex;justify-content:space-between;align-items:center;
      padding:26px 26px 0;
    }
    .chip{
      height:46px;width:46px;border-radius:50%;
      display:grid;place-items:center;cursor:pointer;
      background:rgba(255,255,255,.06);
      border:1px solid var(--stroke); box-shadow:var(--shadow);
      transition:.2s transform,.2s background;
    }
    .chip:hover{transform:translateY(-1px);background:rgba(255,255,255,.09)}
    .chip svg{width:18px;height:18px;opacity:.95;fill:var(--text)}

    /* Profile */
    .profile{display:grid;place-items:center;text-align:center;padding:8px 26px 18px}
    .avatar{
      width:110px;height:110px;border-radius:50%;
      overflow:hidden;border:2px solid rgba(255,255,255,.12);
      box-shadow:0 8px 24px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.08);
      background:#0b0f16;margin-top:6px;
    }
    .avatar img{width:100%;height:100%;object-fit:cover;display:block}
    .handle{font-weight:800;font-size:28px;margin:16px 0 6px;letter-spacing:.2px}
    .bio{max-width:560px;color:#d5d9e0;line-height:1.45;font-weight:600;opacity:.95}
    .tags{margin-top:6px;color:#cbd5e1;font-weight:700}

    /* Tabs */
    .tabs{margin:18px auto 8px;display:flex;gap:12px;justify-content:center;align-items:center}
    .tabbtn{
      padding:13px 24px;border-radius:999px;border:1px solid var(--stroke);
      background:rgba(255,255,255,.06);color:var(--text);font-weight:800;
      cursor:pointer;box-shadow:var(--shadow);transition:.18s;
    }
    .tabbtn.active{
      background:linear-gradient(180deg,#1f2937,#121824);
      box-shadow:0 0 0 6px var(--ring), var(--shadow);
    }

    /* Sections */
    [data-section]{display:none}
    [data-section].active{display:block}

    /* Links list */
    .content{padding:18px}
    .row{
      display:flex;align-items:center;gap:14px;padding:16px 18px;margin:12px 0;
      background:rgba(255,255,255,.045); border:1px solid var(--stroke);
      border-radius:38px; text-decoration:none; color:var(--text);
      box-shadow:var(--shadow); transition:.18s transform,.18s background;
    }
    .row:hover{transform:translateY(-2px);background:rgba(255,255,255,.07)}
    .thumb{
      width:58px;height:58px;border-radius:50%;overflow:hidden;
      background:#0b0f16;border:2px solid var(--white);
      box-shadow:0 3px 12px rgba(0,0,0,.4);
      display:grid;place-items:center;
    }
    .thumb img{width:100%;height:100%;object-fit:cover;display:block}
    .rtext{flex:1}
    .rtitle{font-weight:800;letter-spacing:.2px}
    .dots{opacity:.7}
    .dots svg{width:18px;height:18px;fill:var(--text)}

    /* Shop grid */
    .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin:8px 0 6px}
    @media (max-width:920px){.grid{grid-template-columns:repeat(2,1fr)}}
    @media (max-width:620px){.grid{grid-template-columns:1fr}}
    .prod{
      background:rgba(255,255,255,.045); border:1px solid var(--stroke);
      border-radius:20px; overflow:hidden; box-shadow:var(--shadow); display:flex;flex-direction:column;
    }
    .pimg{aspect-ratio:16/10;background:#0b0f16;border-bottom:1px solid rgba(255,255,255,.06)}
    .pimg img{width:100%;height:100%;object-fit:cover;display:block}
    .pinfo{padding:14px 14px 16px}
    .ptitle{font-weight:800}
    .pprice{margin:8px 0 12px;color:#d1fae5;font-weight:800}
    .buy{
      margin-top:auto;display:inline-flex;justify-content:center;align-items:center;gap:8px;
      padding:11px 14px;width:100%;border-radius:12px;border:none;cursor:pointer;
      background:linear-gradient(180deg,#3b82f6,#2563eb); color:#fff; font-weight:800;
      box-shadow:0 12px 24px rgba(37,99,235,.45); text-decoration:none;
    }
    .buy:hover{filter:brightness(1.05)}

    /* QR box */
    .qr-wrap{
      position:fixed;right:26px;bottom:26px;display:grid;gap:8px;align-items:center;justify-items:center;
      color:#cbd5e1;text-align:center;
    }
    .qr-title{font-weight:800;letter-spacing:.2px}
    .qr{
      width:150px;height:150px;padding:8px;border-radius:12px;background:#0f141c;
      border:1px solid var(--stroke);box-shadow:var(--shadow)
    }
    .qr img{width:100%;height:100%;object-fit:contain;display:block;filter:grayscale(0)}
    @media (max-width:860px){.qr-wrap{display:none}}

    /* Accessibility focus */
    a:focus-visible,button:focus-visible{outline:3px solid #60a5fa;outline-offset:2px;border-radius:10px}
  </style>
</head>
<body>
  <div class="stage">
    <div class="card" role="region" aria-label="Profile card">
      <div class="topbar">
        <button class="chip" title="Settings">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8.8a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4Zm9.6 3.2-.96-.55a7.9 7.9 0 0 0-.6-1.46l.52-.98a.9.9 0 0 0-.12-1.02l-1.9-1.9a.9.9 0 0 0-1.02-.12l-.98.52c-.47-.22-.96-.42-1.46-.6l-.54-.96A.9.9 0 0 0 13.6 3h-3.2a.9.9 0 0 0-.8.47l-.55.96c-.5.18-.99.38-1.46.6l-.98-.52a.9.9 0 0 0-1.02.12L2.67 6.53a.9.9 0 0 0-.12 1.02l.52.98c-.22.47-.42.96-.6 1.46l-.96.54a.9.9 0 0 0-.47.8v3.2c0 .33.18.64.47.8l.96.55c.18.5.38.99.6 1.46l-.52.98a.9.9 0 0 0 .12 1.02l1.9 1.9c.26.26.66.32 1.02.12l.98-.52c .47.22.96.42 1.46.6l.55.96c.16.28.46.46.8.46h3.2c.33 0 .64-.18.8-.46l.54-.96c.5-.18.99-.38 1.46-.6l.98.52c.36.2.76.14 1.02-.12l1.9-1.9a.9.9 0 0 0 .12-1.02l-.52-.98c.22-.47.42-.96.6-1.46l.96-.55c.28-.16.46-.46.46-.8v-3.2a.9.9 0 0 0-.46-.8Z"/></svg>
        </button>
        <button class="chip" title="Share">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 16a3 3 0 0 0-2.39 1.2L8.91 13.7a3.03 3.03 0 0 0 0-3.4l6.7-3.5A3 3 0 1 0 15 5a2.98 2.98 0 0 0 .12.8l-6.7 3.5a3 3 0 1 0 0 4.4l6.7 3.5A3 3 0 1 0 18 16Z"/></svg>
        </button>
      </div>

      <section class="profile">
        <div class="avatar">
          <img alt="Band" src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop" />
        </div>
        <div class="handle">@metallicains</div>
        <div class="bio">Fuel your metal spirit with Metallica merch! </div>
        <div class="tags">#Metallica #ShopNow</div>
        <div class="tabs" role="tablist" aria-label="Switch section">
          <button class="tabbtn active" role="tab" aria-selected="true" data-target="links">Links</button>
          <button class="tabbtn" role="tab" aria-selected="false" data-target="shop">Shop</button>
        </div>
      </section>

      <!-- LINKS -->
      <section id="links" class="content active" data-section aria-label="Links list">
        <a class="row" href="https://example.com/tumblers" target="_blank" rel="noopener">
          <div class="thumb"><img src="https://images.unsplash.com/photo-1588167056547-c183313da557?q=80&w=200&auto=format&fit=crop" alt=""></div>
          <div class="rtext"><div class="rtitle">MTL Tumblers</div></div>
          <div class="dots"><svg viewBox="0 0 24 24"><path d="M12 6.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Zm0 7a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Zm0 7a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z"/></svg></div>
        </a>

        <a class="row" href="https://example.com/classic-tees" target="_blank" rel="noopener">
          <div class="thumb"><img src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=200&auto=format&fit=crop" alt=""></div>
          <div class="rtext"><div class="rtitle">Classic T-Shirts</div></div>
          <div class="dots"><svg viewBox="0 0 24 24"><path d="M12 6.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Zm0 7a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Zm0 7a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z"/></svg></div>
        </a>

        <a class="row" href="https://example.com/hawaiian" target="_blank" rel="noopener">
          <div class="thumb"><img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=200&auto=format&fit=crop" alt=""></div>
          <div class="rtext"><div class="rtitle">Hawaiian Shirts</div></div>
          <div class="dots"><svg viewBox="0 0 24 24"><path d="M12 6.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Zm0 7a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Zm0 7a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z"/></svg></div>
        </a>

        <a class="row" href="https://example.com/posters" target="_blank" rel="noopener">
          <div class="thumb"><img src="https://images.unsplash.com/photo-1520975922284-9bcd70a3af03?q=80&w=200&auto=format&fit=crop" alt=""></div>
          <div class="rtext"><div class="rtitle">Tour Posters</div></div>
          <div class="dots"><svg viewBox="0 0 24 24"><path d="M12 6.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Zm0 7a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Zm0 7a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z"/></svg></div>
        </a>
      </section>

      <!-- SHOP -->
      <section id="shop" class="content" data-section aria-label="Shop grid">
        <div class="grid">
          <article class="prod">
            <div class="pimg"><img src="https://images.unsplash.com/photo-1556306535-abccb1a0376e?q=80&w=1200&auto=format&fit=crop" alt=""></div>
            <div class="pinfo">
              <div class="ptitle">Black Tour Tee</div>
              <div class="pprice">$24.90</div>
              <a class="buy" href="https://example.com/black-tee" target="_blank" rel="noopener">Buy</a>
            </div>
          </article>
          <article class="prod">
            <div class="pimg"><img src="https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1200&auto=format&fit=crop" alt=""></div>
            <div class="pinfo">
              <div class="ptitle">Logo Baseball Cap</div>
              <div class="pprice">$19.50</div>
              <a class="buy" href="https://example.com/cap" target="_blank" rel="noopener">Buy</a>
            </div>
          </article>
          <article class="prod">
            <div class="pimg"><img src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1200&auto=format&fit=crop" alt=""></div>
            <div class="pinfo">
              <div class="ptitle">Guitar Pick Set</div>
              <div class="pprice">$8.90</div>
              <a class="buy" href="https://example.com/picks" target="_blank" rel="noopener">Buy</a>
            </div>
          </article>
          <article class="prod">
            <div class="pimg"><img src="https://images.unsplash.com/photo-1560045301-91c2f0b50130?q=80&w=1200&auto=format&fit=crop" alt=""></div>
            <div class="pinfo">
              <div class="ptitle">Pullover Hoodie</div>
              <div class="pprice">$39.00</div>
              <a class="buy" href="https://example.com/hoodie" target="_blank" rel="noopener">Buy</a>
            </div>
          </article>
          <article class="prod">
            <div class="pimg"><img src="https://images.unsplash.com/photo-1520975922284-9bcd70a3af03?q=80&w=1200&auto=format&fit=crop" alt=""></div>
            <div class="pinfo">
              <div class="ptitle">Hawaiian Shirt</div>
              <div class="pprice">$27.40</div>
              <a class="buy" href="https://example.com/hawaiian" target="_blank" rel="noopener">Buy</a>
            </div>
          </article>
          <article class="prod">
            <div class="pimg"><img src="https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=1200&auto=format&fit=crop" alt=""></div>
            <div class="pinfo">
              <div class="ptitle">Steel Tumbler</div>
              <div class="pprice">$16.90</div>
              <a class="buy" href="https://example.com/tumbler" target="_blank" rel="noopener">Buy</a>
            </div>
          </article>
        </div>
      </section>
    </div>
  </div>

  <!-- QR (fixed outside the card, bottom-right) -->
  <aside class="qr-wrap" aria-label="View on mobile">
    <div class="qr-title">View on mobile</div>
    <div class="qr"><img id="qr" alt="QR code"></div>
  </aside>

  <script>
    // Tabs
    const tabs = document.querySelectorAll('.tabbtn');
    const sections = document.querySelectorAll('[data-section]');
    tabs.forEach(btn=>{
      btn.addEventListener('click', ()=>{
        tabs.forEach(b=>{b.classList.remove('active'); b.setAttribute('aria-selected','false')});
        btn.classList.add('active'); btn.setAttribute('aria-selected','true');
        const target = btn.dataset.target;
        sections.forEach(s=>s.classList.toggle('active', s.id===target));
      });
    });

    // Share / copy
    document.querySelectorAll('.chip')[1].addEventListener('click', async ()=>{
      const url = location.href;
      try{
        if(navigator.share){ await navigator.share({title:document.title, url}); }
        else{ await navigator.clipboard.writeText(url); alert('Link copied to clipboard'); }
      }catch(e){}
    });

    // Dynamic QR using public API (no keys)
    (function(){
      const url = encodeURIComponent(location.href);
      const src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${url}`;
      document.getElementById('qr').src = src;
    })();
  </script>
</body>
</html>

