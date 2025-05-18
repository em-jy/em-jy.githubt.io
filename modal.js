const forgiveBtn = document.getElementById('forgiveBtn');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');

forgiveBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
