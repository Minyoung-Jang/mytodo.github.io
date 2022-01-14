
function handleWindowResize(){
    console.log(window.innerWidth);
    if(window.innerWidth < 300){
        document.body.style.backgroundColor = "blue";
    }else if(window.innerWidth < 600){
        document.body.style.backgroundColor = "tomato";
    }else{
        document.body.style.backgroundColor = "red";

    }
}

window.addEventListener("resize", handleWindowResize);