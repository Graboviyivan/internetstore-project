document.addEventListener('DOMContentLoaded', () => {
  // Знаходимо потрібні елементи
  const payBtn = document.getElementById('pay-btn');
  const backdrop = document.querySelector('.backdrop');
  const payModal = document.querySelector('.pay');

  // Функція для відкриття модалки
  payBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Запобігаємо стандартній поведінці кнопки/посилання
    backdrop.classList.add('is-open');
    payModal.classList.add('is-open');
  });

  // Функція для закриття модалки при кліку на темний фон
  backdrop.addEventListener('click', () => {
    backdrop.classList.remove('is-open');
    payModal.classList.remove('is-open');
  });
});