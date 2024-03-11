let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";
let cart = [];

// Function to update the cart and display it
function updateCart() {
    usercard.innerHTML = "<p>Shopping Cart:</p>";

    for (let i = 0; i < cart.length; i++) {
        let cartItem = document.createElement("p");
        cartItem.innerText = cart[i];
        usercard.appendChild(cartItem);
    }
}

let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");

b1.addEventListener("click", function(){
    item = "Burger macnagen";
    cart.push(item);
    updateCart();
});

b2.addEventListener("click", function(){
    item = "Onion rings";
    cart.push(item);
    updateCart();
});

b3.addEventListener("click", function(){
    item = "French fries";
    cart.push(item);
    updateCart();
});

b4.addEventListener("click", function(){
    item = "Chicken nuggets";
    cart.push(item);
    updateCart();
});

b5.addEventListener("click", function(){
    item = "Pizza four cheese";
    cart.push(item);
    updateCart();
});

b6.addEventListener("click", function(){
    item = "Coca-cola";
    cart.push(item);
    updateCart();
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});

// Your existing code for displaying user information
let usercard = document.getElementById("usercard");

let p = document.createElement("p");
p.innerText = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}`;
usercard.appendChild(p);
function updateCart() {
    usercard.innerHTML = "<p style='font-weight: bold; font-size: 18px;'>Shopping Cart:</p>";

    for (let i = 0; i < cart.length; i++) {
        let cartItem = document.createElement("p");
        cartItem.innerText = cart[i];
        cartItem.style.margin = "5px 0"; // Add margin for better spacing
        usercard.appendChild(cartItem);
    }
}

// Add some styles to the usercard container
usercard.style.border = "2px solid #2cab37";
usercard.style.padding = "10px";
usercard.style.borderRadius = "8px";
usercard.style.backgroundColor = "#f8f8f8";

// Rest of your existing code...

// Add styles to the main button
tg.MainButton.style.border = "2px solid #2cab37";
tg.MainButton.style.borderRadius = "8px";
tg.MainButton.style.backgroundColor = "#2cab37";
tg.MainButton.style.color = "#FFFFFF";

// Add styles to the Telegram app interface (adjust as needed)
document.body.style.backgroundColor = "#e5e5e5";