document.addEventListener('DOMContentLoaded', function(){
  let cartButton = document.getElementById("cart-button");
  let cartModal = document.getElementById("cart-modal");
  let closeBtn = document.getElementsByClassName("close")[0];
  
  cartButton.addEventListener("click", function() {
    cartModal.style.display = "flex";
    persistentCart();
  });
  
  closeBtn.addEventListener("click", function() {
    cartModal.style.display = "none";
  });

  cartModal.addEventListener("click", function(event) {
    if (cartModal === event.target || !cartModal.contains(event.target)) {
      console.log('clicou fora do local!');
      cartModal.style.display = "none";
    }
    });
});

function persistentCart(){

  // Limpa os elementos já renderizados do carrinho
  
  const containerElement = document.getElementById('itemsContainer');

  while (containerElement.firstChild) {
    containerElement.removeChild(containerElement.firstChild);
  }

  if (sessionStorage.getItem('cart') == null){
    console.log("O carrinho está vazio");
    return;
  }

  let cart = JSON.parse(sessionStorage.getItem('cart'));

  if (Object.keys(cart).length == 0) {
    console.log("O carrinho está vazio");
  }

  let price = 0;

  for (const item in cart){
    if(cart.hasOwnProperty(item)){
      let id = parseInt(item[item.length - 1], 10);
      price += (camisetasData[id].priceInt) * cart[item];
      renderCardItem(camisetasData[id], cart[item]);
    }
  }

  let finalPrice = document.getElementById('totalPrice');
  finalPrice.textContent = "R$ " + price + ",00"

  addEventListenersToCartItems();
}

function addEventListenersToCartItems(){

  let cardBox = document.getElementById('itemsContainer');
  let cards = cardBox.getElementsByClassName('card-item');
  
  for (let i = 0; i < cards.length; i++) {
      let card = cards[i];
      let quantityInput = card.getElementsByClassName('first-item-cart');
      let minusButton = card.getElementsByClassName('minus-cart')[0];
      let plusButton = card.getElementsByClassName('add-cart')[0];
      minusButton.addEventListener('click', createDecrementHandlerCart(quantityInput[0], card));
      plusButton.addEventListener('click', createIncrementHandlerCart(quantityInput[0], card));
  }
}

function renderCardItem(item, num) {

  const containerElement = document.getElementById('itemsContainer');

  const cardItem = document.createElement('div');
  cardItem.className = 'card-item';
  cardItem.id = item.id;

  const imageBox = document.createElement('div');
  imageBox.className = 'image-box';

  const itemImage = document.createElement('img');
  itemImage.className = 'item-image';
  itemImage.src = item.image;
  itemImage.alt = 'item';

  const itemInfo = document.createElement('div');
  itemInfo.className = 'item-info';

  const info = document.createElement('div');
  info.className = 'info';

  const itemNameElement = document.createElement('p');
  itemNameElement.textContent = item.name;

  const itemPriceElement = document.createElement('p');
  itemPriceElement.textContent = item.price;

  const quantityButtonsCart = document.createElement('div');
  quantityButtonsCart.className = 'quantity-buttons-cart';

  const minusButton = document.createElement('button');
  minusButton.textContent = '-';
  minusButton.className = 'minus-cart';

  const quantityForm = document.createElement('form');

  const quantityInput = document.createElement('input');
  quantityInput.type = 'text';
  quantityInput.className = 'first-item-cart';
  quantityInput.value = num;
  quantityInput.size = '1';

  const addButton = document.createElement('button');
  addButton.textContent = '+';
  addButton.className = 'add-cart';

  // Anexa os elementos na estrutura correta
  info.appendChild(itemNameElement);
  info.appendChild(itemPriceElement);

  quantityForm.appendChild(quantityInput);

  quantityButtonsCart.appendChild(minusButton);
  quantityButtonsCart.appendChild(quantityForm);
  quantityButtonsCart.appendChild(addButton);

  itemInfo.appendChild(info);
  itemInfo.appendChild(quantityButtonsCart);

  imageBox.appendChild(itemImage);

  cardItem.appendChild(imageBox);
  cardItem.appendChild(itemInfo);

  containerElement.appendChild(cardItem);
}

function updateCartFromCart(card, input){

  var storedCart = sessionStorage.getItem('cart');
  
  if (storedCart) {
      cartObject = JSON.parse(storedCart);
  }

  let inputCart = card.children[1].children[1].children[1].children[0].value;
  let currentValueCart = parseInt(inputCart);

  let deleteKey = "camisa" + card.id

  if (isNaN(currentValueCart)) {
      inputCart.value = 0;
      currentValueCart = 0;
      delete cartObject[deleteKey];

  }else if (currentValueCart > 0) {
      inputCart.value = currentValueCart; 
  }else{
      inputCart.value = 0;

      delete cartObject[deleteKey];
      console.log(cartObject, deleteKey, cartObject[deleteKey]);
      sessionStorage.setItem('cart', JSON.stringify(cartObject));
      return;
  }

  let price = 0;



  let finalPrice = document.getElementById('totalPrice');
  finalPrice.textContent = "R$ " + price + ",00"

  let key = "camisa" + card.id;
  cartObject[key] = currentValueCart;
  sessionStorage.setItem('cart', JSON.stringify(cartObject));
}

const camisetasData = [
  {},
  {
      id: 1,
      image: "../assets/camiseta-roxa.png",
      name: "Camiseta Roxa",
      price: "R$40",
      priceInt: 40
  },
  {
      id: 2,
      image: "../assets/camiseta-branca2.png",
      name: "Camiseta Branca",
      price: "R$45",
      priceInt: 45
  },
  {
      id: 3,
      image: "../assets/camiseta-preta-logo-gigante-2.png",
      name: "Camiseta Preta com Logo Grande",
      price: "R$45",
      priceInt: 45
  },
  {
      id: 4,
      image: "../assets/camiseta-preta-com-detalhe.png",
      name: "Camiseta Preta com Listras",
      price: "R$45",
      priceInt: 45
  },
  {
      id: 5,
      image: "../assets/camiseta-preta-logo-gigante-1.png",
      name: "Camiseta Preta com Logo Transparente",
      price: "R$45",
      priceInt: 45
  },
  {
      id: 6,
      image: "../assets/camiseta-preta-logo-branco.png",
      name: "Camiseta Preta Logo Branco",
      price: "R$45",
      priceInt: 45
  },
];

function createDecrementHandlerCart(input, card) {
  return function () {
      let currentValue = parseInt(input.value);

      if(isNaN(currentValue)){
          input.value = 0;
      }else if (currentValue > 0) {
          input.value = currentValue - 1;
      }
      
      updateCartFromCart(card, input);
  };
}

function createIncrementHandlerCart(input, card) {
  return function () {

      let currentValue = parseInt(input.value);
      
      if(isNaN(currentValue)){
          input.value = 1;
          return
      }else{
          input.value = currentValue + 1;   
      }

      updateCartFromCart(card, input);
  };
}