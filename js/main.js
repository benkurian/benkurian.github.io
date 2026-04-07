import { SITE_DATA } from "../data/siteData.js";

/* ═══════════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════════ */
var $ = function(sel) { return document.querySelector(sel); };
var $$ = function(sel) { return document.querySelectorAll(sel); };

/* ═══════════════════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════════════════ */
$("#heroDate").textContent = SITE_DATA.hero.date;
$("#heroName").innerHTML = SITE_DATA.hero.name
  .map(function(l) { return "<span>" + l + "</span>"; })
  .join("");
$("#heroSub").textContent = SITE_DATA.hero.subtitle;

if (SITE_DATA.hero.bgImage) {
  $("#heroBg").style.backgroundImage = "url('" + SITE_DATA.hero.bgImage + "')";
}

/* ═══════════════════════════════════════════════════════════════════
   ABOUT
   ═══════════════════════════════════════════════════════════════════ */
(function renderAbout() {
  var a = SITE_DATA.about;

  var photoHTML = a.photo
    ? '<img src="' + a.photo + '" alt="Ben Kurian">'
    : "Photo";

  $("#aboutInner").innerHTML =
    '<div class="reveal">' +
      '<div class="about-label">' + a.label + "</div>" +
      '<h2 class="about-heading">' + a.heading + "</h2>" +
      a.paragraphs.map(function(p) { return '<p class="about-text">' + p + "</p>"; }).join("") +
    "</div>" +
    '<div class="about-right reveal">' +
      '<div class="about-photo">' + photoHTML + "</div>" +
    "</div>";
})();

/* ═══════════════════════════════════════════════════════════════════
   NAV (desktop + mobile)
   ═══════════════════════════════════════════════════════════════════ */
(function renderNav() {
  var items = ['<li><a href="#about" data-section="about">About</a></li>'];
  SITE_DATA.sections.forEach(function(s) {
    items.push('<li><a href="#' + s.id + '" data-section="' + s.id + '">' + s.title + "</a></li>");
  });
  if (SITE_DATA.resumeUrl) {
    items.push('<li><a href="' + SITE_DATA.resumeUrl + '" target="_blank">Résumé</a></li>');
  }
  $("#navList").innerHTML = items.join("");

  var mobileItems = ['<a href="#about">About</a>'];
  SITE_DATA.sections.forEach(function(s) {
    mobileItems.push('<a href="#' + s.id + '">' + s.title + "</a>");
  });
  if (SITE_DATA.resumeUrl) {
    mobileItems.push('<a href="' + SITE_DATA.resumeUrl + '" target="_blank">Résumé</a>');
  }
  $("#mobileNav").innerHTML = mobileItems.join("");
})();

/* ═══════════════════════════════════════════════════════════════════
   HAMBURGER
   ═══════════════════════════════════════════════════════════════════ */
(function initHamburger() {
  var btn = $("#hamburgerBtn");
  var nav = $("#mobileNav");

  function closeMobileNav() {
    btn.classList.remove("active");
    nav.classList.remove("open");
    document.body.style.overflow = "";
  }

  btn.addEventListener("click", function() {
    var isOpen = nav.classList.contains("open");
    if (isOpen) {
      closeMobileNav();
    } else {
      btn.classList.add("active");
      nav.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  });

  nav.addEventListener("click", function(e) {
    if (e.target.tagName === "A") {
      closeMobileNav();
    }
  });
})();

/* ═══════════════════════════════════════════════════════════════════
   SECTIONS + CARDS
   ═══════════════════════════════════════════════════════════════════ */
(function renderSections() {
  var html = "";

  SITE_DATA.sections.forEach(function(section) {
    html +=
      '<section class="section" id="' + section.id + '">' +
        '<div class="section-header reveal">' +
          '<span class="section-number">' + section.number + "</span>" +
          '<h2 class="section-title">' + section.title + "</h2>" +
        "</div>" +
        '<div class="grid stagger" data-layout="' + section.layout + '">' +
          section.cards.map(function(card) {
            var bgStyle = card.bgImage
              ? "style=\"background-image:url('" + card.bgImage + "')\""
              : "";
            return (
              '<div class="card reveal" data-modal="' + card.id + '" tabindex="0" role="button" aria-label="View details: ' + card.title + '">' +
                '<div class="card-bg" ' + bgStyle + "></div>" +
                '<div class="card-overlay"></div>' +
                '<div class="card-arrow"><svg viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg></div>' +
                '<div class="card-content">' +
                  '<div class="card-label">' + card.label + "</div>" +
                  '<div class="card-title">' + card.title + "</div>" +
                  '<div class="card-desc">' + card.desc + "</div>" +
                "</div>" +
              "</div>"
            );
          }).join("") +
        "</div>" +
      "</section>";
  });

  $("#mainContent").innerHTML = html;
})();

/* ═══════════════════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════════════════ */
(function renderFooter() {
  var f = SITE_DATA.footer;
  $("#footerEl").innerHTML =
    "<div>" +
      "<h3>" + f.heading + "</h3>" +
      '<ul class="footer-links">' +
        f.links.map(function(l) {
          return '<li><a href="' + l.url + '"' +
            (l.url.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : "") +
            ">" + l.label + "</a></li>";
        }).join("") +
      "</ul>" +
    "</div>" +
    '<div class="footer-copy">' + f.copy + "</div>";
})();

/* ═══════════════════════════════════════════════════════════════════
   MODAL
   ═══════════════════════════════════════════════════════════════════ */
var modalOverlay = $("#modalOverlay");
var modalContainer = $("#modalContainer");
var modalBody = $("#modalBody");
var modalCloseBtn = $("#modalCloseBtn");

function getModalData(id) {
  for (var i = 0; i < SITE_DATA.sections.length; i++) {
    var cards = SITE_DATA.sections[i].cards;
    for (var j = 0; j < cards.length; j++) {
      if (cards[j].id === id) return cards[j].modal;
    }
  }
  return null;
}

function openModal(id) {
  var data = getModalData(id);
  if (!data) return;

  var pressHTML = "";
  if (data.pressItems && data.pressItems.length) {
    var btnLabels = { listen: "Listen", watch: "Watch", read: "Read" };
    pressHTML =
      "<h4>Press</h4>" +
      '<ul class="score-list">' +
      data.pressItems.map(function(item) {
        var label = btnLabels[item.type] || "Read";
        return (
          '<li class="score-item">' +
            '<div class="score-info">' +
              '<span class="yr">' + item.outlet + "</span>" +
              "<em>" + item.title + "</em>" +
              "<small>" + item.date + "</small>" +
            "</div>" +
            '<a href="' + item.url + '" class="score-btn" target="_blank" rel="noopener">' + label + "</a>" +
          "</li>"
        );
      }).join("") +
      "</ul>";
  }

  modalBody.innerHTML =
    '<div class="modal-label">' + data.label + "</div>" +
    '<h2 class="modal-title">' + data.title + "</h2>" +
    '<div class="modal-meta">' + data.meta + "</div>" +
    '<div class="modal-content">' + data.content + pressHTML + "</div>";

  modalOverlay.classList.add("active");
  modalContainer.classList.add("active");
  document.body.style.overflow = "hidden";
  modalContainer.scrollTop = 0;
}

function closeModal() {
  modalOverlay.classList.remove("active");
  modalContainer.classList.remove("active");
  document.body.style.overflow = "";
}

modalCloseBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") closeModal();
});

// Click or Enter on card to open
document.addEventListener("click", function(e) {
  var card = e.target.closest(".card[data-modal]");
  if (card) openModal(card.dataset.modal);
});

document.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    var card = e.target.closest(".card[data-modal]");
    if (card) openModal(card.dataset.modal);
  }
});

modalContainer.addEventListener("click", function(e) {
  e.stopPropagation();
});

/* ═══════════════════════════════════════════════════════════════════
   MASTHEAD SCROLL EFFECT
   ═══════════════════════════════════════════════════════════════════ */
(function initMastheadScroll() {
  var masthead = $(".masthead");
  var scrolled = false;

  function check() {
    var shouldBeScrolled = window.scrollY > 60;
    if (shouldBeScrolled !== scrolled) {
      scrolled = shouldBeScrolled;
      masthead.classList.toggle("scrolled", scrolled);
    }
  }

  window.addEventListener("scroll", check, { passive: true });
  check();
})();

/* ═══════════════════════════════════════════════════════════════════
   ACTIVE NAV TRACKING
   ═══════════════════════════════════════════════════════════════════ */
(function initActiveNav() {
  var navLinks = $$(".masthead-nav a[data-section]");
  if (!navLinks.length) return;

  var sections = [];
  navLinks.forEach(function(link) {
    var id = link.getAttribute("data-section");
    var el = document.getElementById(id);
    if (el) sections.push({ id: id, el: el, link: link });
  });

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      var match = sections.find(function(s) { return s.el === entry.target; });
      if (match) {
        match.visible = entry.isIntersecting;
      }
    });

    // Find topmost visible section
    var active = null;
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].visible) { active = sections[i]; break; }
    }

    navLinks.forEach(function(l) { l.classList.remove("active"); });
    if (active) active.link.classList.add("active");
  }, {
    threshold: 0,
    rootMargin: "-20% 0px -60% 0px"
  });

  sections.forEach(function(s) { observer.observe(s.el); });
})();

/* ═══════════════════════════════════════════════════════════════════
   HERO PARALLAX (skip on mobile / reduced-motion)
   ═══════════════════════════════════════════════════════════════════ */
(function initParallax() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.innerWidth < 768) return;

  var heroBg = $("#heroBg");
  if (!heroBg) return;

  var ticking = false;

  function update() {
    var scrollY = window.scrollY;
    if (scrollY < window.innerHeight) {
      heroBg.style.transform = "translate3d(0," + (scrollY * 0.2) + "px,0) scale(1.1)";
    }
    ticking = false;
  }

  window.addEventListener("scroll", function() {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
})();

/* ═══════════════════════════════════════════════════════════════════
   SCROLL REVEAL (one-shot — never re-hides)
   ═══════════════════════════════════════════════════════════════════ */
(function initReveal() {
  var reveals = $$(".reveal");

  // Immediately mark anything already in viewport as visible
  reveals.forEach(function(el) {
    var rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add("vis");
    }
  });

  // Now enable the animation system
  document.documentElement.classList.add("reveal-ready");

  // Observe the rest — each element animates in once, then is permanently visible
  var obs = new IntersectionObserver(
    function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("vis");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
  );

  reveals.forEach(function(el) {
    if (!el.classList.contains("vis")) {
      obs.observe(el);
    }
  });
})();

/* ═══════════════════════════════════════════════════════════════════
   BACK TO TOP
   ═══════════════════════════════════════════════════════════════════ */
(function initBackToTop() {
  var btn = $("#backToTop");
  if (!btn) return;

  var visible = false;

  window.addEventListener("scroll", function() {
    var shouldShow = window.scrollY > window.innerHeight;
    if (shouldShow !== visible) {
      visible = shouldShow;
      btn.classList.toggle("visible", visible);
    }
  }, { passive: true });

  btn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
