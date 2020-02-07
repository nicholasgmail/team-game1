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
    x: random(29) * $box,
    y: random(16) * $box
}

// Создание дерева
$tree = {
    x: random(29) * $box,
    y: random(16) * $box
}

// Сундук
$chest = {
    x: random(29) * $box,
    y: random(16) * $box
}

// Рабочие клавиши
document.addEventListener("keydown", direction);

//отрабатываем вывод списка ресурсов
list();

 //получаем ресурсы
$liRock = document.querySelector('#rock');
$liTree = document.querySelector('#tree');
$liGold = document.querySelector('#gold');

//вызов модального окна начала игры
modalOpen();
//отрисовка иконок, модальное окно окончание игры
buildingEndScreen();

$startBtn.addEventListener('click', function (e) {
    let el = e.target;
    modalRemoveClass($modal);
    $bgModal.classList.remove('active');

    startTimer();
    body.style.overflow = '';
    // Интервал основной функции с интервалом 0,1с
    $game = setInterval(gameCoreFunction, 100);

});

//открываем окно
modalOpen();

//закрываем модальное окно
modalClose();

//закрываем модальное окно по клику на window
modalCloseWindow();

//перезагрузка игры
$btnRestart.addEventListener('click', reload);



