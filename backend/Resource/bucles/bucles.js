
// bucles de javascript
// //! bucle while
// let Precio = 2000;
// let Telefono_Xiaomi = 500;

// while (Precio > Telefono_Xiaomi){
//     console.log("El precio es mayor a ");
    
// }

// bucle while en js 

// var contador = 0;
// while (contador <= 10) {
//     console.log("Vuelta No " + contador);
//     contador++
// }

//? bucle for js

/*
todo: estructura de un for
for (let index = 0; index < array.length; index++) {
    const element = array[index];
}
*/
/*
let i = 0;
for (i = 0; i < 11; i++) {
    console.log("hola desde el for x10");
}
*/
// for con arrays

//! array o vector
let nuevoARR = [1, 3, 4, 5, 6, "cadena", 10, true];
for(let i = 0; i < nuevoARR.length; i++){
    console.log(nuevoARR[i]);
}

//! matriz 
let matriz = [
    [1,2,3,4,5],
    [6,7,8,9,10]
]
console.log(matriz);

for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i]);
    for(let j = 0; j < matriz[i].length; j++){
        console.log(matriz[i][j]);
    }
}

let matriz1 = [];

for (let i = 0; i < 10; i++) {

    matriz1[i] = [];

    for (let j = 0; j < 5; j++) {
        matriz1[i][j] = Math.trunc(Math.random() * 10);
        console.log(matriz1);
    }
}