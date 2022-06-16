const openFormBtn = document.getElementById('open-modal')
const closeFormBtn = document.getElementById('close-modal')
const modal = document.getElementsByClassName('modal')[0]
const nameInput = document.getElementById('modal-input-name')
const surnameInput = document.getElementById('modal-input-surname')
const userName = document.getElementById('user-name')
const userSurname = document.getElementById('user-surname')

const userData = {
    name: '',
    surname: ''
}

function showModal() {
    // modal.classList.toggle('modal--close')
    if (modal.classList.contains('modal--close')) {
        modal.classList.remove('modal--close')
    }
}

function hideModal() {
    modal.classList.add('modal--close') 
    nameInput.value = '';
    surnameInput.value = '';
    userSurname.innerText = '';
    userName.innerText = '';
}

openFormBtn.onclick = showModal;

closeFormBtn.onclick = hideModal;
nameInput.oninput = function (event) {
    userData.name = event.target.value;
    userName.innerText = userData.name;
}
surnameInput.oninput = function (event) {
    userData.surname = event.target.value;
    userSurname.innerText = userData.surname;
}
