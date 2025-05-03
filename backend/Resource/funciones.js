// funciones en javascript
function operaciones(num1, num2) {
    let suma = num1 + num2;
    let resta = num1 - num2;
    let multiplicacion = num1 * num2;
    let division = num1 / num2;




    //retorno
    return {
        suma: suma,
        resta: resta,
        multiplicacion: multiplicacion,
        division: division
    }
}

console.log(operaciones(5, 5));
