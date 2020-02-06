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

//выбираем клавиши
function direction(event) {
    var $key = event.keyCode;
    if ($key == 65) {
        $d = "LEFT";
    } else if ($key == 87) {
        $d = "UP";
    } else if ($key == 68) {
        $d = "RIGHT";
    } else if ($key == 83) {
        $d = "DOWN";
    }
}

// Функцыя создания ресурсов
function resors(playerX, playerY) {
    // Прорисовка ресурсов
    pictures($rockImg, $rock.x, $rock.y, 70, 60);
    pictures($treeImg, $tree.x, $tree.y, 60, 70);
    pictures($chestImg, $chest.x, $chest.y, 60, 60);

    // Сбор Каменя
    if (playerX == $rock.x && playerY == $rock.y) {
        // Ресурс собирается разное количество
        $rockCount = $rockCount + random(4);
        // Проигрывание трека
        $rockSound.play();
        //отображаем количество камней
        rockCount($rockCount);
        $rock = {
            x: random(30) * $box,
            y: random(17) * $box
        };
        // Если блок занят выбрать другой
        if ($rock.x == $tree.x && $rock.y == $tree.y || $rock.x == $chest.x && $rock.y == $chest.y) {
            $rock = {
                x: random(30) * $box,
                y: random(17) * $box
            }
        }
    }

    // Сбор дерева
    if (playerX == $tree.x && playerY == $tree.y) {
        // Ресурса собирается разное количество
        $treeCount = $treeCount + random(4);
        // Проигрывание трека
        $treeSound.play();
        //отображаем количество деревев
        treeCount($treeCount);
        $tree = {
            x: random(30) * $box,
            y: random(17) * $box
        }
        // Если блок занят выбрать другой
        if ($tree.x == $rock.x && $tree.y == $rock.y || $tree.x == $chest.x && $tree.y == $chest.y) {
            $tree = {
                x: random(30) * $box,
                y: random(17) * $box
            }
        }
    }

    // Сбор золота
    if (playerX == $chest.x && playerY == $chest.y) {
        // Ресурса собирается разное количество
        $goldCount = $goldCount + random(4);
        // Проигрывание трека
        $chestSound.play();
        // Отображаем количество золота
        goldCount($goldCount);
        $chest = {
            x: random(30) * $box,
            y: random(17) * $box
        };
        // Если блок занят выбрать другой
        if ($chest.x == $tree.x && $chest.y == $tree.y || $chest.x == $rock.x && $chest.y == $rock.y) {
            $chest = {
                x: random(30) * $box,
                y: random(17) * $box
            }
        }
    }

}

//Управление героем
function ishouse(iscotteg, isstonemill, iswood, iscastle) {
    if (iscotteg == true) {
        pictures($cottage, 23 * $box, 5 * $box, 182 / 1.5, 167 / 1.5);
        $isCotteg == false;
    }
    if (isstonemill == true) {
        pictures($stonemill, 2 * $box, 2 * $box, 257 / 1.5, 180 / 1.5);
        $isStonemill == false;
    }
    if (iswood == true) {
        pictures($wood_cutter, 17 * $box, 1 * $box, 192 / 1.5, 178 / 1.5);
        $isWoodСutter == false;
    }
    if (iscastle == true) {
        pictures($castle, 29 * $box, 1 * $box, 479 / 2.5, 490 / 2.5);
        $isCastle == false;
    }
}

// Функцыя тображения количества камней
function rockCount(count) {
    if (count == 1) {
        $rockCountSign = "You have: " + count + " rock.";
    } else {
        $rockCountSign = "You have: " + count + " rocks.";
    }
}

// Функцыя тображения количества дерева
function treeCount(count) {
    // Отображаем количество камней
    if ($treeCount == 1) {
        $treeCountSign = "You have: " + count + " tree."
    } else {
        $treeCountSign = "You have: " + count + " trees.";
    }
}

// Функцыя тображения количества золота
function goldCount(count) {
    // Отображаем количество золота
    $goldCountSign = "You have: " + count + " gold.";
}

//событие на кнопке построить cottage
function houseCottage() {
    let rock = 5;
    let gold = 10;
    let tree = 7;

    if ($rockCount > rock && $goldCount > gold && $treeCount > tree)
// Создаем хижину при клике на кнопку построить
        $btnCottage.onclick = function () {
            // Удаляем кнопку построить
            $btnCottage.style.pointerEvents = "none";
            $isCotteg = true;
            $rockCount -= rock;
            $goldCount -= gold;
            $treeCount -= tree;
            rockCount($rockCount);
            treeCount($treeCount);
            goldCount($goldCount);
        }
}

//событие на кнопке построить stonemill
function houseStonemill() {
    let rock = 8;
    let gold = 12;
    let tree = 9;

    if ($rockCount > rock && $goldCount > gold && $treeCount > tree)
// Создаем хижину при клике на кнопку построить
        $btnStonemill.onclick = function () {
            // Удаляем кнопку построить
            $btnStonemill.style.pointerEvents = "none";
            $isStonemill = true;
            $rockCount -= rock;
            $goldCount -= gold;
            $treeCount -= tree;
            rockCount($rockCount);
            treeCount($treeCount);
            goldCount($goldCount);
            clearInterval(gameCoreFunction());
        }
}

//событие на кнопке построить Wood Сutter
function houseWoodСutter() {
    let rock = 8;
    let gold = 9;
    let tree = 15;

    if ($rockCount > rock && $goldCount > gold && $treeCount > tree)
// Создаем хижину при клике на кнопку построить
        $btnWoodCutter.onclick = function () {
            // Удаляем кнопку построить
            $btnWoodCutter.style.pointerEvents = "none";
            $isWoodСutter = true;
            $rockCount -= rock;
            $goldCount -= gold;
            $treeCount -= tree;
            rockCount($rockCount);
            treeCount($treeCount);
            goldCount($goldCount);
        }
}

//событие на кнопке построить Castle
function houseCastle() {
    let rock = 25;
    let gold = 30;
    let tree = 20;

    if ($rockCount > rock && $goldCount > gold && $treeCount > tree)
// Создаем хижину при клике на кнопку построить
        $btnCastle.onclick = function () {
            // Удаляем кнопку построить
            $btnCastle.style.pointerEvents = "none";
            $isCastle = true;
            $rockCount -= rock;
            $goldCount -= gold;
            $treeCount -= tree;
            rockCount($rockCount);
            treeCount($treeCount);
            goldCount($goldCount);
        }
}

function list() {
        var $list = document.querySelector('.info__list')
        
        var li = document.createElement(li);
            li.classList.add('text-center')



}
