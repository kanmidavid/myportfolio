(function () {
  const S = window.SITE, C = window.CATS, P = window.PROJECTS;
  const body = document.body;
  const page = body.dataset.page || "home"; // home | motion | ai | aiugc | ugc | dtc
  const esc = (s) => String(s || "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const ratioCSS = (r) => (r || "16:9").replace(":", " / ");
  const isTall = (r) => { const [w, h] = (r || "16:9").split(":").map(Number); return h > w; };
  const byCat = (k) => P.filter((p) => p.cat === k);

  /* cursor glow */
  const glow = document.createElement("div");
  glow.className = "glow";
  body.prepend(glow);
  window.addEventListener("pointermove", (e) => { glow.style.left = e.clientX + "px"; glow.style.top = e.clientY + "px"; });

  /* nav */
  const nav = document.getElementById("nav");
  if (nav) {
    const links = Object.entries(C).map(([k, c]) => `<li><a href="${c.page}" class="${page === k ? "on" : ""}">${c.title}</a></li>`).join("");
    nav.innerHTML = `<div class="wrap">
      <a class="logo" href="index.html">Kanmi David<b>.</b></a>
      <ul><li><a href="index.html" class="${page === "home" ? "on" : ""}">Home</a></li>${links}<li><a class="cta" href="#contact">Contact</a></li></ul>
    </div>`;
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
      const words = ["Motion Design", "AI Video", "AI UGC", "UGC Edits", "DTC Ads", "Brand Films", "Social Ads"];
      const run = words.concat(words).map((w) => `<span>${w}</span><span>✦</span>`).join("");
      track.innerHTML = run + run;
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
      tiles.innerHTML = Object.entries(C).map(([k, c]) => {
        const first = byCat(k)[0];
        const n = byCat(k).length;
        return `<a class="tile" href="${c.page}" data-cat="${k}">
          <div class="bg"></div>
          ${first && first.video ? `<video muted loop playsinline preload="metadata" src="${esc(first.video)}#t=0.5" onerror="this.remove()"></video>` : ""}
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
    list = pick ? pick.items.map((t) => P.find((p) => p.title === t)).filter(Boolean) : byCat(page);
    document.getElementById("head").innerHTML = pick
      ? `<div class="wrap"><span class="num mono">Selected work</span><h1>${esc(pick.title)}</h1><p>${esc(pick.blurb)}</p></div>`
      : `<div class="wrap"><span class="num mono">${c.num} / 0${Object.keys(C).length}</span><h1>${c.title}</h1><p>${c.blurb}</p></div>`;
    const grid = document.getElementById("grid");
    grid.innerHTML = list.length ? list.map((p, i) => `
      <button class="card" data-i="${i}" aria-label="Play ${esc(p.title)}">
        <div class="thumb" style="aspect-ratio:${ratioCSS(p.ratio)}">
          ${p.poster ? `<img src="${esc(p.poster)}" alt="" loading="lazy">` : ""}
          ${p.video ? `<video muted loop playsinline preload="metadata" src="${esc(p.video)}#t=0.5"></video>` : ""}
          <div class="ph mono">Video coming<br>soon<br><small style="opacity:.5;font-size:.6rem;word-break:break-all">${esc(p.video)}</small></div>
          <span class="play">▶</span>
        </div>
        <div class="meta"><h3>${esc(p.title)}</h3>
        <div class="sub">${esc([p.client, p.year].filter(Boolean).join(" · "))}</div></div>
      </button>`).join("") : `<div class="empty">Nothing here yet. Add projects in data.js.</div>`;

    grid.querySelectorAll(".card").forEach((card) => {
      const thumb = card.querySelector(".thumb");
      const v = thumb.querySelector("video");
      if (v) {
        v.addEventListener("error", () => thumb.classList.add("missing"));
        v.addEventListener("loadedmetadata", () => {
          if (v.videoWidth && v.videoHeight) thumb.style.aspectRatio = v.videoWidth + " / " + v.videoHeight;
        });
        card.addEventListener("mouseenter", () => v.play().catch(() => {}));
        card.addEventListener("mouseleave", () => { v.pause(); v.currentTime = 0.5; });
      } else thumb.classList.add("missing");
      card.addEventListener("click", () => openModal(+card.dataset.i));
    });

    const other = document.getElementById("other");
    if (other) other.innerHTML = Object.entries(C).filter(([k]) => k !== page)
      .map(([, o]) => `<a class="btn" href="${o.page}">${o.title} →</a>`).join("");
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
