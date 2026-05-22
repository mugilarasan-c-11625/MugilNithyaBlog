// ───── Wedding date: 14 September 2026, 07:30 IST ─────
const WEDDING_DATE = new Date("2026-06-04T10:00:00+05:30").getTime();

function pad(n) { return String(n).padStart(2, "0"); }

function updateCountdown() {
  const now = Date.now();
  const diff = WEDDING_DATE - now;

  const el = (id) => document.getElementById(id);

  if (diff <= 0) {
    el("cd-days").textContent = "00";
    el("cd-hours").textContent = "00";
    el("cd-mins").textContent = "00";
    el("cd-secs").textContent = "00";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  el("cd-days").textContent = pad(days);
  el("cd-hours").textContent = pad(hours);
  el("cd-mins").textContent = pad(mins);
  el("cd-secs").textContent = pad(secs);
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
