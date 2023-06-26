let cart = {
  camisas: {
    something: true,
    other: 10
  },
  broches: {

  },
  moletons: {

  },
  canecas:{

  }
}

sessionStorage.setItem('cart', cart);

function loadScript(url, callback) {
  var script = document.createElement('script');
  script.src = url;
  script.onload = callback;
  document.head.appendChild(script);
}

loadScript('items.js', function() {
  document.addEventListener('DOMContentLoaded', function(){

  });
});


document.addEventListener('DOMContentLoaded', function(){
    let cartButton = document.getElementById("cart-button");
    let cartModal = document.getElementById("cart-modal");
    let closeBtn = document.getElementsByClassName("close")[0];
    
    cartButton.addEventListener("click", function() {
      cartModal.style.display = "flex";
    });
    
    closeBtn.addEventListener("click", function() {
      cartModal.style.display = "none";
    });


});
