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
    x: random(30) * $box,
    y: random(17) * $box
}

// Сундук
$chest = {
    x: random(30) * $box,
    y: random(17) * $box
}

//Переменная для постройки хижины
$btnCottage = document.querySelector("#btnCottage");
// Рабочие клавиши
document.addEventListener("keydown", direction);

//отрабатываем вывод списка ресурсов
list();

$liRock = document.querySelector('#rock');
$liTree = document.querySelector('#tree');
$liGold = document.querySelector('#gold');

modalOpen();

$startBtn.addEventListener('click', function (e) {
    let el = e.target;
    modalRemoveClass($modal);
    $bgModal.classList.remove('active');
    startTimer();

    // Интервал основной функции с интервалом 0,1с
    var $game = setInterval(gameCoreFunction, 100);
})


