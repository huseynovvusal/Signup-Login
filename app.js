const nav = document.querySelector('.nav');
const navSignUp = document.querySelectorAll('.nav .nav-items a')[0];
const navLogIn = document.querySelectorAll('.nav .nav-items a')[1];
const Name = document.querySelectorAll('.inputs')[0];
const lastName = document.querySelectorAll('.inputs')[1];
const button = document.querySelector('.button');
const text = document.querySelector('h2');

navLogIn.addEventListener('click',navLogInClick);
navSignUp.addEventListener('click',navSignUpClick);

function navLogInClick(){
    nav.classList.add('log-in-active');
    Name.style.display="none";
    lastName.style.display="none";
    button.innerHTML = 'Log in';
    text.innerHTML = 'Log in';
}

function navSignUpClick(){
    nav.classList.remove('log-in-active');
    Name.style.display="flex";
    lastName.style.display="flex";
    button.innerHTML = 'Sign up';
    text.innerHTML = 'Sign up';
}
