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
    setUnderline(navItems[1]);

    // Получаем все секции
    const HTML_section = document.getElementById("HTML-container");
    const CSS_section = document.getElementById("CSS-container");
    const JS_section = document.getElementById("JS-container");

    // Сначала скрываем все секции
    HTML_section.style.display = "none";
    CSS_section.style.display = "block";
    JS_section.style.display = "none";
}

// Обработчики кликов
// Обработчики кликов
navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Устанавливаем подчеркивание
        setUnderline(item);
        
        console.log(item.textContent);

        // Получаем все секции
        const HTML_section = document.getElementById("HTML-container");
        const CSS_section = document.getElementById("CSS-container");
        const JS_section = document.getElementById("JS-container");

        // Сначала скрываем все секции
        HTML_section.style.display = "none";
        CSS_section.style.display = "none";
        JS_section.style.display = "none";

        // Показываем только нужную секцию
        switch (item.textContent.trim()) { // Добавляем trim() для надежности
            case "HTML":
                HTML_section.style.display = "block";
                break;
            case "CSS":
                CSS_section.style.display = "block";
                break;
            case "JS":
                JS_section.style.display = "block";
                break;
        }
    });
});
