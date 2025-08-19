const navItems = document.querySelectorAll('#main-nav li');
const underline = document.querySelector('.underline');
const header_gradient = document.querySelector('header');


// Функция для обновления цветов
function updateAttributeColors(color) {
    const attributesList = document.querySelectorAll('.attributes-list > li');
    const attributesMark = document.querySelectorAll('.attributes-list > li > mark');
    const attributesCode = document.querySelectorAll('.attributes-list code');
    const language_html = document.querySelectorAll('.language-html'); // Поля с кодом на сайте
    
    const buttons = document.querySelectorAll('.button');
    const mark = document.querySelector('mark');
    
    
    // Извлекаем RGB-значение цвета (убираем "rgb(" и ")")
    const rgbColor = color.replace(/[^\d,]/g, '').split(',');
    const r = rgbColor[0];
    const g = rgbColor[1];
    const b = rgbColor[2];

    const darkerColor = `rgba(${Math.max(0, r - 100)}, ${Math.max(0, g - 100)}, ${Math.max(0, b - 100)}, 0.2)`;
    
    attributesList.forEach(li => {
        li.style.borderLeftColor = color;
        li.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.05)`;
    });
    
    // Названия атрибутов
    attributesMark.forEach(mark => {
        mark.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.7)`;
    });
    
    // Что в них писать
    attributesCode.forEach(code => {
        code.style.color = color;
        code.style.backgroundColor = darkerColor;
    });

    // Поля с кодом на сайте
    language_html.forEach(code => {
        // code.style.color = `rgba(${r}, ${g}, ${b}, 0.15)`;
        code.style.borderColor = color;
    });

    // Кнопки
    buttons.forEach(button => {
        button.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.5)`;
    });

    // Выделенный тегом <mark> текст
    mark.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.4)`;

    // Поле ввода
    document.documentElement.style.setProperty('--accent-color', color);

}


// Установим начальное положение подчеркивания и цветовую схему
function setUnderline(element) {
    const color = window.getComputedStyle(element).color;
    
    underline.style.width = `${element.offsetWidth - 50}px`;
    underline.style.left = `${element.offsetLeft + 25}px`;
    underline.style.backgroundColor = color;
    
    // Обновляем градиент хедера
    header_gradient.style.background = `linear-gradient(to bottom, ${color}, rgba(0, 0, 0, 0))`;
    
    // Обновляем цвета в .attributes-list
    updateAttributeColors(color);
}

// Инициализация - подчеркиваем первый элемент
if (navItems.length > 0) {
    setUnderline(navItems[0]);
}

// Обработчики кликов
navItems.forEach(item => {
    item.addEventListener('click', () => {
        setUnderline(item);
    });
});

document.querySelectorAll('.style-toggle').forEach(toggle => {
  // Связываем чекбокс и label через data-атрибуты
  const target = toggle.dataset.target;
  const label = document.querySelector(`.toggle-btn[data-for="${target}"]`);
  
  // Назначаем обработчик
  toggle.addEventListener('change', function() {
    this.closest('.result').classList.toggle('no-styles', !this.checked);
  });
  
  // Делегируем клики на label
  label.addEventListener('click', () => toggle.click());
});