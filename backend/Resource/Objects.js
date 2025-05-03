// objetos en javaScript


//* declaracion de un Objeto
//? objeto Elfo
const Elfo = {
    Raza: "Elfo_Oscuro",
    Magia: "Oscura",
    Vidas: "200 Pts",
    Arma: "Baculo",
    Artefacto: "Piedras_Magicas",
    Poder: "Magia_AltoNivel",
    talk: function() {return "vengo de talk";}
};

// formas de adceder a un iten del objeto
// por medio de puntos
console.log(Elfo.Poder);
console.log(Elfo.Raza);
// por medio de corchetes
console.log(Elfo["Vidas"]);
console.log(Elfo["Vidas"]);

console.log(Elfo);// ? muestro el objeto con sus items
Elfo ["Oraculo"] = "Ying_Yang";// ! agrego un item al objeto

console.log(Elfo);// todo: muestro el objeto con los cambios

Elfo.Magia;       // Es una variable (propiedad), devuelve "Manz"
Elfo.talk();     // Es una función (método), se ejecuta y devuelve "Hola"

const objeto = {};
objeto.toString();
console.log(objeto.toString()); // Devuelve "[object Object]" 
