//Открыть модальное окно контактов
function modalOpen() {
    /*$menu = document.querySelectorAll('#menu a');
    $menu.forEach(link => {*/
    window.addEventListener('load', () => {
        /* let $dataSet = link.dataset.modal;
         if ($dataSet) {*/
        let $modalOpev = document.querySelector(`#open_load`);
        $modalOpev.style.display = 'block';
        $modalOpev.classList.add('active');
        $bgModal.classList.add('active');
    })
    /*}
})*/
    /* })*/
}

// функцыя закрытия модального окна
function modalClose() {
    $modalCloseBtn = document.querySelectorAll('.modal__close');
    $modalCloseBtn.forEach(button => {
        button.onclick = function (ev) {
            ev.preventDefault();
            var $el = ev.target;
            modalRemoveClass($modal);
            $bgModal.classList.remove('active');
        }
    })
}

// функцыя закрытия модального окна при клике на window закрыть модкльное окно
function modalCloseWindow() {
    $bgModal.addEventListener('click', () => {
        modalRemoveClass($modal);
        $bgModal.classList.remove('active');
    })
}

// функцыя удаления свойств модальных окон
function modalRemoveClass(modal) {
    modal.forEach(modal => {
        modal.classList.remove('active');
        modal.style.display = 'none';
    })
}