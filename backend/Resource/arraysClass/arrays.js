// ! arrays en javascript 

const firstArray = ["a", "b", "c", "d"];//todo: creacion de un arrays
console.log(firstArray.length);//? imprimiendo cuantos elementos tiene el arrys
console.log(firstArray.with(1, "espacioNew"));//modifico el valor mediante la posicion ==> 1 = "b" <==> remplaso por "espacioNew


// para modificar un elemento de un arrays 
//mediante la posicion del valor
firstArray[3] = "cambioP3";
console.log(firstArray);

const nombresPA = ["camilo", "juan", "martinez", "Carlos"];

const remplazoPA = nombresPA.length -1;

console.log(nombresPA[remplazoPA]);

// añadir o eliminar elementos de una arrays

const listaNumeros = [1, 3, 5, 7, 8];
listaNumeros.push(10); // agrego un elemento al final del array
console.log(listaNumeros);// muestro el cambio
// listaNumeros.pop();// elimino el ultimo elemento de mi array
// console.log(listaNumeros);

//? ingreso un valor al principio del array
listaNumeros.unshift("Principal");
console.log(listaNumeros);

//!elimino el primer valor
// listaNumeros.shift();
// console.log(listaNumeros);


// array.from o spread
// comvertir a un array
const texto = "12345";
texto.constructor.name;// lo combierto

const nuevoArrays = Array.from(texto); // ["1", "2", ...] aigono a la variable nuevoArrays
console.log(nuevoArrays);// lo muestro por consola

// array ==> concat
const elements = [1, 2, 3];

elements.push(4, 5, 6);     // Devuelve 6. Ahora elements = [1, 2, 3, 4, 5, 6]
elements.push([7, 8, 9]);   // Devuelve 7. Ahora elements = [1, 2, 3, 4, 5, 6, [7, 8, 9]]
console.log(elements);

// concat
const firstPart = [1, 2, 3];
const secondPart = [4, 5, 6];

firstPart.concat(firstPart);

console.log(firstPart.concat(secondPart));

// Se pueden concatenar múltiples arrays e incluso mezclarlos con elementos sueltos
firstPart.concat(firstPart, secondPart, 7);  // Devuelve [1, 2, 3, 1, 2, 3, 4, 5, 6, 7]
console.log(firstPart.concat(firstPart, secondPart, 7));
