// destructuracion de arrays 

const elementosNuevos = ["element1", "element2", "element3"];

const [primero, segundo] = elementosNuevos;

console.log(primero);// extraigo el primer elemnto del array
console.log(segundo);// extraigo el segundo elemento del array

const elements = [5, 4, 3, 2];
const [first, , third] = elements; // first = 5, third = 3, rest = discard

// function debug(param){
//     return param;
// }

// console.log(debug);

//! spread
const debug = (param) => console.log(...param);// creamos la funcion que recibira el parametro
const array = [1, 2, 3, 4, 5];// creamos el paramaetro, en este caso un //? arrays
debug(array);// le damos el parametro a la funcion
//* me devuelve : 1 2 3 4 5 por consola

//! rest
const debug2 = (...parametroNuevo) => console.log(parametroNuevo);// creas la funcion para agrupar 
debug2(10, 11, 12, 13, 14);// le envio el parametro 
//* me devuelve [10, 11, 12, 13, 14] por consola

const elementS = [5, 4, 3, 2];
const [firsts, ...rests] = elements;  // first = 5, rest = [4, 3, 2]
console.log(firsts, rests);//todo: agrupación de varios elementos individuales, en un array

