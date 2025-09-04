<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>@metallicains • Link in Bio</title>
  <meta name="description" content="Fuel your metal spirit with Metallica merch! #Metallica #ShopNow" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
  <style>
    :root{
      --bg:#0e131a;
      --panel:#161b24;
      --text:#e8edf4;
      --muted:#9aa3b2;
      --stroke:rgba(255,255,255,.08);
      --ring:rgba(125,211,252,.55);
      --grad: radial-gradient(1200px 600px at 50% -8%, #3b82f626, transparent 65%),
              linear-gradient(180deg,#263142 0%,#18202c 65%,#111822 100%);
      --shadow:0 18px 35px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.03);
      --radius:24px;
    }
    *{box-sizing:border-box}
    html{scroll-behavior:auto}
    body{
      margin:0; background:#0b1118; color:var(--text);
      font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,"Helvetica Neue",sans-serif;
      /* גלילה טבעית – בלי מיקום במרכז */
    }

    /* עטיפה */
    .stage{
      max-width:980px; margin:32px auto; padding:0 20px;
    }
    .card{
      width:100%; border-radius:30px; background:var(--grad);
      border:1px solid var(--stroke); box-shadow:0 30px 60px rgba(0,0,0,.35);
      overflow:hidden; position:relative;
    }

    /* כפתורים עליונים */
    .topbar{display:flex;justify-content:space-between;align-items:center;padding:26px 26px 0}
    .chip{
      height:46px;width:46px;border-radius:50%;display:grid;place-items:center;cursor:pointer;
      background:rgba(255,255,255,.06); border:1px solid var(--stroke); box-shadow:var(--shadow);
      transition:.18s; color:var(--text); font-weight:800;
    }
    .chip:hover{transform:translateY(-1px); background:rgba(255,255,255,.09)}
    .chip svg{width:18px;height:18px;fill:var(--text);opacity:.95}

    /* פרופיל */
    .profile{display:grid;place-items:center;text-align:center;padding:8px 26px 18px}
    .avatar{
      width:112px;height:112px;border-radius:50%;overflow:hidden;margin-top:6px;
      border:2px solid rgba(255,255,255,.12);
      box-shadow:0 8px 24px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.08);
      background:#0b0f16;
    }
    .avatar img{width:100%;height:100%;object-fit:cover;display:block}
    .handle{font-weight:800;font-size:28px;margin:16px 0 6px;letter-spacing:.2px}
    .bio{max-width:560px;color:#d7dde6;line-height:1.45;font-weight:600}
    .tags{margin-top:6px;color:#cbd5e1;font-weight:700}

    /* טאבים */
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

    /* סקשנים */
    [data-section]{display:none}
    [data-section].active{display:block}
    .content{padding:18px}

    /* שורות קישור */
    .row{
      display:flex;align-items:center;gap:14px;padding:16px 18px;margin:12px 0;
      background:rgba(255,255,255,.045); border:1px solid var(--stroke);
      border-radius:38px; text-decoration:none; color:var(--text);
      box-shadow:var(--shadow); transition:.18s transform,.18s background;
    }
    .row:hover{transform:translateY(-2px);background:rgba(255,255,255,.07)}

    /* עיגולי צבע */
    .swatch{
      width:58px;height:58px;border-radius:50%;
      border:2px solid rgba(255,255,255,.98);
      box-shadow:0 3px 12px rgba(0,0,0,.4);
      flex:0 0 auto;
      background:var(--clr,#60a5fa);
    }
    .title{font-weight:800;letter-spacing:.2px}
    .dots{margin-left:auto;opacity:.7}
    .dots svg{width:18px;height:18px;fill:var(--text)}

    /* SHOP placeholder */
    .coming{
      padding:28px; text-align:center; color:#cbd5e1; font-weight:700;
      background:rgba(255,255,255,.04); border:1px dashed var(--stroke);
      border-radius:18px;
    }

    /* QR */
    .qr-wrap{
      position:fixed;right:26px;bottom:26px;display:grid;gap:8px;align-items:center;justify-items:center;
      color:#cbd5e1;text-align:center;
    }
    .qr-title{font-weight:800;letter-spacing:.2px}
    .qr{width:150px;height:150px;padding:8px;border-radius:12px;background:#0f141c;border:1px solid var(--stroke);box-shadow:var(--shadow)}
    .qr img{width:100%;height:100%;object-fit:contain;display:block}
    @media (max-width:860px){.qr-wrap{display:none}}

    /* A11y */
    a:focus-visible,button:focus-visible{outline:3px solid #60a5fa;outline-offset:2px;border-radius:10px}
  </style>
</head>
<body>
  <main class="stage">
    <section class="card" aria-label="Profile card">
      <div class="topbar">
        <button class="chip" title="Settings">
          <svg viewBox="0 0 24 24"><path d="M12 8.8a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4Zm9.6 3.2-.96-.55a8 8 0 0 0-.6-1.46l.52-.98a.9.9 0 0 0-.12-1.02l-1.9-1.9a.9.9 0 0 0-1.02-.12l-.98.52c-.47-.22-.96-.42-1.46-.6l-.54-.96A.9.9 0 0 0 13.6 3h-3.2a.9.9 0 0 0-.8.47l-.55.96c-.5.18-.99.38-1.46.6l-.98-.52a.9.9 0 0 0-1.02.12L2.67 6.53a.9.9 0 0 0-.12 1.02l.52.98c-.22.47-.42.96-.6 1.46l-.96.54a.9.9 0 0 0-.47.8v3.2c0 .33.18.64.47.8l.96.55c.18.5.38.99.6 1.46l-.52.98a.9.9 0 0 0 .12 1.02l1.9 1.9c.26.26.66.32 1.02.12l.98-.52c .47.22.96.42 1.46.6l.55.96c.16.28.46.46.8.46h3.2c.33 0 .64-.18.8-.46l.54-.96c.5-.18.99-.38 1.46-.6l.98.52c.36.2.76.14 1.02-.12l1.9-1.9a.9.9 0 0 0 .12-1.02l-.52-.98c.22-.47.42-.96.6-1.46l.96-.55c.28-.16.46-.46.46-.8v-3.2a.9.9 0 0 0-.46-.8Z"/></svg>
        </button>
        <button class="chip" title="Share">
          <svg viewBox="0 0 24 24"><path d="M18 16a3 3 0 0 0-2.39 1.2L8.91 13.7a3.03 3.03 0 0 0 0-3.4l6.7-3.5A3 3 0 1 0 15 5a2.98 2.98 0 0 0 .12.8l-6.7 3.5a3 3 0 1 0 0 4.4l6.7 3.5A3 3 0 1 0 18 16Z"/></svg>
        </button>
      </div>

      <div class="profile">
        <div class="avatar">
          <!-- לוגו רשמי של מטאליקה (ויקישיתוף) -->
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Metallica_logo.png" alt="Metallica logo">
        </div>
        <div class="handle">@metallicains</div>
        <div class="bio">Fuel your metal spirit with Metallica merch!</div>
        <div class="tags">#Metallica #ShopNow</div>

        <div class="tabs" role="tablist" aria-label="Switch section">
          <button class="tabbtn active" role="tab" aria-selected="true" data-target="links">Links</button>
          <button class="tabbtn" role="tab" aria-selected="false" data-target="shop">Shop</button>
        </div>
      </div>

      <!-- LINKS -->
      <section id="links" class="content active" data-section aria-label="Links list">
        <a class="row" href="https://example.com/tumblers" target="_blank" rel="noopener">
          <div class="swatch" style="--clr:#60a5fa"></div>
          <div class="title">MTL Tumblers</div>
          <div class="dots"><svg viewBox="0 0 24 24"><path d="M12 6.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Zm0 7a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Zm0 7a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z"/></svg></div>
        </a>

        <a class="row" href="https://example.com/classic-tees" target="_blank" rel="noopener">
          <div class="swatch" style="--clr:#22c55e"></div>
          <div class="title">Classic T-Shirts</div>
          <div class="dots"><svg viewBox="0 0 24 24"><path d="M12 6.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Zm0 7a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Zm0 7a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z"/></svg></div>
        </a>

        <a class="row" href="https://example.com/hawaiian" target="_blank" rel="noopener">
          <div class="swatch" style="--clr:#f59e0b"></div>
          <div class="title">Hawaiian Shirts</div>
          <div class="dots"><svg viewBox="0 0 24 24"><path d="M12 6.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Zm0 7a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Zm0 7a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z"/></svg></div>
        </a>

        <a class="row" href="https://example.com/posters" target="_blank" rel="noopener">
          <div class="swatch" style="--clr:#ef4444"></div>
          <div class="title">Tour Posters</div>
          <div class="dots"><svg viewBox="0 0 24 24"><path d="M12 6.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Zm0 7a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Zm0 7a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z"/></svg></div>
        </a>
      </section>

      <!-- SHOP (empty for now) -->
      <section id="shop" class="content" data-section aria-label="Shop">
        <div class="coming">🛒 Shop is coming soon. Add your affiliate links or products when ready.</div>
      </section>
    </section>
  </main>

  <!-- QR קבוע -->
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
        window.scrollTo({top:0, behavior:'auto'}); // תמיד מתחיל מלמעלה
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

    // QR לפי ה-URL הנוכחי
    (function(){
      const url = encodeURIComponent(location.href);
      const src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${url}`;
      document.getElementById('qr').src = src;
    })();
  </script>
</body>
</html>

