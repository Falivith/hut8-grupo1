let items = [
    {
        image: "../assets/camiseta-roxa.png",
        name: "Camiseta Roxa",
        price: "R$40"
    },
    {
        image: "../assets/camiseta-branca2.png",
        name: "Camiseta Branca",
        price: "R$45"
    },
    {
        image: "../assets/camiseta-preta-logo-gigante-2.png",
        name: "Camiseta Preta com Logo Grande",
        price: "R$45"
    },
    {
        image: "../assets/camiseta-preta-com-detalhe.png",
        name: "Camiseta Preta com Listras",
        price: "R$45"
    },
    {
        image: "../assets/camiseta-preta-logo-gigante-1.png",
        name: "Camiseta Preta com Logo Transparente",
        price: "R$45"
    },
    {
        image: "../assets/camiseta-preta-logo-branco.png",
        name: "Camiseta Preta Logo Branco",
        price: "R$45"
    },
];

function addCamisa(item) {
    let container = document.getElementsByClassName("card-box")[0];

    let card = document.createElement("div");
    card.className = "card";

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

document.addEventListener('DOMContentLoaded', function(){
    items.forEach(item => addCamisa(item));
    
    let cardBox = document.querySelector('.card-box');
    let cards = cardBox.getElementsByClassName('card');

    let coisinha = cards[0];
    let inputzao = coisinha.getElementsByClassName('first-item-card')
    inputzao.value = '10'
    
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        
        // let quantityButtons = card.getElementsByClassName('quantity-buttons-cart');
        let quantityInput = card.getElementsByClassName('first-item-card');
        let minusButton = card.getElementsByClassName('minus-card')[0];
        let plusButton = card.getElementsByClassName('add-card')[0];
        minusButton.addEventListener('click', createDecrementHandler(quantityInput[0]));
        
        plusButton.addEventListener('click', createIncrementHandler(quantityInput[0]));
    }
    
    function createDecrementHandler(input) {
        return function () {
            let currentValue = parseInt(input.value);

            if(isNaN(currentValue)){
                input.value = 0;
                return -1
            }

            if (currentValue > 0) {
                input.value = currentValue - 1;
            }
        };
    }

    function createIncrementHandler(input) {
        return function () {

            let currentValue = parseInt(input.value);
            
            if(isNaN(currentValue)){
                input.value = 0;
                return -1;
            }

            input.value = currentValue + 1;
        };
    }
});
