let weather;
let api = "http://api.openweathermap.org/data/2.5/find?q=London&units=metric&APPID=fb94fad729416de34f2d9d810d2d246c"
let units = "&units=metric"
let apiKey = "&APPID=fb94fad729416de34f2d9d810d2d246c"

$("#submit").click(function(){
    alert("hello")
})
function setup() {
  createCanvas(400, 200)
  let button = select("#submit");
  button.mousePressed(weatherAsked);

  input = select("#city")
}

function weatherAsk() {
  let url =  api + input.value() + units + apiKey
  loadJSON(url, gotData)
}

function gotData(data){
    weather = data;
}

function displayWeather(){
  background(100)
  if(weather){
    ellipse(100, 100, weather.main.temp, weather.main.temp)
    ellipse(300, 300, weather.main.humidity, weather.main.humidity)
  }
}
