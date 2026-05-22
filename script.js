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
  }, 5000);
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

  // Section countdown (if present)
  if (el('cd-days'))  el('cd-days').textContent  = pad(days);
  if (el('cd-hours')) el('cd-hours').textContent = pad(hours);
  if (el('cd-mins'))  el('cd-mins').textContent  = pad(mins);
  if (el('cd-secs'))  el('cd-secs').textContent  = pad(secs);
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ───── RSVP (client-side; wire up to a backend / Google Form / Formspree) ─────
function handleRSVP(e) {
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form).entries());
  console.log("RSVP submitted:", data);

  const note = document.getElementById("form-note");
  note.textContent = "Thank you, " + data.name + "! Your RSVP has been received. ❦";
  form.reset();
  return false;
}
