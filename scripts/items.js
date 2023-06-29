const camisetas = [
    {
        id: 1,
        image: "../assets/camiseta-roxa.png",
        name: "Camiseta Roxa",
        price: "R$40"
    },
    {
        id: 2,
        image: "../assets/camiseta-branca2.png",
        name: "Camiseta Branca",
        price: "R$45"
    },
    {
        id: 3,
        image: "../assets/camiseta-preta-logo-gigante-2.png",
        name: "Camiseta Preta com Logo Grande",
        price: "R$45"
    },
    {
        id: 4,
        image: "../assets/camiseta-preta-com-detalhe.png",
        name: "Camiseta Preta com Listras",
        price: "R$45"
    },
    {
        id: 5,
        image: "../assets/camiseta-preta-logo-gigante-1.png",
        name: "Camiseta Preta com Logo Transparente",
        price: "R$45"
    },
    {
        id: 6,
        image: "../assets/camiseta-preta-logo-branco.png",
        name: "Camiseta Preta Logo Branco",
        price: "R$45"
    },
];

let cartObject = {}

function addCamisa(item) {
    let container = document.getElementsByClassName("card-box")[0];

    let card = document.createElement("div");
    card.className = "card";
    card.id  = item.id;

    let imageBox = document.createElement("div");
    imageBox.className = "card-image-box";

    let image = document.createElement("img");
    image.className = "card-image";
    image.src = item.image;
    image.alt = item.name;

    imageBox.appendChild(image);

    let quantityButtons = document.createElement("div");
    quantityButtons.className = "quantity-buttons-card";

    let decreaseButton = document.createElement("button");
    decreaseButton.textContent = "-";
    decreaseButton.className = "minus-card";

    let form = document.createElement("form");
    let quantityInput = document.createElement("input");
    quantityInput.type = "text";
    quantityInput.value = "0";
    quantityInput.className = "first-item-card";
    quantityInput.size = "1";
    form.appendChild(quantityInput);

    let increaseButton = document.createElement("button");
    increaseButton.textContent = "+";
    increaseButton.className = "add-card";

    quantityButtons.appendChild(decreaseButton);
    quantityButtons.appendChild(form);
    quantityButtons.appendChild(increaseButton);

    imageBox.appendChild(quantityButtons);

    let cardInfo = document.createElement("div");
    cardInfo.className = "card-info";

    let itemName = document.createElement("p");
    itemName.className = "item-name";
    itemName.textContent = item.name;

    let itemValue = document.createElement("p");
    itemValue.className = "item-value";
    itemValue.textContent = item.price;

    cardInfo.appendChild(itemName);
    cardInfo.appendChild(itemValue);

    card.appendChild(imageBox);
    card.appendChild(cardInfo);

    container.appendChild(card);
}

function updateCart(card){

    let storedCart = sessionStorage.getItem('cart');
    
    if (storedCart) {
        cartObject = JSON.parse(storedCart);
    }

    let input = card.children[0].children[1].children[1].children[0].value;
    let currentValue = parseInt(input);

    let deleteKey = "camisa" + card.id

    if (isNaN(currentValue)) {
        input.value = 0;
        currentValue = 0;
        delete cartObject[deleteKey];

    }else if (currentValue > 0) {
        input.value = currentValue; 
    }else{
        input.value = 0;

        delete cartObject[deleteKey];
        sessionStorage.setItem('cart', JSON.stringify(cartObject));
        return;
    }

    let key = "camisa" + card.id;
    cartObject[key] = currentValue;
    sessionStorage.setItem('cart', JSON.stringify(cartObject));
}
 
document.addEventListener('DOMContentLoaded', function(){
    camisetas.forEach(item => addCamisa(item));

    let cardBox = document.querySelector('.card-box');
    let cards = cardBox.getElementsByClassName('card');
    // let storedCart = sessionStorage.getItem('cart');

    // let ex = JSON.parse(storedCart);
    // console.log(ex);
    // let keyCoisinha = "camisa" + 1
    // console.log(ex[keyCoisinha]);
    
    // for (const item in storedCart){
    //     if(storedCart.hasOwnProperty(item)){
    //       let id = parseInt(item[item.length - 1], 10);
    //     }
    //   }
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        let quantityInput = card.getElementsByClassName('first-item-card');
        let minusButton = card.getElementsByClassName('minus-card')[0];
        let plusButton = card.getElementsByClassName('add-card')[0];
        minusButton.addEventListener('click', createDecrementHandler(quantityInput[0], card));
        plusButton.addEventListener('click', createIncrementHandler(quantityInput[0], card));
    }
});

function createDecrementHandler(input, card) {
    return function () {
        let currentValue = parseInt(input.value);

        if(isNaN(currentValue)){
            input.value = 0;
        }else if (currentValue > 0) {
            input.value = currentValue - 1;
        }
        
        updateCart(card);
    };
}

function createIncrementHandler(input, card) {
    return function () {

        let currentValue = parseInt(input.value);
        
        if(isNaN(currentValue)){
            input.value = 1;
            return
        }else{
            input.value = currentValue + 1;   
        }

        updateCart(card);
    };
}