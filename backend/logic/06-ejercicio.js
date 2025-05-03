/*
🧩 Nuevo reto: Sumar solo los números impares del 1 al 100
Objetivo:
Haz un programa que sume solo los números impares del 1 al 100, y al final muestre el total con console.log.

🧠 Recordá:

Un número impar es el que no es divisible por 2, o sea: i % 2 !== 0
*/
let i;
let suma = 0;
for (i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        suma = suma + i;
    }
}

console.log("La suma de los numeros Impares es: " + suma)