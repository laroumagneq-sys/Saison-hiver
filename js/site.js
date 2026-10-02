(function () {
  var doc = document.documentElement;
  var body = document.body;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var en = doc.lang === 'en';
  var L = en
    ? { close: 'Close', menu: 'Menu', hello: 'Hello LCP,', profile: 'I am: ', request: 'My request: ', duration: 'Duration: ', name: 'Name: ', email: 'Email: ', dates: 'Dates & location: ', guests: 'Guests: ', subject: 'LCP request' }
    : { close: 'Fermer', menu: 'Menu', hello: 'Bonjour LCP,', profile: 'Je suis : ', request: 'Ma demande : ', duration: 'Durée : ', name: 'Nom : ', email: 'Email : ', dates: 'Dates & destination : ', guests: 'Convives : ', subject: 'Demande LCP' };

  // En-tête : transparent sur l'image d'ouverture, plein au défilement
  var header = document.querySelector('.site-header');
  var waFloat = document.querySelector('.wa-float');
  var lastY = 0;
  function onScroll() {
    var y = window.scrollY;
    if (header) header.classList.toggle('is-solid', y > 40);
    if (waFloat) waFloat.classList.toggle('is-hidden', y < window.innerHeight * 0.7 || (y > lastY && y < document.body.scrollHeight - window.innerHeight - 200));
    lastY = y;
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Menu plein écran (mobile)
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('mobile-menu');
  function setMenu(open) {
    body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.querySelector('.label').textContent = open ? L.close : L.menu;
    menu.setAttribute('aria-hidden', open ? 'false' : 'true');
  }
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      setMenu(!body.classList.contains('menu-open'));
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && body.classList.contains('menu-open')) {
        setMenu(false);
        toggle.focus();
      }
    });
  }

  // Apparitions au défilement
  var revealed = document.querySelectorAll('.reveal, .reveal-img');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealed.forEach(function (el) { io.observe(el); });
  } else {
    revealed.forEach(function (el) { el.classList.add('is-in'); });
  }

  // Vidéos en boucle : en pause hors écran ou si les animations sont limitées
  var videos = document.querySelectorAll('video[data-loop]');
  videos.forEach(function (v) {
    if (reduceMotion) {
      v.removeAttribute('autoplay');
      v.pause();
      return;
    }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { v.play().catch(function () {}); } else { v.pause(); }
        });
      }).observe(v);
    }
  });

  // Galerie : visionneuse
  var lightbox = document.getElementById('lightbox');
  if (lightbox && typeof lightbox.showModal === 'function') {
    var items = Array.prototype.slice.call(document.querySelectorAll('[data-lightbox]'));
    var img = lightbox.querySelector('img');
    var caption = lightbox.querySelector('.lightbox-caption');
    var count = lightbox.querySelector('.lightbox-count');
    var current = 0;
    function show(i) {
      current = (i + items.length) % items.length;
      var it = items[current];
      img.src = it.getAttribute('data-lightbox');
      img.alt = it.querySelector('img').alt;
      caption.textContent = it.getAttribute('data-caption') || '';
      count.textContent = String(current + 1).padStart(2, '0') + ' / ' + String(items.length).padStart(2, '0');
    }
    items.forEach(function (it, i) {
      it.addEventListener('click', function () {
        show(i);
        lightbox.showModal();
      });
    });
    lightbox.querySelector('[data-close]').addEventListener('click', function () { lightbox.close(); });
    lightbox.querySelector('[data-prev]').addEventListener('click', function () { show(current - 1); });
    lightbox.querySelector('[data-next]').addEventListener('click', function () { show(current + 1); });
    lightbox.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') show(current - 1);
      if (e.key === 'ArrowRight') show(current + 1);
    });
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target.classList.contains('lightbox-stage')) lightbox.close();
    });
  }

  // Formulaire de contact : ouvre la demande pré-remplie dans WhatsApp ou par e-mail
  var form = document.getElementById('contact-form');
  if (form) {
    var params = new URLSearchParams(window.location.search);
    [['demande', 'formula'], ['profil', 'profile']].forEach(function (pair) {
      var wanted = params.get(pair[0]);
      if (!wanted) return;
      var pre = form.querySelector('input[name="' + pair[1] + '"][value="' + wanted.replace(/"/g, '') + '"]');
      if (pre) pre.checked = true;
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = form.elements;
      var lines = [L.hello];
      var profile = form.querySelector('input[name="profile"]:checked');
      var formula = form.querySelector('input[name="formula"]:checked');
      var duration = form.querySelector('input[name="duration"]:checked');
      if (profile) lines.push(L.profile + profile.value);
      if (formula) lines.push(L.request + formula.value);
      if (duration) lines.push(L.duration + duration.value);
      if (f.name.value) lines.push(L.name + f.name.value);
      if (f.email.value) lines.push(L.email + f.email.value);
      if (f.dates.value) lines.push(L.dates + f.dates.value);
      if (f.guests.value) lines.push(L.guests + f.guests.value);
      if (f.message.value) lines.push('', f.message.value);
      var body = lines.join('\n');
      var channel = e.submitter && e.submitter.getAttribute('data-channel');
      if (channel === 'email') {
        var subject = L.subject + (formula ? ' : ' + formula.value : '');
        window.location.href = 'mailto:lcp.experience@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      } else {
        window.open('https://wa.me/33652894780?text=' + encodeURIComponent(body), '_blank', 'noopener');
      }
    });
  }
})();
