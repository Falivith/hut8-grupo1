document.addEventListener('DOMContentLoaded', function(){
    var cartButton = document.getElementById("cart-button");
    var cartModal = document.getElementById("cart-modal");
    var closeBtn = document.getElementsByClassName("close")[0];
    
    cartButton.addEventListener("click", function() {
      cartModal.style.display = "flex";
    });
    
    closeBtn.addEventListener("click", function() {
      cartModal.style.display = "none";
    });
});