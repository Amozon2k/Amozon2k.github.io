let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

let itemPrices = {
    "1": 249, 
    "2": 120, 
    "3": 59,  
    "4": 499,  
    "5": 350, 
    "6": 800,  

};

b1.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        let price = itemPrices["1"];
        tg.MainButton.setText(`Вы выбрали товар 1 за ${price} руб.`);
        item = "1";
        tg.MainButton.show();
    }
});

b2.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        let price = itemPrices["2"];
        tg.MainButton.setText(`Вы выбрали товар 2 за ${price} руб.`);
        item = "2";
        tg.MainButton.show();
    }
});

b3.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        let price = itemPrices["3"];
        tg.MainButton.setText(`Вы выбрали товар 3 за ${price} руб.`);
        item = "3";
        tg.MainButton.show();
    }
});

b4.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        let price = itemPrices["4"];
        tg.MainButton.setText(`Вы выбрали товар 4 за ${price} руб.`);
        item = "4";
        tg.MainButton.show();
    }
});

b5.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        let price = itemPrices["5"];
        tg.MainButton.setText(`Вы выбрали товар 5 за ${price} руб.`);
        item = "5";
        tg.MainButton.show();
    }
});

b6.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        let price = itemPrices["6"];
        tg.MainButton.setText(`Вы выбрали товар 6 за ${price} руб.`);
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
paymentButton.style.width = '70%';

document.body.appendChild(paymentButton);

paymentButton.style.display = 'none'; //скрыть кнопку оплаты


Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
    paymentButton.style.display = 'block'; //Показать кнопку оплаты после выбора товара
});

paymentButton.addEventListener("click", function(){
    if (item !== "") {
        window.location.href = `https://okno.ru/pay-online/?item=${item}`;
    } else {
        alert("Пожалуйста, выберите товар, прежде чем перейти к оплате.");
    }
});



function createQuantityButtons(itemId) {
    let plusButton = document.createElement("button");
    plusButton.innerText = "+";
    plusButton.style.backgroundColor = '#2cab37';
    plusButton.style.color = '#FFFFFF';
    plusButton.style.padding = '5px';
    plusButton.style.border = 'none';
    plusButton.style.cursor = 'pointer';
    plusButton.style.marginLeft = '5px';

    let minusButton = document.createElement("button");
    minusButton.innerText = "-";
    minusButton.style.backgroundColor = '#2cab37';
    minusButton.style.color = '#FFFFFF';
    minusButton.style.padding = '5px';
    minusButton.style.border = 'none';
    minusButton.style.cursor = 'pointer';
    minusButton.style.marginRight = '5px';

    let quantityDisplay = document.createElement("span");
    quantityDisplay.innerText = "1";

    let container = document.createElement("div");
    container.appendChild(minusButton);
    container.appendChild(quantityDisplay);
    container.appendChild(plusButton);

    document.getElementById(`b${itemId}`).appendChild(container);

    plusButton.addEventListener("click", function(){
        quantity++;
        updatePrice(itemId);
    });

    minusButton.addEventListener("click", function(){
        if (quantity > 1) {
            quantity--;
            updatePrice(itemId);
        }
    });
}

function updatePrice(itemId) {
    let price = itemPrices[itemId] * quantity;
    tg.MainButton.setText(`Вы выбрали товар ${itemId} в количестве ${quantity} шт. за ${price} руб.`);
}

// Update your existing item click event listeners
function handleItemClick(itemId, itemName) {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
        paymentButton.style.display = 'none'; // Hide the payment button when a new item is selected
    } else {
        let price = itemPrices[itemId];
        tg.MainButton.setText(`Вы выбрали ${itemName} за ${price} руб.`);
        item = itemId;
        tg.MainButton.show();
        createQuantityButtons(itemId); // Create plus and minus buttons for the selected item
    }
}

b1.addEventListener("click", function(){
    handleItemClick("1", "товар 1");
});

b2.addEventListener("click", function(){
    handleItemClick("2", "товар 2");
});

b3.addEventListener("click", function(){
    handleItemClick("3", "товар 3");
});

b4.addEventListener("click", function(){
    handleItemClick("4", "товар 4");
});

b5.addEventListener("click", function(){
    handleItemClick("5", "товар 5");
});

b6.addEventListener("click", function(){
    handleItemClick("6", "товар 6");
});

