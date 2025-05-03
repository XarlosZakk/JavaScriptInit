/* 
todo: ejercicio No:5
🧩 Nuevo reto: Sumar solo los números pares del 1 al 100
Objetivo:
Crea un programa que sume solo los números pares del 1 al 100, y al final muestre el total con console.log.

🧠 Tips:

Vas a necesitar:

un for que recorra del 1 al 100

un if (i % 2 === 0) para saber si es par

una variable suma que acumule solo los pares

*/

let i;
let suma = 0;
for (i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        suma = suma + i;
    }
}

console.log("La suma de los numeros pares es: " + suma)
