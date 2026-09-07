(function () {
  "use strict";

  // always start at the top on load/refresh — no scroll restore, no hash jump
  try { if ("scrollRestoration" in history) history.scrollRestoration = "manual"; } catch (e) {}
  if (location.hash) {
    try { history.replaceState(null, "", location.pathname + location.search); } catch (e) {}
  }
  window.scrollTo(0, 0);

  var navTree = document.getElementById("navTree");
  var content = document.getElementById("content");
  var searchInput = document.getElementById("search");
  var searchCount = document.getElementById("search-count");
  var clearBtn = document.getElementById("clearSearch");
  var noResults = document.getElementById("noResults");
  var sidebar = document.getElementById("sidebar");
  var backdrop = document.getElementById("backdrop");
  var toTop = document.getElementById("toTop");
  var readProgress = document.getElementById("readProgress");
  var progressText = document.getElementById("progressText");
  var progressFill = document.getElementById("progressFill");
  var progressHint = document.getElementById("progressHint");

  var freqLabel = { high: "High", med: "Medium", low: "Low" };
  var DONE_KEY = "engt105-done-v1";

  function stripHtml(s) {
    var d = document.createElement("div");
    d.innerHTML = s || "";
    return (d.textContent || "").slice(0, 600);
  }
  function escAttr(s) {
    return String(s || "").toLowerCase().replace(/"/g, "&quot;");
  }

  // ---------- done state ----------
  var doneSet = {};
  try {
    var raw = localStorage.getItem(DONE_KEY);
    if (raw) JSON.parse(raw).forEach(function (id) { doneSet[id] = true; });
  } catch (e) {}
  function saveDone() {
    try { localStorage.setItem(DONE_KEY, JSON.stringify(Object.keys(doneSet))); } catch (e) {}
  }

  var allTopics = [];
  UNITS.forEach(function (u) { (u.topics || []).forEach(function (t) { allTopics.push(t); }); });
  var totalHigh = allTopics.filter(function (t) { return t.freq === "high"; }).length;

  var statTopics = document.getElementById("statTopics");
  var statHigh = document.getElementById("statHigh");
  if (statTopics) statTopics.textContent = allTopics.length;
  if (statHigh) statHigh.textContent = totalHigh;

  // ---------- build nav ----------
  var navHtml = "";
  UNITS.forEach(function (unit) {
    var n = (unit.topics || []).length;
    navHtml += '<div class="nav-unit" data-unit="' + unit.id + '">'
      + '<div class="nav-unit-head"><span>' + unit.label + " — " + unit.title + "</span>"
      + '<span class="nav-unit-count">' + n + "</span></div>";
    unit.topics.forEach(function (t) {
      var dot = t.freq === "high" ? "high" : (t.freq === "med" ? "med" : "low");
      navHtml += '<a class="nav-link' + (doneSet[t.id] ? " done" : "") + '" href="#' + t.id + '" data-id="' + t.id + '">'
        + '<span class="nav-dot ' + dot + '"></span>'
        + '<span class="nav-title">' + t.title + "</span>"
        + '<span class="nav-check">✓</span>'
        + "</a>";
    });
    navHtml += "</div>";
  });
  navTree.innerHTML = navHtml;

  // ---------- build content ----------
  var contentHtml = "";
  UNITS.forEach(function (unit, ui) {
    var roman = /Unit\s+([IVX]+)/.exec(unit.label || "");
    var badge = roman ? roman[1] : "★";
    contentHtml += '<section class="unit-block">'
      + '<div class="unit-header" id="' + unit.id + '-header">'
      + '<div class="unit-num">' + badge + "</div>"
      + "<div><div class='unit-eyebrow'>" + unit.label + "</div>"
      + "<h2>" + unit.title + "</h2>"
      + '<div class="unit-desc">' + unit.desc + "</div></div>"
      + '<span class="unit-count">' + unit.topics.length + " topics</span>"
      + "</div>";
    unit.topics.forEach(function (t) {
      var badgeCls = t.freq === "high" ? "badge-high" : (t.freq === "med" ? "badge-med" : "badge-low");
      var searchText = escAttr(t.title + " " + (t.summary || "") + " " + stripHtml(t.html));
      contentHtml += '<article class="topic' + (doneSet[t.id] ? " done" : "") + '" id="' + t.id + '" data-freq="' + t.freq + '" data-searchtext="' + searchText + '">'
        + '<div class="topic-main">'
        + '<div class="topic-head"><h3 class="topic-title">' + t.title + "</h3>"
        + '<div class="topic-tools"><span class="badge ' + badgeCls + '">' + freqLabel[t.freq] + '</span>'
        + '<button class="done-btn" data-done="' + t.id + '" title="Mark as studied" aria-label="Mark ' + t.title.replace(/"/g, "") + ' as studied">✓</button>'
        + "</div></div>"
        + '<div class="summary">' + t.summary + "</div>"
        + (t.exam ? '<div class="exam-links"><span><b>Past-exam link —</b> ' + t.exam + "</span></div>" : "")
        + '<div class="topic-body">' + t.html + "</div>"
        + '<div class="topic-foot"><a class="topic-anchor" href="#' + t.id + '">§ Link to this topic</a>'
        + '<button class="mark-btn" data-done="' + t.id + '">' + (doneSet[t.id] ? "✓ Studied — undo" : "Mark as studied") + "</button>"
        + "</div>"
        + "</div></article>";
    });
    contentHtml += "</section>";
  });
  content.innerHTML = contentHtml;

  var topics = Array.prototype.slice.call(document.querySelectorAll(".topic"));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));

  // copy-link behaviour: update hash without jump-jank is fine natively; also copy to clipboard
  content.addEventListener("click", function (e) {
    var anchor = e.target.closest ? e.target.closest(".topic-anchor") : null;
    if (anchor) {
      var url = location.origin + location.pathname + anchor.getAttribute("href");
      if (navigator.clipboard) navigator.clipboard.writeText(url).catch(function () {});
    }
  });

  // ---------- done toggling ----------
  function refreshProgress() {
    var done = Object.keys(doneSet).length;
    var total = allTopics.length;
    var pct = total ? Math.round((done / total) * 100) : 0;
    if (progressText) progressText.textContent = done + " / " + total;
    if (progressFill) progressFill.style.width = pct + "%";
    if (progressHint) {
      progressHint.textContent = done === 0
        ? "Tick topics off as you master them. Saved on this device."
        : done === total
          ? "All done — run a timed mock next."
          : pct + "% complete — High-frequency topics first.";
    }
  }
  function setDone(id, on) {
    if (on) doneSet[id] = true; else delete doneSet[id];
    saveDone();
    var card = document.getElementById(id);
    if (card) card.classList.toggle("done", !!on);
    navLinks.forEach(function (l) {
      if (l.dataset.id === id) l.classList.toggle("done", !!on);
    });
    var btns = document.querySelectorAll('[data-done="' + id + '"].mark-btn');
    Array.prototype.forEach.call(btns, function (b) {
      b.textContent = on ? "✓ Studied — undo" : "Mark as studied";
    });
    refreshProgress();
  }
  document.addEventListener("click", function (e) {
    var btn = e.target.closest ? e.target.closest("[data-done]") : null;
    if (!btn) return;
    var id = btn.getAttribute("data-done");
    setDone(id, !doneSet[id]);
  });
  var resetBtn = document.getElementById("resetProgress");
  if (resetBtn) resetBtn.addEventListener("click", function () {
    if (!confirm("Reset all study progress?")) return;
    doneSet = {};
    saveDone();
    topics.forEach(function (t) { t.classList.remove("done"); });
    navLinks.forEach(function (l) { l.classList.remove("done"); });
    document.querySelectorAll(".mark-btn").forEach(function (b) { b.textContent = "Mark as studied"; });
    refreshProgress();
  });
  refreshProgress();

  // ---------- scroll-spy ----------
  var spyObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var id = entry.target.id;
        navLinks.forEach(function (l) { l.classList.toggle("active", l.dataset.id === id); });
      }
    });
  }, { rootMargin: "-15% 0px -70% 0px", threshold: 0 });
  topics.forEach(function (t) { spyObserver.observe(t); });

  // ---------- drawer ----------
  function openSidebar(open) {
    sidebar.classList.toggle("open", open);
    backdrop.classList.toggle("show", open);
  }
  var menuBtn = document.getElementById("menuBtn");
  if (menuBtn) menuBtn.addEventListener("click", function () { openSidebar(true); });
  backdrop.addEventListener("click", function () { openSidebar(false); });
  navLinks.forEach(function (l) {
    l.addEventListener("click", function () { openSidebar(false); });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") openSidebar(false);
  });

  // ---------- search ----------
  function applySearch() {
    var q = searchInput.value.trim().toLowerCase();
    clearBtn.style.display = q ? "inline-flex" : "none";
    var visibleCount = 0;
    if (!q) {
      topics.forEach(function (t) { t.style.display = ""; });
      document.querySelectorAll(".unit-block, .unit-header").forEach(function (el) { el.style.display = ""; });
      navLinks.forEach(function (l) { l.style.display = ""; });
      document.querySelectorAll(".nav-unit").forEach(function (el) { el.style.display = ""; });
      searchCount.style.display = "none";
      noResults.style.display = "none";
      return;
    }
    topics.forEach(function (t) {
      var match = (t.getAttribute("data-searchtext") || "").indexOf(q) !== -1;
      t.style.display = match ? "" : "none";
      if (match) visibleCount++;
    });
    navLinks.forEach(function (l) {
      var topicEl = document.getElementById(l.dataset.id);
      l.style.display = topicEl && topicEl.style.display !== "none" ? "" : "none";
    });
    UNITS.forEach(function (unit) {
      var anyVisible = unit.topics.some(function (t) {
        var el = document.getElementById(t.id);
        return el && el.style.display !== "none";
      });
      var header = document.getElementById(unit.id + "-header");
      var block = header ? header.closest(".unit-block") : null;
      if (block) block.style.display = anyVisible ? "" : "none";
      var navGroup = navTree.querySelector('[data-unit="' + unit.id + '"]');
      if (navGroup) navGroup.style.display = anyVisible ? "" : "none";
    });
    searchCount.style.display = "block";
    searchCount.textContent = visibleCount + (visibleCount === 1 ? " match" : " matches");
    noResults.style.display = visibleCount === 0 ? "block" : "none";
  }
  searchInput.addEventListener("input", applySearch);
  clearBtn.addEventListener("click", function () {
    searchInput.value = "";
    applySearch();
    searchInput.focus();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
  });

  // ---------- random topic ----------
  var surpriseBtn = document.getElementById("surpriseBtn");
  if (surpriseBtn) surpriseBtn.addEventListener("click", function () {
    var pool = topics.filter(function (t) { return t.style.display !== "none" && !doneSet[t.id]; });
    if (!pool.length) pool = topics;
    var pick = pool[Math.floor(Math.random() * pool.length)];
    if (pick) {
      pick.scrollIntoView({ behavior: "smooth", block: "start" });
      pick.style.boxShadow = "0 0 0 3px var(--brand)";
      setTimeout(function () { pick.style.boxShadow = ""; }, 1600);
      history.replaceState(null, "", "#" + pick.id);
    }
  });

  // ---------- scroll: progress + toTop ----------
  function onScroll() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    var pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    readProgress.style.width = pct + "%";
    toTop.classList.toggle("show", h.scrollTop > 700);
  }
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
  var topLink = document.getElementById("topLink");
  if (topLink) topLink.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ---------- battle-plan ticks ----------
  var PLAN_KEY = "engt105-plan-v1";
  var planSet = {};
  try {
    var praw = localStorage.getItem(PLAN_KEY);
    if (praw) JSON.parse(praw).forEach(function (id) { planSet[id] = true; });
  } catch (e) {}
  function savePlan() {
    try { localStorage.setItem(PLAN_KEY, JSON.stringify(Object.keys(planSet))); } catch (e) {}
  }
  var planFill = document.getElementById("planFill");
  var planText = document.getElementById("planText");
  function refreshPlan() {
    var boxes = Array.prototype.slice.call(document.querySelectorAll("[data-task]"));
    var done = boxes.filter(function (b) { return b.checked; }).length;
    var total = boxes.length;
    if (planFill) planFill.style.width = (total ? Math.round(done / total * 100) : 0) + "%";
    if (planText) planText.innerHTML = "<strong>" + done + " / " + total + "</strong> tasks ticked";
    Array.prototype.forEach.call(document.querySelectorAll(".day-card"), function (card) {
      var dayBoxes = Array.prototype.slice.call(card.querySelectorAll("[data-task]"));
      var dDone = dayBoxes.filter(function (b) { return b.checked; }).length;
      var prog = card.querySelector("[data-day-prog]");
      var fill = card.querySelector("[data-day-fill]");
      if (prog) prog.textContent = dDone + " / " + dayBoxes.length;
      if (fill) fill.style.width = (dayBoxes.length ? (dDone / dayBoxes.length * 100) : 0) + "%";
    });
  }
  (function initPlan() {
    var boxes = document.querySelectorAll("[data-task]");
    Array.prototype.forEach.call(boxes, function (box) {
      var id = box.getAttribute("data-task");
      if (planSet[id]) box.checked = true;
      box.addEventListener("change", function () {
        if (box.checked) planSet[id] = true; else delete planSet[id];
        savePlan();
        refreshPlan();
      });
    });
    refreshPlan();
  })();

  // ---------- hero overdrive ----------
  var hero = document.getElementById("hero");
  var heroInner = hero ? hero.querySelector(".hero-inner") : null;
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia && window.matchMedia("(pointer: fine)").matches;
  var mouse = { x: -9999, y: -9999, inside: false };

  // hero text flees the cursor: headline letters scatter one by one, blocks drift as units
  var letters = [];
  var blocks = [];
  var heroFx = hero && heroInner && finePointer && !reduceMotion;
  if (heroFx) {
    var splitNode = function (node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (child) {
        if (child.nodeType === 3) {
          var frag = document.createDocumentFragment();
          child.textContent.split("").forEach(function (ch) {
            if (ch === " ") { frag.appendChild(document.createTextNode(" ")); return; }
            var s = document.createElement("span");
            s.className = "fl";
            s.textContent = ch;
            frag.appendChild(s);
            letters.push({ el: s, x: 0, y: 0, vx: 0, vy: 0 });
          });
          node.replaceChild(frag, child);
        } else if (child.nodeType === 1) {
          splitNode(child);
        }
      });
    };
    [heroInner.querySelector("h1"), heroInner.querySelector(".hero p")].forEach(function (root) {
      if (root) splitNode(root);
    });
    Array.prototype.forEach.call(
      heroInner.querySelectorAll(".hero-kicker, .stat, .legend, .hero-actions, .hero-foot"),
      function (el) { blocks.push({ el: el, x: 0, y: 0, max: 22 }); }
    );
  }

  if (hero && finePointer && !reduceMotion) {
    hero.addEventListener("mousemove", function (e) {
      var r = hero.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.inside = true;
      hero.style.setProperty("--mx", mouse.x + "px");
      hero.style.setProperty("--my", mouse.y + "px");
      if (heroInner) {
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        heroInner.style.transform = "perspective(1200px) rotateY(" + (px * 3).toFixed(2) + "deg) rotateX(" + (-py * 3).toFixed(2) + "deg)";
      }
      Array.prototype.forEach.call(hero.querySelectorAll(".btn-primary,.btn-ghost"), function (b) {
        var br = b.getBoundingClientRect();
        var cx = br.left + br.width / 2 - r.left;
        var cy = br.top + br.height / 2 - r.top;
        var dx = mouse.x - cx, dy = mouse.y - cy;
        var d = Math.hypot(dx, dy);
        b.style.transform = (d < 110 && d > 1) ? "translate(" + (dx / d * 5).toFixed(1) + "px," + (dy / d * 5).toFixed(1) + "px)" : "";
      });
    });
    hero.addEventListener("mouseleave", function () {
      mouse.inside = false;
      mouse.x = -9999;
      if (heroInner) heroInner.style.transform = "";
      Array.prototype.forEach.call(hero.querySelectorAll(".btn-primary,.btn-ghost"), function (b) { b.style.transform = ""; });
    });
  }

  // dust motes on canvas
  var heroVisible = true;
  if ("IntersectionObserver" in window && hero) {
    new IntersectionObserver(function (entries) { heroVisible = entries[0].isIntersecting; }).observe(hero);
  }
  var dust = document.getElementById("dust");
  var dctx = dust ? dust.getContext("2d") : null;
  var motes = [];
  function sizeDust() {
    if (!hero || !dust || !dctx) return;
    var r = hero.getBoundingClientRect();
    if (r.width < 2) return;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    dust.width = Math.round(r.width * dpr);
    dust.height = Math.round(r.height * dpr);
    dctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    motes = [];
    var n = Math.max(20, Math.min(70, Math.round(r.width / 14)));
    for (var i = 0; i < n; i++) {
      motes.push({ x: Math.random() * r.width, y: Math.random() * r.height, r: 0.6 + Math.random() * 1.6, s: 4 + Math.random() * 12, ph: Math.random() * 6.28 });
    }
  }
  var lastT = 0;
  function fxLoop(t) {
    requestAnimationFrame(fxLoop);
    if (!heroVisible || reduceMotion || !hero) return;
    var dt = Math.min(0.05, ((t - lastT) / 1000) || 0.016);
    lastT = t;
    var r = hero.getBoundingClientRect();
    var dx, dy, d, j;
    if (heroFx) {
      for (j = 0; j < letters.length; j++) {
        var L = letters[j];
        var lr = L.el.getBoundingClientRect();
        dx = (lr.left + lr.width / 2) - (r.left + mouse.x);
        dy = (lr.top + lr.height / 2) - (r.top + mouse.y);
        d = Math.hypot(dx, dy);
        if (mouse.inside && d < 160 && d > 0.5) {
          var lf = (1 - d / 160) * 3200;
          L.vx += (dx / d) * lf * dt;
          L.vy += (dy / d) * lf * dt;
        }
        L.vx += ((0 - L.x) * 7 - L.vx * 5) * dt;
        L.vy += ((0 - L.y) * 7 - L.vy * 5) * dt;
        L.x = Math.max(-46, Math.min(46, L.x + L.vx * dt));
        L.y = Math.max(-46, Math.min(46, L.y + L.vy * dt));
        var rot = Math.max(-12, Math.min(12, L.vx * 0.015));
        L.el.style.transform = "translate(" + L.x.toFixed(1) + "px," + L.y.toFixed(1) + "px) rotate(" + rot.toFixed(1) + "deg)";
      }
      for (j = 0; j < blocks.length; j++) {
        var B = blocks[j];
        var br2 = B.el.getBoundingClientRect();
        dx = (br2.left + br2.width / 2) - (r.left + mouse.x);
        dy = (br2.top + br2.height / 2) - (r.top + mouse.y);
        d = Math.hypot(dx, dy);
        var R = 210, tx = 0, ty = 0;
        if (mouse.inside && d < R && d > 0.5) {
          var mg = (1 - d / R) * B.max;
          tx = (dx / d) * mg;
          ty = (dy / d) * mg;
        }
        B.x += (tx - B.x) * Math.min(1, dt * 11);
        B.y += (ty - B.y) * Math.min(1, dt * 11);
        B.el.style.transform = "translate(" + B.x.toFixed(1) + "px," + B.y.toFixed(1) + "px)";
      }
    }
    var i2;
    if (dctx && motes.length) {
      dctx.clearRect(0, 0, r.width, r.height);
      for (i2 = 0; i2 < motes.length; i2++) {
        var m = motes[i2];
        m.y -= m.s * dt;
        m.x += Math.sin(t / 1600 + m.ph) * 6 * dt;
        if (m.y < -4) { m.y = r.height + 4; m.x = Math.random() * r.width; }
        dx = m.x - mouse.x;
        dy = m.y - mouse.y;
        d = Math.hypot(dx, dy);
        if (mouse.inside && d < 120 && d > 0.5) {
          m.x += (dx / d) * 40 * dt;
          m.y += (dy / d) * 40 * dt;
        }
        var a = 0.10 + 0.10 * Math.sin(t / 700 + m.ph);
        dctx.beginPath();
        dctx.arc(m.x, m.y, m.r, 0, 6.283);
        dctx.fillStyle = "rgba(232,196,138," + a.toFixed(3) + ")";
        dctx.fill();
      }
    }
  }
  if (!reduceMotion && hero) {
    sizeDust();
    window.addEventListener("resize", sizeDust);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(sizeDust);
    setTimeout(sizeDust, 300);
    requestAnimationFrame(fxLoop);
  }

  // ---------- exam countdown (fixed: Sept 10, 11 AM) ----------
  var cdTime = document.getElementById("cdTime");
  var examTs = new Date(2026, 8, 10, 11, 0, 0, 0).getTime();
  function pad2(n) { return (n < 10 ? "0" : "") + n; }
  function tickCd() {
    if (!cdTime) return;
    var diff = examTs - Date.now();
    if (diff <= 0) { cdTime.textContent = "Today — go crush it."; return; }
    var s = Math.floor(diff / 1000);
    var dd = Math.floor(s / 86400);
    var hh = Math.floor((s % 86400) / 3600);
    var mm = Math.floor((s % 3600) / 60);
    var ss = s % 60;
    cdTime.innerHTML = "T–" + dd + "<small>d</small> " + pad2(hh) + "<small>h</small> " + pad2(mm) + "<small>m</small> " + pad2(ss) + "<small>s</small>";
  }
  tickCd();
  setInterval(tickCd, 1000);

  // ---------- animated stat counters ----------
  function countUp(el, target, dur) {
    if (!el) return;
    if (reduceMotion) { el.textContent = target; return; }
    var t0 = null;
    function step(t) {
      if (!t0) t0 = t;
      var p = Math.min(1, (t - t0) / dur);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  [["statDocs", 23], ["statUnits", UNITS.length - 1], ["statTopics", allTopics.length], ["statHigh", totalHigh]].forEach(function (pair) {
    countUp(document.getElementById(pair[0]), pair[1], 900);
  });

})();
