// algoritmo de busqueda

/*
todo: Realizar un algoritmo de busqueda que busque el menor valor de un array, y lo imprima en consola.
*/

// Declaring the array with 'let' to avoid ReferenceError
let myArray = [20, 22, 19, 11, 34, 5, 45, 90, 2, 32, 12, 10, 33, 100]; // line 2

// Initialize 'miVal' with the first element of the array
let miVal = myArray[0];

// Loop through each element in 'myArray'
for (let i of myArray) {
    // If the current element 'i' is less than 'miVal', update 'miVal'
    if (i < miVal) {
        miVal = i;
    }
}

// Output the smallest value found
console.log('El valor menor es: ' + miVal);