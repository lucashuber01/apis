//*vamos a usar esta api: https://openweathermap.org/api
//https://openweathermap.org/current

const city = "rosario"

const getCityWeather = async (city) => {
    //Para la api hay que crearla nosotros!
    const APIkey = "ca568a0645d830dd4fd7e8179eaf051c";

    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=sp&appid=${APIkey}`

    const response = await fetch(api);
    const data = await response.json();

    console.log(data);
    console.log(response);
}

getCityWeather(city);