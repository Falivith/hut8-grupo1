document.addEventListener('DOMContentLoaded', function(){
    const loginButton = document.getElementById("loginButton");

    function login (event){
        event.preventDefault();
        sessionStorage.setItem('token', true);
        window.history.back();
    }

    loginButton.addEventListener('click', login);
});
