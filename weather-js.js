const btn = document.querySelector('.button');
const EleDlt =document.getElementById('#partToRemove');
const body =document.querySelector('.body');

let apiKey="97e240511592107455936175211fffab";
//var textCheck = false;


function find(){
    //fetchWeather(document.querySelector('.srch-btn').value);
    const fromUser = document.querySelector(".srch-bar");
    let city_name =fromUser.value;
    fetchWeather(city_name);
    console.log(city_name);
    //textCheck=true;
 }
 document.addEventListener('keydown',(e)=>{
    if (e.key == 'Enter'){
        find();
        //EleDlt.remove();
    }
 })
 btn.addEventListener('click',()=>{
        find();
        //EleDlt.remove();
 })
 function fetchWeather(city) {
    fetch((
      "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid="
      + apiKey) .replace('London', city))
    .then((response) => response.json())
    .then((data) => this.renderWeather(data));
    console.log(city);
  }
  /*function fetchWeather(city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q="+
      city+
      "&units=metric&appid="
      + apiKey
    ).then((response) => response.json())
    .then((data) => this.renderWeather(data));
    console.log(city);
  }*/

/*function fetchWeather(city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=97e240511592107455936175211fffab"
    .replace('London',city) 
    )
    .then((response) => response.json())
    .then((data) => renderWeather(data));
}*/

function renderWeather(data) {
    var results = document.querySelector('.results');

    const { name } = data;
    const { temp,feels_like, temp_min, temp_max, humidity } = data.main;
    const { main, description, icon } = data.weather[0];
    const { speed, deg } = data.wind;


    var city = document.createElement("h2");
    city.textContent = "Weather in " + data.name;
    city.style.color='white';
    results.append(city);

   /*the_icon= document.createElement("p");
    the_icon.textContent = data.weather.icon;
    results.append(the_icon);*/

    var tempr= document.createElement("p");
    tempr.textContent = "Temperature: "+data.main.temp+ "°C";
    tempr.style.color='white';
    results.append(tempr);
    
    var feels= document.createElement("p");
    feels.textContent = "Temperature: "+data.main.feels_like+ "°C";
    tempr.style.color='white';
    results.append(feels);

    var tempMin= document.createElement("p");
    tempMin.textContent = "Minimum temperature: "+data.main.temp_min+"°C";
    tempMin.style.color='white';
    results.append(tempMin);
    
    var tempMax= document.createElement("p");
    tempMax.textContent = "Maximum temperature: "+data.main.temp_max+ "°C";
    tempMax.style.color='white';
    results.append(tempMax);
 
    var humidity_h= document.createElement("p");
    humidity_h.textContent ="Humidity: "+data.main.humidity;
    humidity_h.style.color='white';
    results.append(humidity_h);
    
    var windSpeed= document.createElement("p");
    windSpeed.textContent = "Wind speed: "+data.wind.speed+ "km/h";
    windSpeed.style.color='white';
    results.append(windSpeed);

    var windDeg= document.createElement("p");
    windDeg.textContent = "At a degree of: "+data.wind.deg+ "°";
    windDeg.style.color='white';
    results.append(windDeg);

    maiN= document.createElement("p");
    maiN.textContent = data.weather.main;
    maiN.style.color='white';
    results.append(maiN);

    var desc= document.createElement("p");
    desc.textContent = data.weather.description;
    desc.style.color='white';
    results.append(desc);
 }

 //fetchWeather("Dubai");
 
