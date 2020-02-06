/**
 * Файл для хранения глобальных переменных игры
 *
 * */
//глобальные переменные
var $cvs, $ctx, $box, $arock, $chest, $tree, $resourse, $d,
    //создание ресурсов камень, дерева, cундук
    $rock, $tree, $chest,
    //переменные кнопок
    $btnModal, $btnCottage, $btnStonemill, $btnWoodCutter, $btnCastle,
    //проверяем можно строить или нет значение boolean
    $isCotteg, $isStonemill, $isWoodСutter, $isCastle;


//создаем изображение
var $background = new Image();
var $cottage = new Image();
var $stonemill = new Image();
var $wood_cutter = new Image();
var $castle = new Image();
var $ground = new Image();
var $rockImg = new Image();
var $chestImg = new Image();
var $treeImg = new Image();
var $playerImg = new Image();


// создаем звуки
var $chestSound = new Audio();
var $treeSound = new Audio();
var $rockSound = new Audio();

//модальное окно
var $modalCloseBtn = null;
var $modal = document.querySelectorAll('.modal');
var $bgModal = document.getElementById('modal-bg');

// Счет
var $rockCount = 0,
    $rockCountSign = "You have: " + $rockCount + " rocks.",
    $treeCount = 0,
    $treeCountSign = "You have: " + $treeCount + " trees.",
    $goldCount = 0,
    $goldCountSign = "You have: " + $goldCount + " gold.";

// масив списка для вывода информацыи, итоги игры
var $liRock, $liTree, $liGold;