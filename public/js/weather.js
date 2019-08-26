
const API_KEY = process.env.OPENWEATHER_API_KEY


window.addEventListener('load',()=>{
    let lon;
    let lat;

    //const API_KEY = '887e631266018ad0604b33394a841f0b';

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`;
        
            fetch(api)
            .then(res => {
                return res.json();
            })
            .then(data =>{
                console.log(data);
            })
        });
    } //add else if people don't allow geolocation
});