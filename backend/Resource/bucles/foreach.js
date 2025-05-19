
// metodo foreach

let arr = [1, 2, 3, 4, 5, 6 ,7, 8, 9, 10];


// este modifica al original
arr.forEach((Element) => {
    console.log(Element)
}) ;

// metodo map (este si retorna un nuevo arr)

let  nuevoArray = arr.map((elemento) => {
    return (elemento * 2)
})

console.log(nuevoArray);
console.log(arr);

