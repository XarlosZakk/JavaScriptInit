/* 
🧠 Reto: Contar cuántos múltiplos de 5 hay entre el 1 y el 100
Objetivo:
En vez de sumarlos, ahora queremos contar cuántos hay.

🧩 Tips:

Usá un contador tipo let cantidad = 0

Si i % 5 === 0, aumentá el contador

Mostralo al final con console.log
*/
let cantidad = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        cantidad++; // aumentar el contador
    }
}

console.log("La cantidad de múltiplos de 5 entre 1 y 100 es: " + cantidad);
