let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");

b1.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Оплатить товар 1!");
		item = "1";
		tg.MainButton.show();
	}
});

b2.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Оплатить 2!");
		item = "2";
		tg.MainButton.show();
	}
});

b3.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Оплатить товар 3!");
		item = "3";
		tg.MainButton.show();
	}
});

b4.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Оплатить товар 4!");
		item = "4";
		tg.MainButton.show();
	}
});

b5.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Оплатить товар 5!");
		item = "5";
		tg.MainButton.show();
	}
});

b6.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Оплатить товар 6!");
		item = "6";
		tg.MainButton.show();
	}
});


Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});


let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);

import TelegramBot from 'node-telegram-bot-api';
const token = '6744705952:AAEFjWRkWN-yb30gEXuGY0gd3bG6SnvWUO0';
const bot = new TelegramBot(token, {polling: true});

// Обработчик команды для кнопки "Оплатить"
bot.onText(/\/pay/, (msg) => {
    const chatId = msg.chat.id;

    // Отправляем сообщение с инструкциями по оплате
    bot.sendMessage(chatId, `Чтобы оплатить товар ${msg.text.split(' ')[1]}, 2051251535:TEST:OTk5MDA4ODgxLTU ${msg.text.split(' ')[1]}`);
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(`/pay ${item}`);
});