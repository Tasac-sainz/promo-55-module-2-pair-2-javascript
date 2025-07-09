'use strict';

console.log('>> Ready :)');

document.querySelector('h1').innerHTML = 'Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente';

document.querySelector('p').innerHTML = "Hola, mundo";

document.querySelector('h2').innerHTML = "La Adalaber seleccionada es:";

document.querySelector('ul').innerHTML = "<li>Tania</li>";

document.querySelector(".title").innerHTML = "lorem ipsum";
document.querySelector(".image").src = "https://images.unsplash.com/photo-1600357077527-930ccbaf7773?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8";
document.querySelector('.paragraph').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit"


let myAddress = 'Madrid, 28009';
myAddress = 'Valladolid, 47009';
document.querySelector(".address").innerHTML = myAddress;

document.querySelector(".button")
document.querySelector(".button").classList.add("disabled")

let textInput = document.querySelector(".input");
textInput.addEventListener("change", (event) => {console.log ("Estas escribiendo en el input");
    textInput = event.target.value;
    console.log ("valor del input dentro de la función", textInput);
    document.querySelector('.hello').innerHTML = "Hola! "+event.target.value;
});

const myButton = document.querySelector (".change-button");
myButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log ("Haz hecho clic");
    myButton.classList.toggle("change")
});

const myLorem = document.querySelector (".lorem");
myLorem.addEventListener("click", (event) => {
    console.log ("Haz hecho clic");
    myLorem.classList.toggle("lorem")
});

const buttonSubmit = document.querySelector(".submit-name");
buttonSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    const userName = document.querySelector(".input-conditional").value.toLowerCase();
    console.log ("userName", userName);
    if (userName === "maria" || userName === "luisa") {
        document.querySelector('.welcome').innerHTML = "Bienvenida, " + userName;
    } else { 
        document.querySelector('.welcome').innerHTML = "Lo siento no estás registrado";
    }
});

const number = 0;
if (number <1 && number > -1) {
  console.log('El número es 0');
} else if (number <=0) {
  console.log('El número es negativo');
} else if (number +2 >13 && number +2 <=20) {
  console.log('El número más 2 es mayor que 13 pero menor o igual que 20')
} else if (number >20 && number <50) {
  console.log('El número es mayor que 20 pero menor que 50')
} else (number !==123123125);  {
  console.log('el número no es 123123125')
}