function card() {

//Переменная для постройки хижины
    $btnCottage = document.querySelector("#btnCottage");

// Создаем хижину при клике на кнопку построить
    $btnCottage.onclick = function () {
        // добавляем хижину на поле
        pictures($cottage, 23 * $box, 5 * $box, 182 / 1.5, 167 / 1.5);
        // Удаляем кнопку построить
        $btnCottage.style.pointerEvents = "none";

    }

//Переменная для постройки каменеломни
    $btnStonemill = document.querySelector("#btnStonemill");


// Создаем каменеломню при клике на кнопку построить
    $btnStonemill.onclick = function () {
        // добавляем каменеломню на поле
        pictures($stonemill, 2 * $box, 2 * $box, 257 / 1.5, 180 / 1.5);
        // блокируем кнопку построить
        $btnStonemill.style.pointerEvents = "none";
    }

//Переменная для постройки лесопилки
    $btnWoodCutter = document.querySelector("#btnWoodCutter");

// Создаем лесопилку при клике на кнопку построить
    $btnWoodCutter.onclick = function () {
        // добавляем лесопилку на поле
        pictures($wood_cutter, 17 * $box, 1 * $box, 192 / 1.5, 178 / 1.5);
        // блокируем кнопку построить
        $btnWoodCutter.style.pointerEvents = "none";
    }

//Переменная для постройки замка
    $btnCastle = document.querySelector("#btnCastle");

// Создаем замок при клике на кнопку построить
    $btnCastle.onclick = function () {
        // добавляем замок на поле
        pictures($castle, 29 * $box, 1 * $box, 479 / 2.5, 490 / 2.5);
        // блокируем кнопку построить
        $btnCastle.style.pointerEvents = "none";
    }

}