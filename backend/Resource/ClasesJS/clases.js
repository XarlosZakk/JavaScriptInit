// clases en javaScript

// POO programacion orientada a Objetos

let Persona = {
    nombre : "carlos",
    edad : 22
}


// poo
function Persona3 (nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

// creacion de neustro metodo 
Persona3.prototype.saludar = function(){
    console.log('hola soy ${this.nombre} y tengo ${this.edad} age');
}

//instanciar una clase
let nuevoObj = new Persona3("Carlos", 22);

nuevoObj.saludar();
console.log(nuevoObj);

class Mascotas{

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    //? metodo
    comunicar(){
        console.log('hola soy una mascota llamada ${this.nombre} y tengo ${this.edad} age');
        
    }
}

//instanciar una nueva clase
let gato = new Mascotas("NELA", 2);
gato.comunicar();

console.log(gato);
let otroGato = new Mascotas("fififi", 5)
otroGato.comunicar();
console.log(otroGato);
