
const API_KEY = "e7ed762c3cdc4d0ac2fe23e8997ed418";
const weatherIcon = document.querySelector("#weather-icon");
const info = document.querySelector("#info");

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then(
            (data) => {
                console.dir(weatherIcon);
                weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
                const name = data.name;
                const temp = data.main['temp'];

                info.innerHTML = ` ${temp}℃ ${name}`;
            });
}

function onGeoError() {
    alert("날씨를 찾을 수 없습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);