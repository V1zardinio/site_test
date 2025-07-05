console.log("Скрипт запущен");

document.querySelector('.menu-image').addEventListener('click', function () {
  const menu = document.querySelector('.dropdown-menu');
  menu.classList.toggle('show');
});

// Закрытие меню при клике вне его области
document.addEventListener('click', function (event) {
  const container = document.querySelector('.menu-image');
  if (!container.contains(event.target)) {
    const menu = document.querySelector('.dropdown-menu');
    menu.classList.remove('show');
  }
});