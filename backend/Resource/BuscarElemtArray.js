//todo: buscar elementos en un array 
// metodos que sirven para realizar acciones con los arrays, estos son algunos

// includes
const elementArrays = [5, 10, 12, 20, 22, 30, 32, 0];

elementArrays.includes(22);
console.log(elementArrays.includes(22)); // result True, porque si exixte en la lista de numeros
console.log(elementArrays.includes(21)); // devulve false porque no existe en la lista de numeros 

//indexOf
// nos devuelve la posicion que ocupa en la lista
//! en caso de no existir nos devuelve -1
console.log(elementArrays.indexOf(10));// 1
console.log(elementArrays.indexOf(22));// 4
console.log(elementArrays.indexOf(0));// 7
//? en este caso no exixte el nuemo, por lo que nos devuelve
console.log(elementArrays.indexOf(50));// -1

//lastIndexOf
//* lo mismo pero comienza a buscas de atras para adelante <==

console.log(elementArrays.lastIndexOf(5));
console.log(elementArrays.lastIndexOf(22));
console.log(elementArrays.lastIndexOf(0));
// lo mismo este no existe, por lo que nos devuelve un -1
console.log(elementArrays.lastIndexOf(100));
