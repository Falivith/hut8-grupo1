
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


document.addEventListener('DOMContentLoaded', function(){
    let quantiaCadaItem = document.getElementsByClassName('first-item-card');
    console.log(quantiaCadaItem);
});
