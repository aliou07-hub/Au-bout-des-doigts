(function(){
  "use strict";
  var cfg = window.SITE_CONFIG;
  var I18N = window.I18N || { en:{}, fr:{} };
  var currentLang = 'fr';

  // ---- Header scroll state ----
  var header = document.querySelector('.site-header');
  var toTop = document.querySelector('.to-top');
  function onScroll(){
    var y = window.scrollY || window.pageYOffset;
    if(header) header.classList.toggle('scrolled', y > 40);
    if(toTop) toTop.classList.toggle('visible', y > 500);
  }
  document.addEventListener('scroll', onScroll, { passive:true });
  onScroll();

  // ---- Mobile nav toggle ----
  var navToggle = document.querySelector('.nav-toggle');
  var mainNav = document.querySelector('.main-nav');
  var navClose = document.getElementById('navClose');
  function closeMobileNav(){
    mainNav.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  if(navToggle && mainNav){
    navToggle.addEventListener('click', function(){
      var open = mainNav.classList.toggle('open');
      navToggle.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    if(navClose) navClose.addEventListener('click', closeMobileNav);
    mainNav.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click', closeMobileNav);
    });
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape' && mainNav.classList.contains('open')) closeMobileNav();
    });
  }

  // ---- Active nav link on scroll ----
  var sections = document.querySelectorAll('main section[id]');
  var navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
  if('IntersectionObserver' in window && sections.length){
    var navObserver = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          var id = entry.target.id;
          navLinks.forEach(function(l){
            l.classList.toggle('active', l.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function(s){ navObserver.observe(s); });
  }

  // ---- Scroll reveal ----
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  if(reduceMotion || !('IntersectionObserver' in window)){
    revealEls.forEach(function(el){ el.classList.add('is-visible'); });
  } else {
    var revealObserver = new IntersectionObserver(function(entries, obs){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold:0.15, rootMargin:'0px 0px -8% 0px' });
    revealEls.forEach(function(el){ revealObserver.observe(el); });
  }

  // ---- Carousel arrows ----
  document.querySelectorAll('[data-carousel]').forEach(function(root){
    var track = root.querySelector('.carousel-track');
    var prev = root.querySelector('[data-prev]');
    var next = root.querySelector('[data-next]');
    if(!track) return;
    function step(){
      var card = track.querySelector('.food-card');
      return card ? card.getBoundingClientRect().width + 26 : 300;
    }
    if(prev) prev.addEventListener('click', function(){ track.scrollBy({ left: -step(), behavior: reduceMotion ? 'auto' : 'smooth' }); });
    if(next) next.addEventListener('click', function(){ track.scrollBy({ left: step(), behavior: reduceMotion ? 'auto' : 'smooth' }); });
  });

  // ---- Populate config-driven content ----
  function applyConfig(){
    if(!cfg) return;
    document.querySelectorAll('[data-phone-display]').forEach(function(el){ el.textContent = cfg.phoneDisplay; });
    document.querySelectorAll('[data-phone-href]').forEach(function(el){ el.setAttribute('href', cfg.phoneHref); });
    document.querySelectorAll('[data-whatsapp-href]').forEach(function(el){ el.setAttribute('href', cfg.whatsappHref); });
    document.querySelectorAll('[data-address]').forEach(function(el){ el.textContent = cfg.addressLine; });
    document.querySelectorAll('[data-facebook-href]').forEach(function(el){ el.setAttribute('href', cfg.facebook); });

    var mapFrame = document.querySelector('[data-map-frame]');
    if(mapFrame){
      mapFrame.src = 'https://maps.google.com/maps?q=' + encodeURIComponent(cfg.mapsQuery) + '&z=15&output=embed';
    }
    var mapsLink = document.querySelector('[data-maps-link]');
    if(mapsLink){
      mapsLink.href = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(cfg.mapsQuery);
    }
  }
  applyConfig();

  function setYear(){
    var yearEl = document.querySelector('[data-year]');
    if(yearEl) yearEl.textContent = new Date().getFullYear();
  }

  function renderHours(dict){
    var hoursList = document.querySelector('[data-hours-list]');
    if(!hoursList || !cfg || !cfg.hours || !cfg.hours[0]) return;
    var spans = cfg.hours[0].spans; // identical every day per verified source
    hoursList.innerHTML =
      '<div class="row" style="justify-content:space-between; display:flex;"><span>' + (dict.hours_everyday || 'Every day') + '</span></div>' +
      '<div class="row" style="justify-content:space-between; display:flex;"><span>' + (dict.hours_lunch || 'Lunch') + '</span><span>' + spans[0] + '</span></div>' +
      '<div class="row" style="justify-content:space-between; display:flex;"><span>' + (dict.hours_dinner || 'Dinner') + '</span><span>' + spans[1] + '</span></div>';
  }

  // ---- i18n ----
  function applyLanguage(lang){
    var dict = I18N[lang] || I18N.en;
    if(!dict) return;
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      if(dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el){
      var key = el.getAttribute('data-i18n-placeholder');
      if(dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function(el){
      var key = el.getAttribute('data-i18n-aria');
      if(dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });
    document.querySelectorAll('.lang-btn').forEach(function(btn){
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    renderHours(dict);
    setYear();

    try { localStorage.setItem('abd_lang', lang); } catch(e){}
  }

  function detectInitialLang(){
    try {
      var saved = localStorage.getItem('abd_lang');
      if(saved === 'en' || saved === 'fr') return saved;
    } catch(e){}
    var nav = (navigator.language || navigator.userLanguage || 'fr').slice(0,2).toLowerCase();
    return nav === 'en' ? 'en' : 'fr';
  }

  document.querySelectorAll('.lang-btn').forEach(function(btn){
    btn.addEventListener('click', function(){ applyLanguage(btn.getAttribute('data-lang')); });
  });

  applyLanguage(detectInitialLang());

  // ---- Reservation form -> WhatsApp handoff ----
  var reserveForm = document.getElementById('reserveForm');
  if(reserveForm && cfg){
    reserveForm.addEventListener('submit', function(e){
      e.preventDefault();
      if(typeof reserveForm.reportValidity === 'function' && !reserveForm.reportValidity()) return;

      var dict = I18N[currentLang] || I18N.en;
      var data = new FormData(reserveForm);
      var seatingRaw = data.get('seating');
      var seatingLabel = seatingRaw === 'Indoor' ? dict.f_seating_indoor
        : seatingRaw === 'Terrace' ? dict.f_seating_terrace
        : dict.f_seating_any;

      var lines = [
        dict.wa_greeting,
        '',
        dict.wa_name + ': ' + data.get('name'),
        dict.wa_phone + ': ' + data.get('phone'),
        dict.wa_date + ': ' + data.get('date'),
        dict.wa_time + ': ' + data.get('time'),
        dict.wa_guests + ': ' + data.get('guests'),
        dict.wa_seating + ': ' + seatingLabel
      ];
      var notes = (data.get('notes') || '').trim();
      if(notes) lines.push(dict.wa_notes + ': ' + notes);

      var message = lines.join('\n');
      var url = cfg.whatsappHref + '?text=' + encodeURIComponent(message);
      window.open(url, '_blank', 'noopener');
    });
  }
})();
