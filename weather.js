window.addEventListener("load", ()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description')
    let temperatureDegree = document.querySelector('.temperature-degree')
    let locationTimezone = document.querySelector('.location-timezone') 
    let temperatureSection = document.querySelector('.temperature')
    const temperatureSpan = document.querySelector('.temperature span')

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/"
            const api = `${proxy}https://api.darksky.net/forecast/9d20160efaf85cf5530966106bc20d8a/${lat},${long}`
            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data =>{
                console.log(data)
                const {temperature, summary, icon} = data.currently;
                //Set DOM elements from the API
                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = summary;
                locationTimezone.textContent = data.timezone;
                //set Icon
                setIcons(icon, document.querySelector(".icon"));
                
                //change temperature to celsius/fahrenheit
                temperatureSection.addEventListener('click', ()=>{
                    if(temperatureSpan.textContent === "F"){
                        temperatureSpan.textContent === "C"
                    }else{
                        temperatureSpan.textContent === "F"
                    }
                })
            })
        })    
    }

    function setIcons(icon, iconID){
        const skycons = new Skycons({color: "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
});