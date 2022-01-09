
const title = document.querySelector("div.hello:first-child h1");

function clickFunction(){
    title.style.color = "blue";
    console.log("h1 is clicked!");
}

function mouseEnter(){
    title.innerText = "Mouse is HERE";
}

function mouseLeave(){
    title.innerText = "Mouse is OUT";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("Copy!");
}

title.addEventListener("click", clickFunction);
title.addEventListener("mouseenter", mouseEnter);
title.addEventListener("mouseleave", mouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);