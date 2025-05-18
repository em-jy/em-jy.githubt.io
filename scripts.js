const noBtn = document.getElementById('noForgiveBtn');
const forgiveBtn = document.getElementById('forgiveBtn');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');

function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

if (!isTouchDevice()) {
  // Comportamiento para mouse
  document.addEventListener('mousemove', (e) => {
    const rect = noBtn.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = mouseX - centerX;
    const dy = mouseY - centerY;

    const distance = Math.sqrt(dx * dx + dy * dy);
    const threshold = 150;

    if (distance < threshold) {
      const maxX = window.innerWidth - noBtn.offsetWidth;
      const maxY = window.innerHeight - noBtn.offsetHeight;

      let newX = Math.random() * maxX;
      let newY = Math.random() * maxY;

      noBtn.style.transition = 'left 0.3s ease, top 0.3s ease';
      noBtn.style.left = `${newX}px`;
      noBtn.style.top = `${newY}px`;
    }
  });
} else {
  // Comportamiento para táctil: el botón "huye" al tocarlo
  noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Para evitar el "clic" inmediato

    noBtn.style.transition = 'opacity 0.3s ease';
    noBtn.style.opacity = '0';

    setTimeout(() => {
      const maxX = window.innerWidth - noBtn.offsetWidth;
      const maxY = window.innerHeight - noBtn.offsetHeight;

      let newX = Math.random() * maxX;
      let newY = Math.random() * maxY;

      noBtn.style.left = `${newX}px`;
      noBtn.style.top = `${newY}px`;

      noBtn.style.opacity = '1';
    }, 300);
  });
}

// Modal abrir y cerrar
forgiveBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
