
const title = document.querySelector("div.hello:first-child h1");

function clickFunction(){
    title.style.color = "blue";
    console.log("h1 is clicked!");
}

title.addEventListener("click", clickFunction);