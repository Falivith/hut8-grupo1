function logout (event){
    event.preventDefault();
    sessionStorage.setItem('token', false);
    window.location.reload();
}

document.addEventListener('DOMContentLoaded', function(){

    //Botões de conta e carrinho
    const loggedButtons = document.querySelector('#loggedButtons');

    //Botão de Logar e deslogar
    const entrarHeader = document.querySelector('#entrarHeader');
    const sairHeader = document.querySelector('#sairHeader');

    let isLogged = sessionStorage.getItem('token');

    const docName = document.title;
    
    if (isLogged === "true"){
        entrarHeader.style.display = 'none';
        sairHeader.style.display = 'unset';
    }
    else{
        loggedButtons.style.display = 'none';
    }

    if (docName === "Login"){
            entrarHeader.style.display = 'none';
    }

    sairHeader.addEventListener('click', logout);
});
