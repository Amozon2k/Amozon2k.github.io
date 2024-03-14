let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let cartItems = {}; // Object to store selected items and quantities

let itemPrices = {
    "1": 249, 
    "2": 120, 
    "3": 59,  
    "4": 499,  
    "5": 350, 
    "6": 800,  
};

// Event listeners for item selection buttons
for (let i = 1; i <= 6; i++) {
    document.getElementById(`b${i}`).addEventListener("click", function(){
        let item = `${i}`;
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            let price = itemPrices[item];
            tg.MainButton.setText(`Вы выбрали товар ${item} за ${price} руб.`);
            cartItems[item] = (cartItems[item] || 0) + 1; // Add selected item to cart
            tg.MainButton.show();
            // Show cart button
            cartButton.style.display = 'block';
        }
    });
}

// Function to display user's name
let usercard = document.getElementById("usercard");
let p = document.createElement("p");
p.innerText = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}`;
usercard.appendChild(p);

// Cart button
let cartButton = document.createElement("button");
cartButton.innerText = "Корзина";
cartButton.style.backgroundColor = '#2cab37';
cartButton.style.color = '#FFFFFF';
cartButton.style.padding = '10px';
cartButton.style.marginTop = '10px';
cartButton.style.border = 'none';
cartButton.style.cursor = 'pointer';
cartButton.style.position = 'fixed';
cartButton.style.bottom = '0';
cartButton.style.left = '0';
cartButton.style.width = '100%';
cartButton.style.display = 'none'; // Initially hidden

document.body.appendChild(cartButton);

cartButton.addEventListener("click", function(){
    let cartContent = document.createElement("div");
    cartContent.style.backgroundColor = "#f9f9f9";
    cartContent.style.padding = "20px";
    cartContent.style.position = "fixed";
    cartContent.style.top = "0";
    cartContent.style.left = "0";
    cartContent.style.width = "100%";
    cartContent.style.height = "100%";
    cartContent.style.overflowY = "auto";

    let closeButton = document.createElement("button");
    closeButton.innerText = "Закрыть";
    closeButton.style.backgroundColor = '#2cab37';
    closeButton.style.color = '#FFFFFF';
    closeButton.style.padding = '10px';
    closeButton.style.border = 'none';
    closeButton.style.cursor = 'pointer';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.addEventListener("click", function(){
        document.body.removeChild(cartContent);
    });

    let cartItemsList = document.createElement("ul");
    for (let item in cartItems) {
        let quantity = cartItems[item];
        let price = itemPrices[item];
        let listItem = document.createElement("li");
        listItem.innerText = `Товар ${item}: ${quantity} шт. - ${price * quantity} руб.`;
        cartItemsList.appendChild(listItem);
    }

    let orderDeliveryButton = document.createElement("button");
    orderDeliveryButton.innerText = "Заказать доставку";
    orderDeliveryButton.style.backgroundColor = '#2cab37';
    orderDeliveryButton.style.color = '#FFFFFF';
    orderDeliveryButton.style.padding = '10px';
    orderDeliveryButton.style.border = 'none';
    orderDeliveryButton.style.cursor = 'pointer';
    orderDeliveryButton.style.marginTop = '20px';
    orderDeliveryButton.addEventListener("click", function(){
        // Proceed with the delivery order
        // You can implement the functionality for delivery order here
        alert("Заказ на доставку оформлен!");
    });

    cartContent.appendChild(closeButton);
    cartContent.appendChild(cartItemsList);
    cartContent.appendChild(orderDeliveryButton);
    document.body.appendChild(cartContent);
});
let quantity = 1; // Начальное количество

let plusButton = document.createElement("button");
plusButton.innerText = "+";
plusButton.style.backgroundColor = '#2cab37';
plusButton.style.color = '#FFFFFF';
plusButton.style.padding = '10px';
plusButton.style.border = 'none';
plusButton.style.cursor = 'pointer';

let minusButton = document.createElement("button");
minusButton.innerText = "-";
minusButton.style.backgroundColor = '#2cab37';
minusButton.style.color = '#FFFFFF';
minusButton.style.padding = '10px';
minusButton.style.border = 'none';
minusButton.style.cursor = 'pointer';

document.body.appendChild(minusButton);
document.body.appendChild(plusButton);

plusButton.addEventListener("click", function(){
    quantity++;
    updatePrice();
});

minusButton.addEventListener("click", function(){
    if (quantity > 1) {
        quantity--;
        updatePrice();
    }
});

function updatePrice() {
    let price = itemPrices[item] * quantity;
    tg.MainButton.setText(`Вы выбрали товар ${item} в количестве ${quantity} шт. за ${price} руб.`);
}

