/**
 * Файл для хранения глобальных переменных игры
 *
 * */
//глобальные переменные
var $cvs, $ctx, $box, $arock, $chest, $tree, $game, $d,
    //создание ресурсов камень, дерева, cундук
    $rock, $tree, $chest,
    //переменные кнопок
    $btnModal, $btnCottage, $btnStonemill, $btnWoodCutter, $btnCastle, $startBtn,
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
var $bgSound = new Audio();

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

//получаем кнопку для постройки хижины
$btnCottage = document.querySelector("#btnCottage");
//получаем кнопку для постройки каменеломни
$btnStonemill = document.querySelector("#btnStonemill");
//получаем кнопку для постройки лесопилки
$btnWoodCutter = document.querySelector("#btnWoodCutter");
//получаем кнопку для постройки замка
$btnCastle = document.querySelector("#btnCastle");

//разрешаем или нет постройку зданий
var $isCotteg = false,
    $isStonemill = false,
    $isWoodСutter = false,
    $isCastle = false;

//получаем кнопку старт
$startBtn = document.querySelector('#start__game');

// Звуки
$chestSound.src = "./assets/audio/gold.mp3";
$treeSound.src = "./assets/audio/tree.mp3";
$rockSound.src = "./assets/audio/rock.mp3";
$bgSound.src = "./assets/audio/bgAudio.mp3";

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


//  Все переменные оставляю сдесь, чтобы потом не потерять их
// Для общего счета дерева
var $treeScore = document.querySelector("#tree-score");
// Для общего счета камня
var $rockScore = document.querySelector("#rock-score");
// Для общего счета золота
var $goldScore = document.querySelector("#gold-score");
// Для вложения построенных зданий в экран конца игры
var $buildingScoreBlock = document.querySelector("#building-score-block");
var $endScore = 0;
var $endModal = document.querySelector("#end-modal");
//перезагрузка игры
var $btnRestart = document.querySelector('#restartButton');