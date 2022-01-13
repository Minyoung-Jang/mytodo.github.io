
const h1 = document.querySelector("div.hello:first-child h1");

function handleMouseEnter(){
    h1.innerHTML = "The mouse is enter!";
}

function handleMouseGone(){
    h1.innerHTML = "The mouse is gone!";
}

function handleWindowResize(){
    h1.innerHTML = "You just resized!";
}

h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseGone);


window.addEventListener("resize", handleWindowResize);