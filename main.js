
// Сбор палитр
let paletteFirstItems = document.querySelectorAll('.pallete-first .pallete__item');
let paletteSecondItems = document.querySelectorAll('.pallete-second .item__pallete');
let body = document.body;
let items = document.querySelectorAll('.item');

// Обработка событий для первой палитры
paletteFirstItems.forEach(item => {
    item.addEventListener('click', () => {
        let Color = window.getComputedStyle(item).background;
        body.style.background = Color;
    });
});

// Обработка событий для второй палитры
paletteSecondItems.forEach(item => {
    item.addEventListener('click', () => {
        let Color = window.getComputedStyle(item).background;
        items.forEach(el => {
            el.style.background = Color;
        });
    });
});