const url  = `http://127.0.0.1:8000/api/v1/weather`


var request = new XMLHttpRequest()

request.open('GET', url, true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    
    
    desc = data['weather'][0]['description'];
    console.log(desc);
    document.querySelector('#desc').innerHTML = desc;

    temp = (data['main']['temp'] * (1.8) - 459.67).toPrecision(3);
    console.log(temp);
    document.querySelector('#temp').innerHTML = temp;

    loc = data['name'] + ", " + data['sys']['country'];
    console.log(loc);
    document.querySelector('#loc').innerHTML = loc;

    var today = new Date();
    var date = (today.getMonth()+1) +'/'+ today.getDate()  +'/'+ today.getFullYear();
    document.querySelector('#date').innerHTML = date;


    console.log(data);

    
    var icon_code = data['weather'][0]['icon'];
    var icon_link_full = `http://openweathermap.org/img/wn/` + icon_code + `@2x.png`;
    console.log(icon_link_full);

    document.querySelector('#icon').src = icon_link_full
    var desc_l = desc.toLowerCase();

  }
}

request.send()



