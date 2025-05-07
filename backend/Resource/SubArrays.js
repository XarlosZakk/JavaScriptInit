//todo: subArrays en JavaScript
//! metododos para crear fragmentos de un Arrays principal


// primer array
const nuevoArrays = ["10", "20", "30", "40", "50"];


//? metodo .slice()
//Método .slice(): Obtiene un subarray desde una posición inicial a una final
console.log(nuevoArrays.slice(2, 3));
console.log(nuevoArrays.slice(0, 4));

//? metodo .splice()
//?Método .splice(): Obtiene un subarray desde una posición inicial, con un tamaño concreto

// segundo array
const otherArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100];
//                  0  1  2  3  4  5  6  7  8   9 
console.log(otherArray.splice(0, 7));

console.log(otherArray.splice(2, 2));// devuelve [3, 4], al asignarle que inicie en la posicion 2 con un tamano de 2 recoje solo dos elementos partiendo de la ps 2.
console.log(otherArray);//! pero este metodo altera el array ==> lo muta
// para evitar esto podemos usar el metodo ==> toSpliced()

/*
! letters.splice(1, 0, "z", "x");  // Devuelve []. Ahora array = ['a', 'z', 'x', 'b', 'e']
Observa que en el último caso de .splice(), además de extraer elementos, se insertan nuevos elementos. A raíz de este último ejemplo, mencionar que también podemos insertar elementos en una posición concreta del array de dos formas alternativas:

* Utilizando .slice() y .concat() (no se muta el array original)
* Utilizando .splice() y desestructuración (se muta el array original)
* Veamos un ejemplo de cada forma, primero, utilizando .slice() y .concat():
*/
const numbers = [1, 2, 3, 8, 9, 10];
const middlePart = [4, 5, 6, 7];

const firstPart = numbers.slice(0, 3);   // [1, 2, 3]
const lastPart = numbers.slice(3, 6);    // [8, 9, 10]

console.log(firstPart.concat(middlePart, lastPart));  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numbers);                   // [1, 2, 3, 8, 9, 10] (numbers no ha mutado)

// metodo .copyWithin()
const arrarNew = ["a", "b", "c", "d", "e", "f", "g"];

console.log(arrarNew.copyWithin(1, 0, 3));


// * reduccion del tamano de un array

const otroNuevoArray = ["cami", "juan", "lopex", "carlos", "zahir"];

