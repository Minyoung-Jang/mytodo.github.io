const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden";
const USERNAME_KEY = "username";

function handleLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintUserName();
}

function paintUserName(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerHTML = `Hello ${username}`;
    greeting.classList.remove(HIDDEN);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", handleLoginSubmit)
}else{
    paintUserName();
}