/**
 * Файл для хранения глобальных переменных игры
 *
 * */
//глобальные переменные
var $cvs, $ctx, $box, $arock, $game, $d,
    //создание ресурсов камень, дерева, cундук
    $rock, $tree, $chest,
    //переменные кнопок
    $btnModal, $btnCottage, $btnStonemill, $btnWoodCutter, $btnCastle, $startBtn,
    //проверяем можно строить или нет значение boolean
    $isCotteg, $isStonemill, $isWoodСutter, $isCastle;

//создаем изображение
var $background = new Image(),
    $cottage = new Image(),
    $stonemill = new Image(),
    $wood_cutter = new Image(),
    $castle = new Image(),
    $ground = new Image(),
    $rockImg = new Image(),
    $chestImg = new Image(),
    $treeImg = new Image(),
    $playerImg = new Image(),
    $fountain = new Image(),
    $pointer1 = new Image(),
    $well = new Image(),
    $stele = new Image(),
    $flower1 = new Image(),
    $pointer2 = new Image(),
    $lamp = new Image(),
    $teleport = new Image();


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
$fountain.src = "./assets/img/fountain.png";
$pointer1.src = "./assets/img/pointer4.png";
$well.src = "./assets/img/well.png";
$stele.src = "./assets/img/stele.png";
$flower1.src = "./assets/img/flower1.png";
$pointer2.src = "./assets/img/pointer1.png";
$lamp.src = "./assets/img/lamp.png";
$teleport.src = "./assets/img/teleport.png";


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

//Кнопка для постройки хижины
$btnCottage = document.querySelector("#btnCottage");