// ejercicio

function eliminarVocales(cadena) {
    // Expresión regular para identificar vocales (mayúsculas y minúsculas)
    const regex = /[aeiouáéíóúüAEIOUÁÉÍÓÚÜ]/g;
    
    // Reemplazar todas las vocales con una cadena vacía
    const cadenaSinVocales = cadena.replace(regex, '');
    
    return cadenaSinVocales;
}

// Ejemplo de uso
const textoOriginal = "Este es un ejemplo de texto con vocales";
const textoSinVocales = eliminarVocales(textoOriginal);

console.log("Texto original:", textoOriginal);
console.log("Texto sin vocales:", textoSinVocales);