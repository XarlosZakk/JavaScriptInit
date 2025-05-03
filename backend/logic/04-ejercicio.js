/*
🧩 Nuevo Reto: Sumar todos los números del 1 al 100
Objetivo:
Crea un programa que sume todos los números del 1 al 100 y al final muestre el resultado total.

🧠 Consejo: vas a necesitar una variable acumuladora, tipo let suma = 0.
*/


// 1er intento
// let i;
// let suma;
// for (i = 1; i <= 100; i++) {
//     suma = i + 1;
//     console.log(suma)
// }

// resolucion
let suma = 0;

for (let i = 1; i <= 100; i++) {
    suma = suma + i;
}

console.log("La suma total del 1 al 100 es:", suma);
