
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
    } else {
      console.log('clicou dentro do local!');
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
      if(cart[item] > 0){
        let id = parseInt(item[item.length - 1], 10);
        price += (camisetasData[id].priceInt) * cart[item];
        renderCardItem(camisetasData[id], cart[item]);
      }
    }
  }

  let finalPrice = document.getElementById('totalPrice');
  finalPrice.textContent = "R$ " + price + ",00"
}

function renderCardItem(item, num) {

  const containerElement = document.getElementById('itemsContainer');

  const cardItem = document.createElement('div');
  cardItem.className = 'card-item';

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
  minusButton.id = 'minus-cart';

  const quantityForm = document.createElement('form');

  const quantityInput = document.createElement('input');
  quantityInput.type = 'text';
  quantityInput.id = 'first-item-cart';
  quantityInput.value = num;
  quantityInput.size = '1';

  const addButton = document.createElement('button');
  addButton.textContent = '+';
  addButton.id = 'add-cart';

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
