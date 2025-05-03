// condicionales en javascript
// condicional if

// estructura
if(condicion) {
    // bloque de codigo a ejecutar si la condicion es verdadera
}
// ejemplo
if (edad >= 18) {
    console.log('Eres mayor de edad');
}
// condicional if-else
// estructura
if(condicion) {
    // bloque de codigo a ejecutar si la condicion es verdadera
}else{
    // bloque de codigo a ejecutar si la condicion es falsa
}
// ejemplo
if (edad >= 18) {
    console.log('Eres mayor de edad');
}else {
    console.log('Eres menor de edad');
}

// condicional if-else if-else /anidados/
// estructura
if(condicion1) {
    // bloque de codigo a ejecutar si la condicion1 es verdadera
}else if(condicion2) {
    // en caso de que el primer if no se cumpla, se evalua la condicion2
}else if(condicion3) {
    // en caso de que el primer if no se cumpla, se evalua la condicion3
}else{
    // bloque de codigo a ejecutar si ninguna de las condiciones anteriores se cumple
}
// ejemplo
if (edad >= 18) {
    console.log('Eres mayor de edad');
}else if (edad >= 12) {
    console.log('Eres un adolescente');
}
else if (edad >= 2) {
    console.log('Eres un niño / bebe');
}else{
    console.log('!ingrese un valor valido!');
}