const buttonMenuMobile = document.getElementById('openMenu');
const menuMobile = document.getElementById('menuMobile');
const btnEmail = document.getElementById('sendEmail');
const inputEmail = document.getElementById('email');

function openMenu() {
    menuMobile.classList.contains('active') ? buttonMenuMobile.innerText = '☰' : buttonMenuMobile.innerText = 'x';
    menuMobile.classList.toggle('active');
}

function sendEmail() {
    alert('Cadastrado com sucesso! (MENSAGEM FICTICIA)');
}

let inputEmailLength = inputEmail.addEventListener('change', () => {
    if (inputEmail.value.length > 0) {
        btnEmail.addEventListener('click', sendEmail);
    }
})

buttonMenuMobile.addEventListener('click', openMenu);