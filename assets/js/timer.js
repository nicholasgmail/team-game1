var timer = document.querySelector("#timer"),
	hoursTimer = document.querySelector(".hours-timer"),
	minutesTimer = document.querySelector(".minutes-timer"),
	secondsTimer = document.querySelector(".seconds-timer");

// Переменная для остановки интервала
var interval

// Функционал таймера

function timerFunction() {
		// Если секунд больше или = 9, то добавляется секунда без 0
		if (secondsTimer.innerText >= 9) {
			secondsTimer.innerText = ++secondsTimer.innerText;
		} 
		// Если секунд меньше 9, то добавляется секунда с 0
		if(secondsTimer.innerText < 9) {
			secondsTimer.innerText = "0" + ++secondsTimer.innerText;
		}	
		// Конец таймера
		if(secondsTimer.innerText == 59 && minutesTimer.innerText == 59) {
			clearInterval(interval);
		}
		if(secondsTimer.innerText == 60) {
		// Если минут больше или = 9, то довавляется минута без 0 и обнуляются секунды
		if(minutesTimer.innerText >= 9) {
			minutesTimer.innerText = ++minutesTimer.innerText;
			secondsTimer.innerText = "00";
		}
		// Если минут меньше 9, то добавляется минута с 0 и обнуляются секунды
		if(minutesTimer.innerText < 9) {
			minutesTimer.innerText = "0" + ++minutesTimer.innerText;
			secondsTimer.innerText = "00";
		}
		}
}

// Функционал кнопок
// Начало
function startTimer() {	
	interval = setInterval(timerFunction, 1000);
}

