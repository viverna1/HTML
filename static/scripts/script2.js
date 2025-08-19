document.querySelectorAll('.style-toggle').forEach(toggle => {
  // Связываем чекбокс и label через data-атрибуты
  const target = toggle.dataset.target;
  const label = document.querySelector(`.toggle-btn[data-for="${target}"]`);
  
  // Назначаем обработчик
  toggle.addEventListener('change', function() {
    this.closest('.toggle-section').classList.toggle('no-styles', !this.checked);
  });
  
  // Делегируем клики на label
  label.addEventListener('click', () => toggle.click());
});