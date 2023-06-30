document.addEventListener('DOMContentLoaded', function(){
    const loginButton = document.getElementById("loginButton");
    
    loginButton.addEventListener('click', login);

    function login (event){
        event.preventDefault();
        sessionStorage.setItem('token', true);
        window.location.href = "../index.html";
    }
});
