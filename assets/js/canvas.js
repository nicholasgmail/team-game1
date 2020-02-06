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


// Звуки
$chestSound.src = "./assets/audio/gold.mp3";
$treeSound.src = "./assets/audio/tree.mp3";
$rockSound.src = "./assets/audio/rock.mp3";

//получаем источник изображения
$background.src = "./assets/img/bgCanvas.jpg";
$cottage.src = "./assets/img/cottage_182_167.png";
$wood_cutter.src = "./assets/img/wood_cutter_192_178.png";
$stonemill.src = "./assets/img/stonemill_257_180.png";
$castle.src = "./assets/img/castle_479_490.png";
$rockImg.src = "./assets/img/resources/a-rock-1.png";
$chestImg.src = "./assets/img/resources/chest-1.png";
$treeImg.src = "./assets/img/resources/tree-2.png";
$playerImg.src = "./assets/img/player.png";

// Создание игрока
let $player = [];

$player[0] = {
    x: 15 * $box,
    y: 9 * $box
};


// Создается камень
$rock = {
    x: random(30) * $box,
    y: random(17) * $box
}

// Создание дерева
$tree = {
    x: Math.floor(Math.random() * 30 + 1) * $box,
    y: Math.floor(Math.random() * 17 + 1) * $box
}

// Сундук
$chest = {
    x: Math.floor(Math.random() * 30 + 1) * $box,
    y: Math.floor(Math.random() * 17 + 1) * $box
}

//Переменная для постройки хижины
$btnCottage = document.querySelector("#btnCottage");
// Рабочие клавиши
document.addEventListener("keydown", direction);

/*$background.addEventListener('onload', function () {
    // Рисуем изображение от точки с координатами 0, 0
    pictures($background, 0, 0, 1200, 657);


    //рисование карточек


});*/
startTimer();
/*card();*/
//получаем кнопку для постройки хижины
$btnCottage = document.querySelector("#btnCottage");
//получаем кнопку для постройки каменеломни
$btnStonemill = document.querySelector("#btnStonemill");
//получаем кнопку для постройки лесопилки
$btnWoodCutter = document.querySelector("#btnWoodCutter");
//получаем кнопку для постройки замка
$btnCastle = document.querySelector("#btnCastle");

$isCotteg = false;
$isStonemill = false;
$isWoodСutter = false;
$isCastle = false;

list();
$liRock = document.querySelector('#rock');
$liTree = document.querySelector('#tree');
$liGold = document.querySelector('#gold');
// Интервал основной функции с интервалом 0,1с
var $game = setInterval(gameCoreFunction, 100);






