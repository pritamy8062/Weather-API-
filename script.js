const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '799ecf6849mshccef3cd1df94555p196665jsn0405d69de5a4',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)

            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset

        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")


const getWeather_for_Shimla = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shimla', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)

            cloud_pct_for_Shimla.innerHTML = response.cloud_pct
            feels_like_for_Shimla.innerHTML = response.feels_like
            humidity_for_Shimla.innerHTML = response.humidity
            max_temp_for_Shimla.innerHTML = response.max_temp
            min_temp_for_Shimla.innerHTML = response.min_temp
            sunrise_for_Shimla.innerHTML = response.sunrise
            sunset_for_Shimla.innerHTML = response.sunset
            temp_for_Shimla.innerHTML = response.temp
            wind_degrees_for_Shimla.innerHTML = response.wind_degrees
            wind_speed_for_Shimla.innerHTML = response.wind_speed

        })
        .catch(err => console.error(err));
}

getWeather_for_Shimla()


const getWeather_for_Mumbai = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)

            cloud_pct_for_Mumbai.innerHTML = response.cloud_pct
            feels_like_for_Mumbai.innerHTML = response.feels_like
            humidity_for_Mumbai.innerHTML = response.humidity
            max_temp_for_Mumbai.innerHTML = response.max_temp
            min_temp_for_Mumbai.innerHTML = response.min_temp
            sunrise_for_Mumbai.innerHTML = response.sunrise
            sunset_for_Mumbai.innerHTML = response.sunset
            temp_for_Mumbai.innerHTML = response.temp
            wind_degrees_for_Mumbai.innerHTML = response.wind_degrees
            wind_speed_for_Mumbai.innerHTML = response.wind_speed

        })
        .catch(err => console.error(err));
}

getWeather_for_Mumbai()


const getWeather_for_Lucknow = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)

            cloud_pct_for_Lucknow.innerHTML = response.cloud_pct
            feels_like_for_Lucknow.innerHTML = response.feels_like
            humidity_for_Lucknow.innerHTML = response.humidity
            max_temp_for_Lucknow.innerHTML = response.max_temp
            min_temp_for_Lucknow.innerHTML = response.min_temp
            sunrise_for_Lucknow.innerHTML = response.sunrise
            sunset_for_Lucknow.innerHTML = response.sunset
            temp_for_Lucknow.innerHTML = response.temp
            wind_degrees_for_Lucknow.innerHTML = response.wind_degrees
            wind_speed_for_Lucknow.innerHTML = response.wind_speed

        })
        .catch(err => console.error(err));
}

getWeather_for_Lucknow()

const getWeather_for_Kolkata = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)

            cloud_pct_for_Kolkata.innerHTML = response.cloud_pct
            feels_like_for_Kolkata.innerHTML = response.feels_like
            humidity_for_Kolkata.innerHTML = response.humidity
            max_temp_for_Kolkata.innerHTML = response.max_temp
            min_temp_for_Kolkata.innerHTML = response.min_temp
            sunrise_for_Kolkata.innerHTML = response.sunrise
            sunset_for_Kolkata.innerHTML = response.sunset
            temp_for_Kolkata.innerHTML = response.temp
            wind_degrees_for_Kolkata.innerHTML = response.wind_degrees
            wind_speed_for_Kolkata.innerHTML = response.wind_speed

        })
        .catch(err => console.error(err));
}

getWeather_for_Kolkata()



