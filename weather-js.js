const btn = document.querySelector('.button');
const EleDlt =document.getElementById('#partToRemove');
const body =document.querySelector('.body');

function fetchWeather(city) {
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=97e240511592107455936175211fffab"
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

   /*the_icon= document.createElement("p");
    the_icon.textContent = data.weather.icon;
    results.append(the_icon);*/

    var tempr= document.createElement("p");
    tempr.textContent = "Temperature: "+data.main.temp+ "°C";
    tempr.style.color='white';
    results.append(tempr);

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

