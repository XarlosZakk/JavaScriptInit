/*
? Tarea: crear un programa que realice las 
? operaciones aritméticas básicas usando funciones.
*/
// let valor1 = prompt("Ingresa el Primer numero: ")
// console.log("El primer Valor que ingresaste es: " + valor1);

// let valor2 = prompt("Ingresa el segundo valor: ")
// console.log("el segundo valor que ingresaste es: " + valor2);


function operacionSuma(valor1, valor2) {

    let suma = valor1 + valor2;
    return suma;
}

function operacionResta(valor1, valor2) {

    let resta = valor1 - valor2;
    return resta;
}

function operacionMulti(valor1, valor2) {

    let multiplicacion = valor1 * valor2;
    return multiplicacion;
}

function operacionDivision(valor1, valor2) {

    let division = valor1 / valor2;
    return division;
}

console.log(operacionSuma(5, 6));
console.log(operacionResta(100, 50));
console.log(operacionMulti(5, 5));
console.log(operacionDivision(8, 4));



// console.log("El resultado de suma es: " + operacionSuma());
// console.log("El resultado de suma es: " + operacionResta());
// console.log("El resultado de suma es: " + operacionMulti());
// console.log("El resultado de suma es: " + operacionDivision());




