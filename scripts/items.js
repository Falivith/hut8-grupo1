var items = [
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
    var container = document.getElementsByClassName("card-box")[0];
    console.log(container)

    var card = document.createElement("div");
    card.className = "card";
  
    var imageBox = document.createElement("div");
    imageBox.className = "card-image-box";
    
    var image = document.createElement("img");
    image.className = "card-image";
    image.src = item.image;
    image.alt = item.name;
  
    imageBox.appendChild(image);
  
    var quantityButtons = document.createElement("div");
    quantityButtons.className = "quantity-buttons";
  
    var decreaseButton = document.createElement("button");
    decreaseButton.textContent = "-";
    
    var quantityInput = document.createElement("input");
    quantityInput.type = "text";
    quantityInput.value = "0";
    quantityInput.size = "1";
    
    var increaseButton = document.createElement("button");
    increaseButton.textContent = "+";
  
    quantityButtons.appendChild(decreaseButton);
    quantityButtons.appendChild(quantityInput);
    quantityButtons.appendChild(increaseButton);
  
    imageBox.appendChild(quantityButtons);
  
    var cardInfo = document.createElement("div");
    cardInfo.className = "card-info";
  
    var itemName = document.createElement("p");
    itemName.className = "item-name";
    itemName.textContent = item.name;
  
    var itemValue = document.createElement("p");
    itemValue.className = "item-value";
    itemValue.textContent = item.price;
  
    cardInfo.appendChild(itemName);
    cardInfo.appendChild(itemValue);
  
    card.appendChild(imageBox);
    card.appendChild(cardInfo);
  
    container.appendChild(card);
}

document.addEventListener('DOMContentLoaded', function(){
    //addCamisa(items[0]);
    items.forEach(item => addCamisa(item));
});
