// Reveal sections on scroll
const faders = document.querySelectorAll('.fade-in');

function checkFade() {
  const triggerBottom = window.innerHeight * 0.85;
  faders.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);
