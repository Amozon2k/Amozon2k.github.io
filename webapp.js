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
		tg.MainButton.setText("Вы выбрали товар 1!");
		item = "1";
		tg.MainButton.show();
	}
});

b2.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 2!");
		item = "2";
		tg.MainButton.show();
	}
});

b3.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 3!");
		item = "3";
		tg.MainButton.show();
	}
});

b4.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 4!");
		item = "4";
		tg.MainButton.show();
	}
});

b5.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 5!");
		item = "5";
		tg.MainButton.show();
	}
});

b6.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 6!");
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
// ... (Your existing code)

let paymentButton = document.createElement("button");
paymentButton.innerText = "Оплатить";
paymentButton.style.backgroundColor = '#2cab37';
paymentButton.style.color = '#FFFFFF';
paymentButton.style.padding = '10px';
paymentButton.style.marginTop = '10px';
paymentButton.style.border = 'none';
paymentButton.style.cursor = 'pointer';
paymentButton.style.position = 'fixed';
paymentButton.style.bottom = '0';
paymentButton.style.left = '0';
paymentButton.style.width = '100%';

document.body.appendChild(paymentButton);

paymentButton.style.display = 'none'; // Hide the payment button initially

// ... (Your existing code)

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
    paymentButton.style.display = 'block'; // Show the payment button after item selection
});

paymentButton.addEventListener("click", function(){
    if (item !== "") {
        // You can replace the URL below with the actual payment page URL
        window.location.href = `https://your-payment-page.com?item=${item}`;
    } else {
        alert("Please select an item before proceeding to payment.");
    }
});

// ... (Your existing code)
