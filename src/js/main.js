'use strict';

console.log('>> Ready :)');

document.querySelector('h1').innerHTML = 'Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente';

document.querySelector('p').innerHTML = "Hola, mundo";

document.querySelector('h2').innerHTML = "La Adalaber seleccionada es:";

document.querySelector('ul').innerHTML = "<li>Tania</li>";

document.querySelector(".title").innerHTML = "lorem ipsum";
document.querySelector(".image").src = "http://via.placeholder.com/350x150";
document.querySelector('.paragraph').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit"


let myAddress = 'Madrid, 28009';
myAddress = 'Valladolid, 47009';
document.querySelector(".address").innerHTML = myAddress;

document.querySelector(".button")
document.querySelector(".button").classList.add("disabled")

