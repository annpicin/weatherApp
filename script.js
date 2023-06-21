

async function displayWeather(){
    var variable = document.getElementById('input_id').value;

    
    const results = await fetchAPIData('current.json', variable)
    console.log(results)

    document.getElementById("weatherpart").innerHTML =
    `<h2> ${results.location.name}, ${results.location.country}
    <h2>
    
    <h3> ${results.current.condition.text}
    <br>
    <img src = "${results.current.condition.icon}" width = "80" height= "80">
    <h3>

    <h4>
     Temperature in farenheit: ${results.current.temp_f}
     <br>
     Temperature in celsius: ${results.current.temp_c}
     <br>
     Wind MPH: ${results.current.wind_mph}
     <br>
     UV: ${results.current.uv}
     <br>
     Humididty: ${results.current.humidity}
    <h4>
    `
}


//Fetch Data from Weather API
async function fetchAPIData(endpoint, location){
    const YOUR_API_KEY = '145451076acd4890851150448232006'
    const API_URL = 'https://api.weatherapi.com/v1/'
    var QUERY = location
    

    const response = await fetch(`${API_URL}${endpoint}?key=${YOUR_API_KEY}&q=${QUERY}&language=en-US`)
    const data = await response.json()

    return data
}


