(function () {
  const S = window.SITE, C = window.CATS, P = window.PROJECTS;
  const body = document.body;
  const page = body.dataset.page || "home"; // home | motion | ai | aiugc | ugc | dtc
  const esc = (s) => String(s || "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const ratioCSS = (r) => (r || "16:9").replace(":", " / ");
  const isTall = (r) => { const [w, h] = (r || "16:9").split(":").map(Number); return h > w; };
  const byCat = (k) => P.filter((p) => p.cat === k);

  /* availability: only show videos whose file really exists (a missing file never shows a placeholder) */
  const probe = (src) => {
    if (!src) return Promise.resolve(false);
    const ctl = typeof AbortController === "function" ? new AbortController() : null;
    const timer = setTimeout(() => ctl && ctl.abort(), 8000);
    return fetch(src, { method: "HEAD", cache: "no-store", signal: ctl ? ctl.signal : undefined })
      .then((r) => { clearTimeout(timer); return r.ok && !/text\/html/i.test(r.headers.get("content-type") || ""); })
      .catch(() => { clearTimeout(timer); return true; }); // offline / local preview: don't hide anything
  };
  let _avail = null;
  const AVAIL = () => _avail || (_avail = Promise.all(P.map((p) => probe(p.video).then((ok) => [p, ok]))).then((rs) => {
    const by = {}; Object.keys(C).forEach((k) => (by[k] = []));
    const ok = new Set();
    rs.forEach(([p, good]) => { if (good) { by[p.cat].push(p); ok.add(p.title); } });
    return { by, ok };
  }));

  /* theme: light by default, dark on request, remembered per visitor */
  const root = document.documentElement;
  const KEY = "kd-theme";
  const readTheme = () => { try { const t = localStorage.getItem(KEY); if (t === "dark" || t === "light") return t; } catch (e) {} return "light"; };
  const setTheme = (t, save) => {
    root.dataset.theme = t;
    if (save) { try { localStorage.setItem(KEY, t); } catch (e) {} }
    const m = document.querySelector('meta[name="theme-color"]');
    if (m) m.setAttribute("content", t === "dark" ? "#0a0a0a" : "#f6f5f1");
    const b = document.getElementById("theme-toggle");
    if (b) {
      b.setAttribute("aria-pressed", String(t === "dark"));
      b.setAttribute("aria-label", t === "dark" ? "Switch to light mode" : "Switch to dark mode");
      b.title = t === "dark" ? "Light mode" : "Dark mode";
    }
  };
  setTheme(readTheme(), false);

  /* cursor glow (visible in dark mode only) */
  const glow = document.createElement("div");
  glow.className = "glow";
  body.prepend(glow);
  window.addEventListener("pointermove", (e) => { glow.style.left = e.clientX + "px"; glow.style.top = e.clientY + "px"; });

  /* nav */
  const nav = document.getElementById("nav");
  if (nav) {
    const links = Object.entries(C).map(([k, c]) => `<li data-cat="${k}"><a href="${c.page}" class="${page === k ? "on" : ""}">${c.title}</a></li>`).join("");
    nav.innerHTML = `<div class="wrap">
      <a class="logo" href="index.html">Kanmi David<b>.</b></a>
      <ul>${links}<li><a class="cta" href="#contact">Contact</a></li></ul>
      <button class="theme-toggle" id="theme-toggle" type="button" aria-pressed="false" aria-label="Switch to dark mode">
        <svg class="moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7z"/></svg>
        <svg class="sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
      </button>
    </div>`;
    document.getElementById("theme-toggle").addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark", true));
    setTheme(root.dataset.theme, false);
    AVAIL().then(({ by }) => {
      nav.querySelectorAll("li[data-cat]").forEach((li) => { if (!by[li.dataset.cat].length && li.dataset.cat !== page) li.hidden = true; });
    });
  }

  /* footer */
  const foot = document.getElementById("contact");
  if (foot) {
    const L = S.links || {};
    const btns = [];
    if (S.email) btns.push(`<a class="btn solid" href="mailto:${esc(S.email)}">Email me ↗</a>`);
    [["instagram", "Instagram"], ["linkedin", "LinkedIn"], ["tiktok", "TikTok"], ["x", "X"], ["website", S.studio]].forEach(([k, n]) => {
      if (L[k]) btns.push(`<a class="btn" href="${esc(L[k])}" target="_blank" rel="noopener">${n} ↗</a>`);
    });
    foot.innerHTML = `<div class="wrap">
      <div class="big">Got a brand,<br>a brief, or a <em>wild idea?</em></div>
      <div class="row">${btns.join("") || '<span class="mono" style="color:var(--dim)">Contact details coming soon</span>'}</div>
      <small>© ${new Date().getFullYear()} ${esc(S.name)} · ${esc(S.studio)} · AI-native. Human-directed.</small>
    </div>`;
  }

  /* ---------- HOME ---------- */
  if (page === "home") {
    const track = document.getElementById("track");
    if (track) {
      const words = ["Talking Head Edits", "Event Recaps", "Reels", "UGC Edits", "DTC Ads", "Motion Design", "AI Video", "AI UGC"];
      const run = words.concat(words).map((w) => `<span>${w}</span><span>✦</span>`).join("");
      track.innerHTML = run + run;
    }

    /* trusted by */
    const trusted = document.getElementById("trusted"), logos = document.getElementById("logos");
    if (trusted && logos && Array.isArray(window.TRUSTED) && window.TRUSTED.length) {
      const items = window.TRUSTED.map((t) => {
        const name = esc(t.name);
        const inner = t.logo
          ? `<img src="${esc(t.logo)}" alt="${name}" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'wm',textContent:this.alt}))">`
          : `<span class="wm">${name}</span>`;
        return t.url ? `<a class="logo-item" href="${esc(t.url)}" target="_blank" rel="noopener" title="${name}">${inner}</a>` : `<div class="logo-item" title="${name}">${inner}</div>`;
      }).join("");
      /* scrolling strip: two identical halves, track slides -50% for a seamless loop */
      const half = items + items;
      logos.innerHTML = `<div class="logos-track">${half}${half.replace(/<img /g, "<img aria-hidden=\"true\" ")}</div>`;
      trusted.hidden = false;
    }

    const reel = document.getElementById("reel");
    if (reel && S.showreel) {
      const v = reel.querySelector("video");
      v.muted = true; v.loop = true; v.autoplay = true;
      v.addEventListener("loadeddata", () => {
        reel.classList.add("ok");
        v.play().catch(() => {});
      });
      v.src = S.showreel;
      // play only while on screen, pause when scrolled away
      if ("IntersectionObserver" in window) {
        new IntersectionObserver((entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) v.play().catch(() => {});
            else v.pause();
          });
        }, { threshold: 0.25 }).observe(reel);
      }
    }

    const tiles = document.getElementById("tiles");
    if (tiles) {
      AVAIL().then(({ by }) => {
        tiles.innerHTML = Object.entries(C).filter(([k]) => by[k].length).map(([k, c]) => {
          const first = by[k][0];
          const n = by[k].length;
          return `<a class="tile" href="${c.page}" data-cat="${k}">
            <div class="bg"></div>
            <video muted loop playsinline preload="metadata" src="${esc(first.video)}#t=0.5" onerror="this.remove()"></video>
            <span class="num mono">${c.num}</span>
            <span class="count mono">${n} ${n === 1 ? "video" : "videos"}</span>
            <h3>${c.title}</h3><p>${c.blurb}</p><span class="go">Watch the work →</span>
          </a>`;
        }).join("");
        tiles.querySelectorAll(".tile").forEach((t) => {
          const v = t.querySelector("video");
          if (!v) return;
          t.addEventListener("mouseenter", () => v.play().catch(() => {}));
          t.addEventListener("mouseleave", () => { v.pause(); });
        });
      });
    }

    const chips = document.getElementById("tools");
    if (chips) chips.innerHTML = S.tools.map((t) => `<span class="chip">${esc(t)}</span>`).join("");
    const stats = document.getElementById("stats");
    if (stats) stats.innerHTML = S.stats.map((s) => `<div class="stat"><b>${esc(s.n)}</b><span>${esc(s.l)}</span></div>`).join("");
  }

  /* ---------- CATEGORY PAGE ---------- */
  let list = [];
  const pick = page === "pick" ? (window.PICKS || {})[body.dataset.pick] : null;
  if (C[page] || pick) {
    const c = C[page];
    document.getElementById("head").innerHTML = pick
      ? `<div class="wrap"><span class="num mono">Selected work</span><h1>${esc(pick.title)}</h1><p>${esc(pick.blurb)}</p></div>`
      : `<div class="wrap"><span class="num mono">${c.num}</span><h1>${c.title}</h1><p>${c.blurb}</p></div>`;
    const grid = document.getElementById("grid");
    AVAIL().then(({ by, ok }) => {
      list = pick ? pick.items.map((t) => P.find((p) => p.title === t)).filter((p) => p && ok.has(p.title)) : by[page];
      grid.innerHTML = list.length ? list.map((p, i) => `
        <button class="card" data-i="${i}" aria-label="Play ${esc(p.title)}">
          <div class="thumb" style="aspect-ratio:${ratioCSS(p.ratio)}">
            ${p.poster ? `<img src="${esc(p.poster)}" alt="" loading="lazy">` : ""}
            <video muted loop playsinline preload="metadata" src="${esc(p.video)}#t=0.5"></video>
            <span class="play">▶</span>
          </div>
          <div class="meta"><h3>${esc(p.title)}</h3>
          <div class="sub">${esc([p.client, p.year].filter(Boolean).join(" · "))}</div></div>
        </button>`).join("") : `<div class="empty">New work is being added to this page. Check back soon.</div>`;

      grid.querySelectorAll(".card").forEach((card) => {
        const thumb = card.querySelector(".thumb");
        const v = thumb.querySelector("video");
        v.addEventListener("loadedmetadata", () => {
          if (v.videoWidth && v.videoHeight) thumb.style.aspectRatio = v.videoWidth + " / " + v.videoHeight;
        });
        card.addEventListener("mouseenter", () => v.play().catch(() => {}));
        card.addEventListener("mouseleave", () => { v.pause(); v.currentTime = 0.5; });
        card.addEventListener("click", () => openModal(+card.dataset.i));
      });

      const other = document.getElementById("other");
      if (other) other.innerHTML = Object.entries(C).filter(([k]) => k !== page && by[k].length)
        .map(([, o]) => `<a class="btn" href="${o.page}">${o.title} →</a>`).join("");
    });
  }

  /* ---------- MODAL ---------- */
  const modal = document.getElementById("modal");
  let cur = 0;
  function openModal(i) {
    if (!modal || !list.length) return;
    cur = (i + list.length) % list.length;
    const p = list[cur];
    const row = (k, v) => v ? `<dt>${k}</dt><dd>${esc(v)}</dd>` : "";
    modal.innerHTML = `<div class="sheet ${isTall(p.ratio) ? "tall" : ""}" role="dialog" aria-modal="true" aria-label="${esc(p.title)}">
      <div class="player">
        <video controls autoplay playsinline preload="auto" ${p.poster ? `poster="${esc(p.poster)}"` : ""} src="${esc(p.video)}"></video>
      </div>
      <div class="info">
        <span class="mono how">${C[p.cat].title}</span>
        <h2>${esc(p.title)}</h2>
        <dl>${row("Client", p.client)}${row("Year", p.year)}${row("Role", p.role)}${row("Tools", (p.tools || []).join(", "))}</dl>
        <p>${esc(p.brief)}</p>
        <div class="modal-bar">
          <button class="sq" id="prev" aria-label="Previous">←</button>
          <button class="sq" id="next" aria-label="Next">→</button>
          <button class="sq close" id="close" aria-label="Close">✕</button>
        </div>
      </div></div>`;
    const mv = modal.querySelector("video");
    mv.addEventListener("loadedmetadata", () => {
      modal.querySelector(".sheet").classList.toggle("tall", mv.videoHeight > mv.videoWidth);
    });
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
    modal.querySelector("#prev").onclick = () => openModal(cur - 1);
    modal.querySelector("#next").onclick = () => openModal(cur + 1);
    modal.querySelector("#close").onclick = closeModal;
  }
  function closeModal() {
    modal.classList.remove("open");
    modal.innerHTML = "";
    document.body.style.overflow = "";
  }
  if (modal) {
    modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
    window.addEventListener("keydown", (e) => {
      if (!modal.classList.contains("open")) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") openModal(cur + 1);
      if (e.key === "ArrowLeft") openModal(cur - 1);
    });
  }
})();
