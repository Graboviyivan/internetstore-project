document.addEventListener('DOMContentLoaded', () => {
  const payBtn = document.getElementById('pay-btn');
  const backdrop = document.querySelector('.backdrop');
  const payModal = document.querySelector('.pay');

  // Функція для відкриття модалки
  payBtn.addEventListener('click', (event) => {
    event.preventDefault();
    backdrop.classList.add('is-open');
    payModal.classList.add('is-open');
  });

  backdrop.addEventListener('click', () => {
    backdrop.classList.remove('is-open');
    payModal.classList.remove('is-open');
  });
});