// ejercicio practico de js
/*
un restaurante esta a punto de calcular la cuenta de un cliente , al cual se le suma por separado  2800 + 1300 de comida y 900 + 650 de bebidas .

Crear un programa en javscript que calcule el total de comida, el total de bebidas y el total a paga del cliente e imprime el valor por consola.

*/


let comida_1= 2800;
let comida_2 = 1300;
let bebidas_1 = 900;
let bebidas_2 = 650;

let totalComidas;
let totalBebidas;

totalComidas = comida_1 + comida_2;

totalBebidas = bebidas_1 + bebidas_2;


let totalCuentaCL; // vaariable final
totalCuentaCL = totalComidas + totalBebidas;
console.log("el total de su cuenta comida es: " + totalComidas);
console.log("el total de sus bebidas es: " + totalBebidas);
console.log("El total de su cuentas es: " + totalCuentaCL);