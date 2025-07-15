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

//EJERCICIOS TIPO DE DATOS
//EJERCICIO 1: TRASTEANDO LA CONSOLA:
// Abre la consola y haz las siguientes pruebas:
        //Realiza una suma sencilla con nuestro número favorito y el de nuestra compañera y pulsa Intro.
        //Haz lo mismo, pero guardando los números en constantes y utilizando estas para sumar.
    
        const numberMica = 8
        const numberKaren = 22
        const numberTania = 10

        console.log (numberMica + numberKaren + numberTania);

//EJERCICIO 2: DAYANA MOLA
        const superWave = document.querySelector(".super-wave").classList.add("superWaveChange");
        console.log(".superWaveChange");
  
//EJERICIO 3: PRECIO DE LA FRUTA
        const kiwis = 5;
        const peras = 2;
        const uvas = 4;

        console.log (2 * 5 + 3 * 2 + 0.5 * 4);
        console.log ("con constantes:", 2 * kiwis + 3 * peras + 0.5 * uvas);

//4. Calcular el número total de horas que hemos vivido. Crea un programa que nos diga cuántas horas en total hemos vivido. Por ejemplo, si alguien tiene 60 años, este código debería mostrar un mensaje con el número 525600.

const horas = 24
const dias = 365
const edad = 60

console.log ( ( horas * dias ) * ( edad ) );

// 5. Lista de perretes. Pinta tres elementos li dentro de una lista ul con la información de gatitos: un nombre y una foto.

const firstDogName = 'Dina'
const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg'

const secondDogName = "Luna"
const secondDogImage = "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg"

const thirdDogName = "Lana"
const thirdDogImage = "https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg"

document.querySelector(".dog").innerHTML = `<li><p>${firstDogName}</p><img src="${firstDogImage}"/></li> <li><p>${secondDogName}</p><img src="${secondDogImage}"/></li><li><p>${thirdDogName}</p><img src="${thirdDogImage}"/></li>`;

// LECCIÓN 2.5 FUNCIONES
// Ejercicio 1 Crea una función que reciba como argumentos dos valores y devuelva como valor de retorno la multiplicación de ambos. Haz tres pruebas con distintos números para comprobar que funciona correctamente y muestra el resultado en la consola usando console.log().

function multiplicar (a, b, c) {
	console.log(a*b+c);
	return a * b + c;
}
multiplicar(2, 4, 1);
const resultMultiplicar = multiplicar(2,4,1)

// Ejercicio 2 Crea una función con 4 parámetros numéricos que devuelva como valor la media de todos ellos. Haz tres pruebas con distintos números para comprobar que funciona correctamente y muestra el resultado en la consola.

function media (a,b,c,d) {
  console.log(a+b+c+d/4)
  return a+b+c+d/4;
}
media (1,2,3,4);
const resultMedia = media(1,2,3,4)

//Ejercicio 3 
// Crear una función que reciba por parámetro un número y devuelva true si es par y false si es impar. Ejecútala e imprime el resultado para comprobar que funciona.


function esPar(numero) {
  return numero % 2 === 0;
}

const resultado1 = esPar(7);
console.log("Es par?", resultado1);

//Ejercicio 2 Ticket con IVA
//Crea una función que reciba por parámetro un número, que representará un precio, y devuelva un texto en el que ponga el precio sin IVA, el IVA (21%) y el total. Por ejemplo, si pasamos por parámetro un 10, la función pintará en la consola "Precio sin IVA: 10, IVA: 2,1 y Total: 12,1".

//Para probar que funciona, ejecuta la función recogiendo el resultado en una variable e imprímela en la consola para comprobarlo.

console.log ("*****************")


const getPrice = (price) => {
  const IVAPercentage = 21 
  const totalIVA = price * IVAPercentage /100 
  const totalPrice = price + totalIVA
  console.log (`El precio sin IVA es: ${price}€, el IVA es ${IVAPercentage}%, Total ${totalPrice}€`)
}
getPrice(10)
console.log ("*****************")
//ejercicio 3 variables globales

// modificamos una variable de ámbito global
let secretLetter = 'y';
function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}
console.log(secretLetter); // devuelve "x"
console.log(mySecretLetter()); // devuelve "x"

//ejercicio extra: querySelector para todas
function getEl (selector) {
  const element = document.querySelector(selector);
  if (!element) {
    console.warn(`No se encontró ningún elemento con el selector: "${selector}"`);
  }
  return element;
}
// const btnEl = getEl('.btn');
const lineOne = getEl('.line-one');
const span = getEl('.line-two');

lineOne.innerHTML ="Esto lo que es es un lío de tres pares de narices";
getEl('.btn').style.backgroundColor = "red";
span.innerHTML = "Pero no pasa nada, confiamos en el proceso";
span.style.color = "black";

getEl('.dudle')



//ejercicio combinando funciones

function esPar(numero) {
  return numero % 2 === 0;
}

const resultado = esPar(7);

const textContent = getEl(".combine").textContent;
const textContentNumber= parseInt(textContent);

if (esPar(textContentNumber)){
  console.log("Este número es par")
} else {
  console.log("Este número es impar")
}

const adalaber1 = {
  adaname: "Susana",
  age: 34,
  job: "periodista",
};
console.log(`Mi nombre es ${adalaber1.adaname}, tengo ${adalaber1.age} años y soy ${adalaber1.job}`);

const adalaber2 = {
  adaname: "Rocío",
  age: 25,
  job: "actriz",
  showBio: () => {
    console.log(`Mi nombre es ${adalaber2.adaname}, tengo ${adalaber2.age} años y soy ${adalaber2.job}`);
  }
};


console.log ("**********************")
//2. A la carrera

const adalaber3 = {
  adaname: "Susana",
  age: 34,
  job: "periodista",
  run: () => {
    console.log ("Estoy corriendo");
  },
  runAMarathon: (distance) =>  {
    console.log (`Estoy corriendo un maratón de ${distance} kilómetros`);
  },
  showBio: () => {
    console.log (`Mi nombre es ${adalaber3.adaname}, tengo ${adalaber3.age} años y soy ${adalaber3.job}`);
  },
};

adalaber3.run();
adalaber3.runAMarathon (50);
adalaber3.showBio ();
adalaber2.showBio();

console.log ("**********************")








