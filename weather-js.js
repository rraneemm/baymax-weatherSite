const btn = document.querySelector('.button');
const EleDlt =document.getElementById('#partToRemove');
const body =document.querySelector('.body');

function fetchWeather(city) {
    var url = "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=97e240511592107455936175211fffab"
    fetch(url)
        .then((response) => response.json())
        .then((data) => renderWeather(data));
}
function renderWeather(data) {
    var results = document.querySelector('.results');

    const { name } = data;
    const { temp, temp_min, temp_max, humidity } = data.main;
    const { main, description, icon } = data.weather;
    const { speed, deg } = data.wind;


    var city = document.createElement("h2");
    city.textContent = "Weather in " + data.name;
    city.style.color='white';
    results.append(city);

    /*icon= document.createElement("p");
    icon.textContent = data.weather.icon;
    results.append(icon);*/

    temp= document.createElement("p");
    temp.textContent = "Temperature: "+data.main.temp+ "°C";
    results.append(temp);


    var tempMin= document.createElement("p");
    tempMin.textContent = "Minimum temperature: "+data.main.temp_min+"°C";
    results.append(tempMin);
    
    var tempMax= document.createElement("p");
    tempMax.textContent = "Maximum temperature: "+data.main.temp_max+ "°C";
    results.append(tempMax);
 
    humidity= document.createElement("p");
    humidity.textContent ="Humidity: "+data.main.humidity;
    results.append(humidity);
    
    var windSpeed= document.createElement("p");
    windSpeed.textContent = "Wind speed: "+data.wind.speed+ "km/h";
    results.append(windSpeed);

    var windDeg= document.createElement("p");
    windDeg.textContent = "At a degree of: "+data.wind.deg+ "°";
    results.append(windDeg);

   /* main= document.createElement("p");
    main.textContent = data.weather.main;
    results.append(main);

    var desc= document.createElement("p");
    desc.textContent = data.weather.description;
    results.append(desc);*/
 }
 function find(){
    var fromUser = document.querySelector(".srch-bar");
    fetchWeather(fromUser);
 }
 document.addEventListener('keydown',(e)=>{
    if (e.key == 'Enter'){
        find();
        EleDlt.remove();
    }
 })
 btn.addEventListener('click',()=>{
        find();
        EleDlt.remove();
 })

