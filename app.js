
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

title.addEventListener("click", clickFunction);
title.addEventListener("mouseenter", mouseEnter);
title.addEventListener("mouseleave", mouseLeave);