const submitbtn = document.querySelector('.container__button')
const email = document.querySelector('.container__input');
const emailMessage = document.querySelector('.emailMessage');
let regex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+");


submitbtn.addEventListener('click', (e) => {
    e.preventDefault();
    let emailValidation = email.value;
    if(regex.test(emailValidation)){
        emailMessage.innerText = "Thanks for the subscribe, we let you know when the site open and you're receive a gift ;)";
        emailMessage.classList.toggle("hidden");
        setTimeout(() => {
            emailMessage.classList.toggle('hidden')
        }, 5000)
    }
    else{
        emailMessage.innerText = "This email is not valide, please retry.";
        emailMessage.classList.toggle("hidden");
        setTimeout(() => {
            emailMessage.classList.toggle('hidden')
        }, 5000)
    }
})