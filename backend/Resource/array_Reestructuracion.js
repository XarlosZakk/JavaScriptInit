//todo: reestructuracion de array en js

const pair = [3, 4];

// usando desestructuracion + spread los unimos

const completoArray = [1, 2, ...pair, 5];
console.log(completoArray);// y obtenemos por consola [1, 2, 3, 4, 5] como resultado
//? por otro lado si no usamos la funcionalidad spread obtendremos: 

const sinSpread = [1, 2, pair, 5];
console.log(sinSpread); // obtenemos esto ==> [ 1, 2, [ 3, 4 ], 5 ] lo cual es feo en terminos de sintaxis 


//* conclucion el Spread nos sirve para unir/copiar algo que sea recorrible de forma mas sencilla

// mas ejemlpos
//!funciones
//*1
let algunosNumeros = [12, 56, 88];

const addNumeros = (a, b, c) => {
    console.log(a + b + c);
}
addNumeros(...algunosNumeros);
// Resultado -> 156

//*2 
//! copiar objetos
const usuario = {
    nombre: 'Alex',
    apellido: 'Tomás',
    edad: 40
}

const copiaDeUsuario = {...usuario};
console.log(copiaDeUsuario);
// Resultado
// Object {
//   apellido: "Tomás",
//   edad: 40,
//   nombre: "Alex"
// }




//! Concatenar y añadir nuevas propiedades a un objeto
const coche = {
    marca: 'Peugeot',
    modelo: '207',
}
const caracteristicas = {
    color: 'Azul',
    cv: '115',
}

const automovil = {...coche, ...caracteristicas};
console.log(automovil);
// Resultado
// Object {
//   color: "Azul",
//   cv: "115",
//   marca: "Peugeot",
//   modelo: "207"
// }

const extras = {...automovil, 'aacc': true };
console.log(extras);
// Resultado
// Object {
//   aacc: true,
//   color: "Azul",
//   cv: "115",
//   marca: "Peugeot",
//   modelo: "207"
// }
