/*
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 *
 * Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 */

//? operadores de asignacion
let x = 10; // Asignacion simple
let y = 5; // Asignacion simple
let z = x + y; // Asignacion compuesta (suma)
let a = x - y; // Asignacion compuesta (resta)
let b = x * y; // Asignacion compuesta (multiplicacion)
let c = x / y; // Asignacion compuesta (division)
let d = x % y; // Asignacion compuesta (modulo)
let e = x ** y; // Asignacion compuesta (exponente)

let n1 = 5, n2 = 10;
let n3 = 15, n4 = 20; // Asignacion compuesta (suma)
n1 += n2; // Asignacion compuesta (suma)
n1 -= n2; // Asignacion compuesta (resta)
n1 *= n2; // Asignacion compuesta (multiplicacion)  
n1 /= n2; // Asignacion compuesta (division)
n1 %= n2; // Asignacion compuesta (modulo)
n1 **= n2; // Asignacion compuesta (exponente)


//? operadores aritmeticos
let num1 = 10;
let num2 = 5;

let suma = num1 + num2;// suma
let resta = num1 - num2;// resta
let multiplicacion = num1 * num2;// multiplicacion
let division = num1 / num2;// division
let modulo = num1 % num2;// modulo
let exponente = num1 ** num2;// exponente
let incremento = ++num1;// incremento
let decremento = --num2;// decremento

console.log("suma: " + suma);
console.log("resta: " + resta);
console.log("multiplicacion: " + multiplicacion);
console.log("division: " + division);
console.log("modulo: " + modulo);
console.log("exponente: " + exponente);
console.log("incremento: " + incremento);
console.log("decremento: " + decremento);


//? operadores de comparacion
let valor1 = 10;
let valor2 = 10;

// == compara el valor
if(valor1 == valor2){
    console.log("los valores son iguales");
}
else{
    console.log("los valores son diferentes");
}

// === compara el valor y el tipo
if(valor1 === valor2){
    console.log("los valores son iguales y del mismo tipo");
}
else{
    console.log("los valores son diferentes o de diferente tipo");
}

// != compara el valor
if(valor1 != valor2){
    console.log("los valores son diferentes");
}

//> compara si es mayor
if(valor1 > valor2){
    console.log("valor1 es mayor que valor2");
}

//< valor2 compara si es menor
if(valor1 < valor2){
    console.log("valor1 es menor que valor2");
}

//>= compara si es mayor o igual
if(valor1 >= valor2){
    console.log("valor1 es mayor o igual que valor2");
}

//<= compara si es menor o igual
if(valor1 <= valor2){
    console.log("valor1 es menor o igual que valor2");
}

//? operadores logicos
let a1 = true; // verdadero
let a2 = false; // falso

// logica and
if(a1 == true && a2 == false){
    console.log("ambos son tienen sus booleanos correctos");
}

// logica or
else if(a1 == true || a2 == false){
    console.log("uno de los booleanos es correcto");
}
else{
    console.log("ninguno de los booleanos es correcto");
}

// logica not
if(!(a1 == true)){
    console.log("el booleano es falso");
}
else{
    console.log("el booleano es verdadero");
}

//operadoes logicos de javaScript

// operador typeof
let a3 = 10;
console.log(typeof a3); // devuelve el tipo de dato que es a3

// operador instanceof
let a4 = [1, 2, 3];
console.log(a4 instanceof Array); // devuelve true si a4 es un array

// bucles 
//*bucle for
