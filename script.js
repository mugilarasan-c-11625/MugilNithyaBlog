// ───── Background music toggle ─────
(function () {
  var audio = document.getElementById('bg-music');
  var btn   = document.getElementById('music-btn');
  var icon  = btn.querySelector('.music-icon');
  var playing = false;

  // Autoplay on first user interaction anywhere on the page
  function startOnInteraction() {
    if (!playing) {
      audio.play().then(function () {
        playing = true;
        icon.classList.add('playing');
        icon.classList.remove('paused');
      }).catch(function () {});
    }
    document.removeEventListener('click', startOnInteraction);
    document.removeEventListener('touchstart', startOnInteraction);
  }
  document.addEventListener('click', startOnInteraction);
  document.addEventListener('touchstart', startOnInteraction);

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    if (playing) {
      audio.pause();
      playing = false;
      icon.classList.remove('playing');
      icon.classList.add('paused');
    } else {
      audio.play().then(function () {
        playing = true;
        icon.classList.add('playing');
        icon.classList.remove('paused');
      }).catch(function () {});
    }
  });
}());

// ───── Nav: darken on scroll + close mobile menu on link click ─────
(function () {
  const nav = document.querySelector('.site-nav');
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('open');
    });
  });
})();

// ───── Hero Background Slideshow ─────
(function () {
  const slides = document.querySelectorAll('.hero-bg');
  let current = 0;
  setInterval(function () {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 3000);
})();

// ───── Wedding date: 14 September 2026, 07:30 IST ─────
const WEDDING_DATE = new Date("2026-06-04T10:00:00+05:30").getTime();

function pad(n) { return String(n).padStart(2, "0"); }

function updateCountdown() {
  const now = Date.now();
  const diff = WEDDING_DATE - now;
  const el = (id) => document.getElementById(id);

  const days  = diff > 0 ? Math.floor(diff / (1000 * 60 * 60 * 24)) : 0;
  const hours = diff > 0 ? Math.floor((diff / (1000 * 60 * 60)) % 24) : 0;
  const mins  = diff > 0 ? Math.floor((diff / (1000 * 60)) % 60) : 0;
  const secs  = diff > 0 ? Math.floor((diff / 1000) % 60) : 0;

  // Hero countdown
  if (el('h-days'))   el('h-days').textContent   = pad(days);
  if (el('h-hours'))  el('h-hours').textContent  = pad(hours);
  if (el('h-mins'))   el('h-mins').textContent   = pad(mins);
  if (el('h-secs'))   el('h-secs').textContent   = pad(secs);

}

updateCountdown();
setInterval(updateCountdown, 1000);

