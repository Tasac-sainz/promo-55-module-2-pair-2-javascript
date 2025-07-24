'use strict';

console.log('>> Ready :)');

//1. Mensaje de navegador obsoleto
document.querySelector('h2').innerHTML = 'Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente';

//2. Hola Mundo
document.querySelector('p').innerHTML = "Hola, mundo";

//3. Seleccionando Adalabers
const title = document.querySelector(".title2");
const alumn = document.querySelector(".first-element-li").textContent;
title.innerHTML = title.textContent + " " + alumn;

//4. Lorem ipsum
document.querySelector(".title").innerHTML = "lorem ipsum";
document.querySelector(".image").src = "https://images.unsplash.com/photo-1600357077527-930ccbaf7773?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8";
document.querySelector('.paragraph').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit"

//5. Arreglando errores
let myAddress = 'Madrid, 28009';
myAddress = 'Valladolid, 47009';
document.querySelector(".address").innerHTML = myAddress;

//6. Deshabilitando botones
document.querySelector(".button")
document.querySelector(".button").classList.add("disabled")

//2.2. Eventos
//1. ¿Cómo te llamas?
const form = document.querySelector(".form")
const input = document.querySelector(".input")
const hello = document.querySelector(".hello");

form.addEventListener("submit", (event) => {console.log ("Estas escribiendo en el input");
    event.preventDefault();
    const name = input.value;
    hello.innerHTML = "Hola! " + name
});

//2. Cambia el estilo de un botón
const myButton = document.querySelector (".change-button");
myButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log ("Haz hecho clic");
    myButton.classList.toggle("change")
});

//3. dame ipsum
const myLorem = document.querySelector (".lorem");
myLorem.addEventListener("click", (event) => {
    const newText = document.createElement("p");
    newText.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi in provident ad doloribus quae natus nisi perspiciatis veniam corrupti laborum libero quod, voluptate a eius. Culpa recusandae est obcaecati soluta."
    event.target.insertAdjacentElement("afterend", newText);
  });
//4. Información instantanea
const inputInfo = document.querySelector (".input-conditional");
const emptyParagraph = document.querySelector (".empty-paragraph");

inputInfo.addEventListener ("input", (event) => {
  const inChange =event.currentTarget.value;
  emptyParagraph.innerHTML = inChange;
})
//5. Estilo para un botón
const styleButton = document.querySelector (".styleButtoniz");
const handleClick1 = () => {
  styleButton.classList.toggle("styleButtonSecond");
}
styleButton.addEventListener ("click", handleClick1);

const styleButton2 = document.querySelector (".styleButtonde");
const handleClick2 = () => {
  styleButton2.classList.toggle("styleButtonSecond");
}
styleButton2.addEventListener ("click", handleClick2);


// CONDICIONALES 
// Ejercicio 1: control de acceso
/* const buttonSubmit = document.querySelector(".submit-name");
buttonSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    const userName = document.querySelector(".input-conditional").value.toLowerCase();
    console.log ("userName", userName);
    if (userName === "maria" || userName === "luisa") {
        document.querySelector('.welcome').innerHTML = "Bienvenida, " + userName;
    } else { 
        document.querySelector('.welcome').innerHTML = "Lo siento no estás registrado";
    }
}); */

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


const user = {
}
const job = "developer";
user.firstName = "Juan";
user.lastName = "Perez";
user.age = 50;
user.job = job;

console.log(user)

user.firstName = "Andrea";
user.addAge = () => {
  user.age = user.age + 1;
}
user.addAge ();


const movies = ["Pulp Fiction", "Noviembre", "Leaving Las Vegas"]
const workWithMovies = () => { 
console.log(movies);

movies[3] = "Esperando la carroza";
console.log(movies);

movies[2] = "Shreck"; 
};
workWithMovies();

// 2.9 BUCLES
// 1. Practicando
const acc1 = 0;
for (let i = 0; i < 10; i++) {
  console.log("El resultado es:" + [i+1])
}
console.log ("*****************************************")

//2. La media:

const numbers = [1,5,9,7,4];
let acc = 0;
for (let i = 0; i < numbers.length; i++) {
  acc = acc + numbers [i];
  console.log (acc);
}
const average = (acc, length) => {
  const average = acc/length;
  return average;
   };
const resultAverage = average(acc, numbers.length);
console.log (resultAverage);

//añadir un número al array:
numbers.push (3);
const resultAverage2 = average(acc, numbers.length);
console.log (resultAverage2);

console.log ("*****************************************")

// 3. Tenemos mucho en común
const inputOne = document.querySelector(".input--one");
const inputTwo = document.querySelector(".input--two");
const buttonBook = document.querySelector(".button--book");
const paragraphBook = document.querySelector(".paragraph--book");

const books = [];

const handleClick = () => {
  console.log ("has hecho click");
  const resultOne = inputOne.value;
  const resultTwo = inputTwo.value;
  books.push(resultOne, resultTwo);
  for (const book of books){
    paragraphBook.innerHTML+=(" A mí también me encantó " + book)
  }
};
buttonBook.addEventListener("click", handleClick);
  for (const book of books){
    paragraphBook.innerHTML+=(" A mí también me encantó " + book)
  }

//EJERCICIOS MÉTODOS FUNCIONALES ARRAYS
//1. Inflar las notas
const marks = [5,4,6,7,9];
const inflateMarks = marks.map(mark => mark + 1);
console.log("las notas de las alumnas han sido " + inflateMarks);

//2. Saludar es de buena educación
const names = ["María", "Lucía", "Susana", "Rocío", "Inmaculada"];
const nameHello = names.map(name => console.log("Bienvenida " + name));

console.log("*********")

//3. Gracias por confiar en nosotros
const users = [
{ name: "María", isPremium: false },
{ name: "Lucía", isPremium: true },
{ name: "Susana", isPremium: true },
{ name: "Rocío", isPremium: false },
{ name: "Inmaculada", isPremium: false },
];

const premium = users.map(user => {
  if (user.isPremium === true) {console.log("Bienvenida " + user.name + " gracias por confiar en nosotras")} 
  else {console.log("Bienvenida " + user.name)}
});

// EJERCICIOS FILTER
// 1. Solo los premium. Utilizamos el array de la linea 382

const premiumUsers = users.filter(user => {
  if (user.isPremium === true) {console.log("solo usuarios premium " + user.name)}
});

// 2. Los pares pueden entrar

const pins = [2389, 2384, 2837, 5232, 8998];
const parPins = pins.filter(pin => {
  if (pin % 2 === 0) {console.log("solo los pares pueden entrar " + pin)}
});

//3. Los usuarios que pueden entrar

const users2 = [
{ name: "María", isPremium: false, pin: 2389 },
{ name: "Lucía", isPremium: true, pin: 2384 },
{ name: "Susana", isPremium: true, pin: 2837 },
{ name: "Rocío", isPremium: false, pin: 5232 },
{ name: "Inmaculada", isPremium: false, pin: 8998 },
];

console.log("*********")


const onlyPair = users2.filter(user => {
  return user.pin % 2 === 0;
});
console.log(onlyPair);

//4. Utilizamos el array de la linea 411

const findedUser = users2.find(user => user.pin === 5232);
console.log(findedUser);

const deletedUser = users2.findIndex(user => user.pin === 5232);
const arraySplice= users2.splice(deletedUser, 1);
console.log(arraySplice);
console.log(users2);

//UN CALLBACK EXTRA

const scores = [5, 10, 15, 20, 25];
const callBack = score => score * 2;

const finalPoint = scores.map(callBack);
console.log(finalPoint);
