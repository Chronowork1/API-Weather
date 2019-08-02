
/*global */

/*let weather;
let api = "http://api.openweathermap.org/data/2.5/find?q=London&units=metric&APPID=fb94fad729416de34f2d9d810d2d246c"
let units = "&units=metric"
let apiKey = "&APPID=fb94fad729416de34f2d9d810d2d246c"

function setup() {

}

function weatherAsk() {

}

function gotData(data){
}

function displayWeather(){
  
}*/

window.addEventListener("load",()=>{
    let long;
    let lat;
    let temperatureDegree = document.querySelector(".temperature-degree")

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            const proxy = "https://cors-anywhere.herokuapp.com/";
            let city = "London"
            let units = "&units=metric"
            let apiKey = "&APPID=fb94fad729416de34f2d9d810d2d246c"
            const api = proxy + "api.openweathermap.org/data/2.5/find?q=" + city + units + apiKey;
            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                const {temperature}= data.currently;
                temperatureDegree.textContent = temperature; 
            })
        })
    }
})

