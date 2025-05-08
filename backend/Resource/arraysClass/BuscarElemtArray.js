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
console.log(elementArrays.indexOf(10)); // 1
console.log(elementArrays.indexOf(22)); // 4
console.log(elementArrays.indexOf(0)); // 7
//? en este caso no exixte el nuemo, por lo que nos devuelve
console.log(elementArrays.indexOf(50)); // -1

//lastIndexOf
//* lo mismo pero comienza a buscas de atras para adelante <==

console.log(elementArrays.lastIndexOf(5));
console.log(elementArrays.lastIndexOf(22));
console.log(elementArrays.lastIndexOf(0));
// lo mismo este no existe, por lo que nos devuelve un -1
console.log(elementArrays.lastIndexOf(100));

//todo: buscar un elemento en un array

const names = [ // uun array de objetos
  { name: "María", age: 20 },
  { name: "Bernardo", age: 28 },
  { name: "Pancracio", age: 22 },
  { name: "Andrea", age: 19 },
  { name: "Sara", age: 29 },
  { name: "Jorge", age: 32 },
  { name: "Yurena", age: 38 },
	{ name: "Ayoze", age: 18 },
];

// Busca el primer elemento con la edad indicada, sino devuelve -1
const findElement = (array, searchedAge) => {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element.age === searchedAge) {
      return element;
    }
  }
  return -1;
}

findElement(names, 19);     // { name: "Andrea", age: 19 }
findElement(names, 32);     // { name: "Jorge", age: 32 }
findElement(names, 33);     // -1
//mostrar
console.log(findElement(names, 19));
console.log(findElement(names, 32));


//* metodo Find

const findElemento = (array, searchedAge) => {
  return array.find(element => element.age === searchedAge) ?? -1;
}

findElement(names, 19);     // { name: "Andrea", age: 19 }
findElement(names, 32);     // { name: "Jorge", age: 32 }
findElement(names, 33);     // -1