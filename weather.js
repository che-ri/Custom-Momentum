const weather = document.querySelector(".js-weather")
const API_KEY = '52210fb6e9bc385428293f430f25d2f3';
const COORDS = 'coords';

function getWeather(let,log){
    //fetch는 데이터를 얻는 방법이다.
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${let}&lon=${log}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} ${place}`;
    })

}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude, longitude
        // 변수와 ket를 같게 하고 싶다면 위와같이 적는다.
        // 아래와같은 효과를 준다.
        // latitude: latitude,
        // longitude: longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude)
}   

function handleGeoError(){
    console.log("Cant access geo location")
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError)
    //getCurrentPosition에서 위치정보제공수락하면 handleGeoSucces, 거절하면 handleGeoError로 넘어간다.
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords===null){
        askForCoords();
    }else{
    //get weather
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);    
    }
}

function init(){
    loadCoords();
}

init()