/*
🧠 Tips:
Usá un array como:

javascript
Copiar
Editar
let nombres = ["Juan", "Mariana", "Luis", "Gabriela", "Ana"];
Recorre el array con un for

Usá .length para saber cuántas letras tiene cada nombre

Usá un contador (let cantidad = 0) para ir sumando si el nombre cumple la condición
*/
let nombres = ["Juan", "Mariana", "Luis", "Gabriela", "Ana", "Carlos"];
let cantidad = 0;

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i].length > 5) {
        cantidad++;
    }
}

console.log("Los nombres con más de 5 letras son: " + cantidad);
