const clock = document.querySelector("#clock");
const today = document.querySelector("#today");

function getCurrentTime(){
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth());
    const day = String(date.getDay());
    const da = String(date.getDate());
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");
    clock.innerHTML = `${hour}:${minute}:${second}`;
    today.innerHTML = `${year}년 ${month + 1}월 ${da}일`;
}

getCurrentTime();
setInterval(getCurrentTime, 1000);