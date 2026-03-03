// ── Init AOS ──
AOS.init({
  once: true,
  offset: 40,
});

// ── Footer year ──
document.getElementById('year').textContent = new Date().getFullYear();

// ── Typing effect no tagline ──
const tagline = document.querySelector('.tagline');
if (tagline) {
  const full = tagline.textContent.trim();
  tagline.textContent = '';
  tagline.style.visibility = 'visible';

  let i = 0;
  const speed = 28;

  function type() {
    if (i < full.length) {
      tagline.textContent += full[i];
      i++;
      setTimeout(type, speed);
    }
  }

  // inicia após a animação do hero
  setTimeout(type, 600);
}