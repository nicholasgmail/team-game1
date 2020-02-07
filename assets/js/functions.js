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
        $rockCount = $rockCount + random(50);
        // Проигрывание трека
        $rockSound.play();
        //отображаем количество камней
        rockCount($rockCount);
        $rock = {
            x: random(29) * $box,
            y: random(16) * $box
        };
        // Если блок занят выбрать другой
        if ($rock.x == $tree.x && $rock.y == $tree.y || $rock.x == $chest.x && $rock.y == $chest.y) {
            $rock = {
                x: random(29) * $box,
                y: random(16) * $box
            }
        }
    }

    // Сбор дерева
    if (playerX == $tree.x && playerY == $tree.y) {
        // Ресурса собирается разное количество
        $treeCount = $treeCount + random(50);
        // Проигрывание трека
        $treeSound.play();
        //отображаем количество деревев
        treeCount($treeCount);
        $tree = {
            x: random(29) * $box,
            y: random(16) * $box
        }
        // Если блок занят выбрать другой
        if ($tree.x == $rock.x && $tree.y == $rock.y || $tree.x == $chest.x && $tree.y == $chest.y) {
            $tree = {
                x: random(29) * $box,
                y: random(16) * $box
            }
        }
    }

    // Сбор золота
    if (playerX == $chest.x && playerY == $chest.y) {
        // Ресурса собирается разное количество
        $goldCount = $goldCount + random(50);
        // Проигрывание трека
        $chestSound.play();
        // Отображаем количество золота
        goldCount($goldCount);
        $chest = {
            x: random(29) * $box,
            y: random(16) * $box
        };
        // Если блок занят выбрать другой
        if ($chest.x == $tree.x && $chest.y == $tree.y || $chest.x == $rock.x && $chest.y == $rock.y) {
            $chest = {
                x: random(29) * $box,
                y: random(16) * $box
            }
        }
    }

}

//Функцыя постройки зданий
function ishouse(iscotteg, isstonemill, iswood, iscastle) {
    if (iscotteg == true) {
        // построить цветы рядом с домом
        pictures($flower1, 22 * $box, 6.5 * $box, 48, 35);
        // построить фонтан рядом с домом
        pictures($fountain, 19 * $box, 5 * $box, 101 / 2, 98 / 2);
        // построить указатель рядом с домом
        pictures($pointer1, 26.5 * $box, 5.8 * $box, 33, 36);
        //построить здание
        pictures($cottage, 23 * $box, 5 * $box, 182 / 1.5, 167 / 1.5);
        // строим фонарный столп
        pictures($lamp, 25 * $box, 6.5 * $box, 31, 56);
    }
    if (isstonemill == true) {
        // построить цветы рядом с каменеломней
        pictures($flower1, 3 * $box, 5 * $box, 48, 35);
        // строим фонарный столп
        pictures($lamp, 1 * $box, 3 * $box, 31, 56);
        // указатель
        pictures($pointer2, 5.5 * $box, 5.5 * $box, 34, 36);
        //построить здание
        pictures($stonemill, 2 * $box, 2 * $box, 257 / 1.5, 180 / 1.5);
    }
    if (iswood == true) {
        // построить цветы рядом с лесопилкой
        pictures($flower1, 17 * $box, 5 * $box, 48, 35);
        // строим фонарный столп
        pictures($lamp, 15 * $box, 2 * $box, 31, 56);
        // построить колодец рядом с лесопилкой
        pictures($well, 22 * $box, 4 * $box, 52, 55);
        //построить здание
        pictures($wood_cutter, 17 * $box, 1 * $box, 192 / 1.5, 178 / 1.5);
    }
    if (iscastle == true) {
        // построить обелиски рядом с замком
        pictures($teleport, 29 * $box, 1 * $box, 67 / 1.5, 84 /1.5);
        // построить обелиски рядом с замком
        pictures($stele, 27 * $box, 2 * $box, 55, 129);
        //построить здание
        pictures($castle, 29 * $box, 1 * $box, 479 / 2.5, 490 / 2.5);
        // построить обелиски рядом с замком
        pictures($stele, 30 * $box, 4 * $box, 55, 129);
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
    if ($rockCount >= rock && $goldCount >= gold && $treeCount >= tree && $isCotteg == false) {
        $btnCottage.style.pointerEvents = "auto";
        $btnCottage.style.background = "#28a745";
        // Создаем хижину при клике на кнопку построить
        $btnCottage.onclick = function () {
            // Удаляем кнопку построить
            $btnCottage.style.backgroundColor = "#dc3545";
            $btnCottage.style.pointerEvents = "";
            // Проигрывание трека
            $treeSound.play();
            //разрешайе постройку
            $isCotteg = true;
            //отнимаем ресурсы
            $rockCount -= rock;
            $goldCount -= gold;
            $treeCount -= tree;
            //выводим значения
            rockCount($rockCount);
            treeCount($treeCount);
            goldCount($goldCount);
        }
    } else {
        //блокируем кнопку
        $btnCottage.style.backgroundColor = "#dc3545";
        $btnCottage.style.pointerEvents = "none";
    }
}

//событие на кнопке построить stonemill
function houseStonemill() {
    let rock = 8;
    let gold = 12;
    let tree = 9;

    if ($rockCount >= rock && $goldCount >= gold && $treeCount >= tree && $isStonemill == false) {
        $btnStonemill.style.pointerEvents = "auto";
        $btnStonemill.style.backgroundColor = "#28a745";
        // Создаем хижину при клике на кнопку построить
        $btnStonemill.onclick = function () {
            // Удаляем кнопку построить
            $btnStonemill.style.backgroundColor = "#dc3545";
            $btnStonemill.style.pointerEvents = "";
            // Проигрывание трека
            $treeSound.play();
            //разрешайе постройку
            $isStonemill = true;
            //отнимаем ресурсы
            $rockCount -= rock;
            $goldCount -= gold;
            $treeCount -= tree;
            //выводим значения
            rockCount($rockCount);
            treeCount($treeCount);
            goldCount($goldCount);
        }
    } else {
        $btnStonemill.style.backgroundColor = "#dc3545";
        $btnStonemill.style.pointerEvents = "none";
    }
}

//событие на кнопке построить Wood Сutter
function houseWoodСutter() {
    let rock = 8;
    let gold = 9;
    let tree = 15;

    if ($rockCount >= rock && $goldCount >= gold && $treeCount >= tree && $isWoodСutter == false) {
        $btnWoodCutter.style.pointerEvents = "auto";
        $btnWoodCutter.style.backgroundColor = "#28a745";
        // Создаем хижину при клике на кнопку построить
        $btnWoodCutter.onclick = function () {
            // Удаляем кнопку построить
            $btnWoodCutter.style.pointerEvents = "";
            $btnWoodCutter.style.backgroundColor = "#dc3545";
            // Проигрывание трека
            $treeSound.play();
            //разрешайе постройку
            $isWoodСutter = true;
            //отнимаем ресурсы
            $rockCount -= rock;
            $goldCount -= gold;
            $treeCount -= tree;
            //выводим значения
            rockCount($rockCount);
            treeCount($treeCount);
            goldCount($goldCount);
            //очищаем счечик
            clearInterval(gameCoreFunction());
        }
    } else {
        //блокируем кнопку
        $btnWoodCutter.style.backgroundColor = "#dc3545";
        $btnWoodCutter.style.pointerEvents = "none";
    }
}

//событие на кнопке построить Castle
function houseCastle() {
    let rock = 25;
    let gold = 30;
    let tree = 20;

    if ($rockCount >= rock && $goldCount >= gold && $treeCount >= tree && $isCastle == false) {
        $btnCastle.style.pointerEvents = "auto";
        $btnCastle.style.backgroundColor = "#28a745";
        // Создаем хижину при клике на кнопку построить
        $btnCastle.onclick = function () {
            // Удаляем кнопку построить
            $btnCastle.style.pointerEvents = "";
            $btnCastle.style.backgroundColor = "#dc3545";
            // Проигрывание трека
            $treeSound.play();
            //разрешайе постройку
            $isCastle = true;
            //отнимаем ресурсы
            $rockCount -= rock;
            $goldCount -= gold;
            $treeCount -= tree;
            //выводим значения
            rockCount($rockCount);
            treeCount($treeCount);
            goldCount($goldCount);
            //очищаем счечик
            clearInterval();
        }
    } else {
        //блокируем кнопку
        $btnCastle.style.backgroundColor = "#dc3545";
        $btnCastle.style.pointerEvents = "none";
    }
}

//функцыя формирования списка информацыи
function list() {
    var $list = document.querySelector('#list');

    let $idList = ['rock', 'tree', 'gold'];

    for (let i = 0; i < $idList.length; i++) {
        var $li = document.createElement('li');
        $li.classList.add('text-center');
        $li.id = $idList[i];
        $li.style.font = '25px Changa one';
        $list.appendChild($li);
    }
}

//Функцыя игры
function gameCoreFunction() {

    // Рисуем изображение от точки с координатами 0, 0
    pictures($background, 0, 0, 1200, 657);
    $bgSound.volume = 0.2;
    $bgSound.play();

    // Старая позиция, которая стирается
    var $playerX = $player[0].x;
    var $playerY = $player[0].y;


    // Направление перемещния
    if ($d == "LEFT") {
        $playerX -= $box;
        $d = "";
    }
    if ($d == "UP") {
        $playerY -= $box;
        $d = "";
    }
    if ($d == "RIGHT") {
        $playerX += $box;
        $d = "";
    }
    if ($d == "DOWN") {
        $playerY += $box;
        $d = "";
    }
    ishouse($isCotteg, $isStonemill, $isWoodСutter, $isCastle);
    resors($playerX, $playerY);
    houseCottage();
    houseStonemill();
    houseWoodСutter();
    houseCastle();


    // Удаление последнего элемента массива
    $player.pop();
    // Новая позиция
    let $newPos = {
        x: $playerX,
        y: $playerY
    }

    // Упирание в границы
    if ($playerX < $box) {
        $d = "RIGHT"
    }
    if ($playerX > 30 * $box) {
        $d = "LEFT"
    }
    if ($playerY < $box) {
        $d = "DOWN"
    }
    if ($playerY > 17 * $box) {
        $d = "UP"
    }

    // Добавление нового элемента в массив
    $player.unshift($newPos);

    // Создание надписей счетчиков дерева и камня
    $liRock.innerHTML = $rockCountSign;
    $liTree.innerHTML = $treeCountSign;
    $liGold.innerHTML = $goldCountSign;

    endScoreReset();

    for (let $i = 0; $i < $player.length; $i++) {
        pictures($playerImg, $player[$i].x, $player[$i].y, 159 / 2.5, 312 / 2.5);
    }
    //вызов модального окна конца игры
    if ($isCotteg == true && $isWoodСutter == true && $isStonemill == true && $isCastle == true) {
        endScreenCreation();
    }
};

// Это при начале игры
// Обнуляет счетчики на экране конца игры
function endScoreReset() {
    $treeScore.innerText = $treeCount;
    $rockScore.innerText = $rockCount;
    $goldScore.innerText = $goldCount;
}

// Вставить перед тем как заканчивается игра
// Проверяет что построил игрок за время игры
function buildingEndScreen() {

    //создаем блок в модальном окне cottage
    $buildingScoreSign = document.createElement("p");
    $buildingScoreSign.className = "building-score-sign";
    $buildingScoreSignImg = document.createElement("img");
    $buildingScoreSignImg.src = "./assets/img/cottage_182_167.png";
    $buildingScoreBlock.appendChild($buildingScoreSign);
    $buildingScoreSign.innerText = "Хижину ";
    $buildingScoreSign.appendChild($buildingScoreSignImg);

    //создаем блок в модальном окне wood_cutter
    $buildingScoreSign = document.createElement("p");
    $buildingScoreSign.className = "building-score-sign";
    $buildingScoreSignImg = document.createElement("img");
    $buildingScoreSignImg.src = "./assets/img/wood_cutter_192_178.png";
    $buildingScoreBlock.appendChild($buildingScoreSign);
    $buildingScoreSign.innerText = "Лесопилку ";
    $buildingScoreSign.appendChild($buildingScoreSignImg);

    //создаем блок в модальном окне stonemill
    $buildingScoreSign = document.createElement("p");
    $buildingScoreSign.className = "building-score-sign";
    $buildingScoreSignImg = document.createElement("img");
    $buildingScoreSignImg.src = "./assets/img/stonemill_257_180.png";
    $buildingScoreBlock.appendChild($buildingScoreSign);
    $buildingScoreSign.innerText = "Каменоломню ";
    $buildingScoreSign.appendChild($buildingScoreSignImg);

    //создаем блок в модальном окне castle
    $buildingScoreSign = document.createElement("p");
    $buildingScoreSign.className = "building-score-sign";
    $buildingScoreSignImg = document.createElement("img");
    $buildingScoreSignImg.src = "./assets/img/castle_479_490.png";
    $buildingScoreBlock.appendChild($buildingScoreSign);
    $buildingScoreSign.innerText = "Замок ";
    $buildingScoreSign.appendChild($buildingScoreSignImg);

}

// Это надо вписать в условие конца игры
// Функция вызывает модальное окно

function endScreenCreation() {
    let $end = setInterval(function () {
        $endModal.classList.add("opened");
        $bgModal.classList.add('active');
        clearInterval(interval);
        clearInterval($game);
        body.style.overflow = 'hidden';
        clearInterval($end)
    }, 10000)
}

//Функцыя перезагрузки игры
function reload() {
    location.reload();
}

