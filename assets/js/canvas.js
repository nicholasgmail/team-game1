/**
 * Рисование игры на холсте canvas.
 * Размер холста ширина 1200px, высота 657px.
 * Размер блока ширина 32px высота 32px.
 * Размер карты ширина 37 блоков высота 20 блоков.
 * Постройки: cottage, stonemill, wood cutter, castle.
 * Игрок собирает ресурсы строит город.
 *
 * */


//получаем блок html вешаем метод getContext
$cvs = document.querySelector("#gameCanvas");
$ctx = $cvs.getContext("2d");

// создаем квадрат на холсте
$box = 32;

//получаем источник изображения
$background.src = "./assets/img/bgCanvas.jpg";
$cottage.src = "./assets/img/cottage_182_167.png";
$wood_cutter.src = "./assets/img/wood_cutter_192_178.png";
$stonemill.src = "./assets/img/stonemill_257_180.png";

// отрисовываем изображение на холсте
// Событие onLoad, ждём момента пока загрузится изображение
$background.onload = function (){
    // Рисуем изображение от точки с координатами 0, 0
    pictures($background, 0, 0, 1200, 657);
};

/**
 * Артем пример работы кнопки, замениш на свой картинки подключены выше
 * соответственно в html тоже удали кнопку в место него размести свои карточки
 * размещай домики на холсте 37 на 20 по кругу в центре поле для игры человечка
 * функцыи глобальные реализуй в файле functions, переменные с приставкой '$' делай в файле variables
 * */
var $dom = document.querySelector('#dom');

// функцыя pictures отработана глобально в файле functions можеш добавить свои ф-к если нужны,
// вызывай их здесь в событиях
$dom.onclick = function () {
    pictures($wood_cutter,15 * $box, 15 * $box, 153, 141);
}

/**
 * Сергей пример работы с коортинатами и определиния номера клавиш клавиатуры
 * выше пример подключения рисунка
 * размещай игрока на холсте 30 на 17 в центре поля игры человечка домики разместит Артем
 * функцыи глобальные реализуй в файле functions, переменные с приставкой '$' делай в файле variables
 * */
//
$cvs.addEventListener('click', function (e) {
    $ctx.beginPath();
    $ctx.drawImage($stonemill, e.clientX, e.clientY, 257, 180);
    console.log(e.clientX, e.clientY);
})

document.addEventListener('keydown', function (e) {
    console.log(e.keyCode);
})