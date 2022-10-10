let nombreUsuario = prompt('Escriba su nombre, por favor')

function mostrarSaludo(){

  fecha = new Date(); 
  hora = fecha.getHours();

  if(hora >= 0 && hora < 12){
    texto = `Hola, Buenos días ${nombreUsuario}`;
    imagen = "img/dia.png";
  }

  if(hora >= 12 && hora < 19){
    texto = `Hola, Buenas tardes ${nombreUsuario}`;
    imagen = "img/tarde.png";
  }

  if(hora >= 19 && hora < 24){
    texto = `Hola, Buenas noches ${nombreUsuario}`;
    imagen = "img/noche.png";
  }

  swal.fire({
      imageUrl: imagen,
      imageHeight: '200px',
      title: texto, 
      text:'Bienvenid@ a Turismo Comodoro',
      confirmButtonText: 'Aceptar'
  })
}

//Clima

//Elementos que van a ser modificados

let tempImg = document.getElementById('temp-img'); //imagen
let temperatura = document.getElementById('temperatura'); //temperatura valor
let descripcion = document.getElementById('descripcion'); //descripcion

async function mostrarClima(){
    const url ='https://api.openweathermap.org/data/2.5/weather?lat=-45.8667&lon=-67.5&lang=es&appid=7fdde1f08437bb7366e151ac7181f2c5';

    console.log(url)
    
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    console.log(data);

    tempkelvin = Math.round(data.main.temp)

    console.log(tempkelvin)

    temperatura.innerHTML = `${toCelsius(data.main.temp)}°C`;
    descripcion.innerHTML = data.weather[0].description;

    let desc = data.weather[0].description
    descripcion.textContent = desc.toUpperCase()
    console.log(data.weather[0].main)
    mostrarIcono(data);
}

console.log(mostrarClima())

function toCelsius() {
    return Math.round(tempkelvin- 273.15);
}

function mostrarIcono(data) {
const temp = toCelsius(data.main.temp);
  let src = 'img/temp-mid.png';
    if (temp > 26) {
        src = 'img/temp-high.png';
    } else if (temp < 20) {
        src = 'img/temp-low.png';
    }
   tempImg.src = src;
}