(function () {
  "use strict";

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
  var themeBtn = document.getElementById("themeBtn");
  var themeLabel = document.getElementById("themeLabel");

  var freqLabel = { high: "High", med: "Medium", low: "Low" };
  var DONE_KEY = "engt105-done-v1";
  var THEME_KEY = "engt105-theme";

  function stripHtml(s) {
    var d = document.createElement("div");
    d.innerHTML = s || "";
    return (d.textContent || "").slice(0, 600);
  }
  function escAttr(s) {
    return String(s || "").toLowerCase().replace(/"/g, "&quot;");
  }

  // ---------- theme ----------
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    if (themeLabel) themeLabel.textContent = t === "dark" ? "Light" : "Dark";
    try { localStorage.setItem(THEME_KEY, t); } catch (e) {}
  }
  var savedTheme = null;
  try { savedTheme = localStorage.getItem(THEME_KEY); } catch (e) {}
  if (savedTheme === "dark" || savedTheme === "light") {
    applyTheme(savedTheme);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    applyTheme("dark");
  }
  if (themeBtn) themeBtn.addEventListener("click", function () {
    var cur = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(cur);
  });

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
    var nums = ["I", "II", "III", "IV", "V", "VI"];
    var badge = nums[ui] || (ui + 1);
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
        + '<div class="topic-foot"><a class="topic-anchor" href="#' + t.id + '">⛓ Copy link to topic</a>'
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
          ? "All done — run a timed mock next. 🎉"
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

  // deep-link: flash target
  if (location.hash) {
    var target = document.getElementById(location.hash.slice(1));
    if (target) setTimeout(function () { target.scrollIntoView({ block: "start" }); }, 60);
  }
})();
