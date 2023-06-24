let bggif = document.getElementById("weather-box")
let iconImg = document.getElementById("icon-img")
let deg = document.getElementById("deg");
let locations = document.getElementById("loc")
let main = document.getElementById("main");
let humidity = document.getElementById("humidity");
let clouds = document.getElementById("clouds");
let wind = document.getElementById("wind");
let cityinput = document.getElementById("city-input");

let currentweather = () => {
    navigator.geolocation.getCurrentPosition((location) => {
        let long = location.coords.longitude
        let lat = location.coords.latitude
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&exclude={part}&appid=e3b38e7f14164a9bccbcc2675ed01e02&units=metric`)
                .then((res) => res.json())
                .then((res) => {
            
                locations.innerHTML = res.name
                deg.innerHTML = `${Math.round(res.main.temp)}°`
                main.innerHTML = res.weather[0].main
                humidity.innerHTML = res.main.humidity + "%"
                clouds.innerHTML = res.clouds.all + "%"
                wind.innerHTML = res.wind.speed + "km/h"

                if (res.weather[0].main == "Clouds") {
                    iconImg.src = "img/cloudy.svg"
                    bggif.style.backgroundImage = "url('./img/clouds.gif')"
                } 
                else if (res.weather[0].main == "Drizzle") {
                    iconImg.src = "img/rain.svg"
                    bggif.style.backgroundImage = "url('./img/drizzle.gif')"
                }
                else if (res.weather[0].main == "Rain") {
                    iconImg.src = "img/rain.svg"
                    bggif.style.backgroundImage = "url('./img/rain.gif')"
                }
                else if (res.weather[0].main == "Clear") {
                    iconImg.src = "img/clear-day.svg"
                    bggif.style.backgroundImage = "url('./img/clear.gif')"
                }
                else if (res.weather[0].main == "Snow") {
                    iconImg.src = "img/snow.svg"
                    bggif.style.backgroundImage = "url('./img/snow.gif')"
                }   
                else if (res.weather[0].main == "Haze") {
                    iconImg.src = "img/haze.svg"
                    bggif.style.backgroundImage = "url('./img/haze.gif')"
                } 
                else if (res.weather[0].main == "Fog") {
                    iconImg.src = "img/fog.svg"
                    bggif.style.backgroundImage = "url('./img/fog.gif')"
                } 
                else if (res.weather[0].main == "Dust") {
                    iconImg.src = "img/dust.svg"
                    bggif.style.backgroundImage = "url('./img/dust.gif')"
                } 
                else if (res.weather[0].main == "Smoke") {
                    iconImg.src = "img/smoke.svg"
                    bggif.style.backgroundImage = "url('./img/smoke.gif')"
                }
              console.log(res)
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    text: 'Your email or password are incorrect ',
                  });        
            })
    }   )
}
currentweather()


let searchweather = () => {

        
if(cityinput.value.trim() == ""){
console.log("error")
}
else{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityinput.value}&appid=e3b38e7f14164a9bccbcc2675ed01e02&units=metric`)
    .then((res) => res.json())
    .then((res) => {
        locations.innerHTML = res.name
        deg.innerHTML = `${Math.round(res.main.temp)}°`
        main.innerHTML = res.weather[0].main
        humidity.innerHTML = res.main.humidity + "%"
        clouds.innerHTML = res.clouds.all + "%"
        wind.innerHTML = res.wind.speed + "km/h"

        if (res.weather[0].main == "Clouds") {
            iconImg.src = "img/cloudy.svg"
            bggif.style.backgroundImage = "url('./img/clouds.gif')"
        } 
        else if (res.weather[0].main == "Drizzle") {
            iconImg.src = "img/rain.svg"
            bggif.style.backgroundImage = "url('./img/drizzle.gif')"
        }
        else if (res.weather[0].main == "Rain") {
            iconImg.src = "img/rain.svg"
            bggif.style.backgroundImage = "url('./img/rain.gif')"
        }
        else if (res.weather[0].main == "Clear") {
            iconImg.src = "img/clear-day.svg"
            bggif.style.backgroundImage = "url('./img/clear.gif')"
        }
        else if (res.weather[0].main == "Snow") {
            iconImg.src = "img/snow.svg"
            bggif.style.backgroundImage = "url('./img/snow.gif')"
        }   
        else if (res.weather[0].main == "Haze") {
            iconImg.src = "img/haze.svg"
            bggif.style.backgroundImage = "url('./img/haze.gif')"
        } 
        else if (res.weather[0].main == "Fog") {
            iconImg.src = "img/fog.svg"
            bggif.style.backgroundImage = "url('./img/fog.gif')"
        } 
        else if (res.weather[0].main == "Dust") {
            iconImg.src = "img/dust.svg"
            bggif.style.backgroundImage = "url('./img/dust.gif')"
        } 
        else if (res.weather[0].main == "Smoke") {
            iconImg.src = "img/smoke.svg"
            bggif.style.backgroundImage = "url('./img/smoke.gif')"
        }
        console.log(res)
    })
    .catch((err) => {
        Swal.fire({
            icon: 'error',
            text: 'Invalid Country or City Name',
          });  
          currentweather()
    })
    }
}

let forcast = () => {
  
    fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=1&appid=e3b38e7f14164a9bccbcc2675ed01e02`)
    .then((res) => res.json())
    .then((res) => {
console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
}
forcast()