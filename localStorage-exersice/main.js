const storageInput = document.querySelector('.storage');
const text = document.querySelector('.text');
const button = document.querySelector('.button');
const storedInput = localStorage.getItem('texinput');

if(storageInput){
    text.textContent = storedInput
}

storageInput.addEventListener('input', message => {
    text.textContent = message.target.value
})

const saveToLocalStorage = () => {
    localStorage.setItem('texinput', text.textContent)
}

button.addEventListener('click', saveToLocalStorage)