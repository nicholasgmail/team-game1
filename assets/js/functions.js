/**
 * ===========================================
 * Функцыя для использования в проекте игры
 * ===========================================
 * **/

// функцыя отрисовки изображений
function pictures(img, x, y, width, height) {
    $ctx.beginPath();
    $ctx.drawImage(img, x, y, width, height);
}

// Функцыя получить случайное число
function random(max) {
    //случайное число о 0 до максимума
    var rand = 1 + Math.random() * (max + 1);
    //округляем до целого числа
    rand = Math.floor(rand);
    //возвращаем число
    return rand;
}

