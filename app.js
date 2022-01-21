let input = document.querySelector('.input_text');
let button = document.querySelector('.submit');
let contenedor = document.querySelector('.card')
let fecha = new Date();
var iconurl = src=" http://openweathermap.org/img/wn/10d@2x.png";


button.addEventListener('click', function () {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&lang=es&units=metric&appid=0d68f01b711bf6f7896189cdcb23f8be')

    .then(response => response.json())
    .then(data => {
    

      let nameValue = data['name'];
      let paisValue = data['sys']['country'];

      let tempValue = data['main']['temp'];
      let tempMin = data['main']['temp_min'];
      let tempMax = data['main']['temp_max'];
      let descValue = data['weather'][0]['description'];
      let iconValue = data['weather'][0]['icon'];
 

      contenedor.innerHTML = `<h2 class="name" id="name">${nameValue} - ${paisValue}</h2>
                              <div class="temp">
                                <div>
                                  <p>Clima de ${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()}</p>
                                </div>
                                <div class='min_max'>
                                  <h4 class='temp_titulo'>min </h4>
                                  <p>${Math.round(tempMin)}°C</p>
                                  <h4 class='temp_titulo'>max</h4>
                                  <p>${Math.round(tempMax)}°C</p>
                                </div>
                                <div>
                                  <img src="img/temperatura.png">
                                </div>
                                <div>
                                  <p>${Math.round(tempValue)}°C</p>
                                </div>
                              </div>

                              <div class="cielo">
                                <div>
                                <img src="http://openweathermap.org/img/wn/${iconValue}@2x.png">
                                </div>
                                <div>
                                  <p>${descValue}</p>
                                  
                                </div>
                              </div>
     
      
      
      `
    })

    .catch(err => alert("error no se encontro ciudad!"));
})


