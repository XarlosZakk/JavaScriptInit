# 🚀 JavaScript Fundamentals

<div align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm"/>
</div>

<br>

## 📚 Contenido

- [Introducción](#introducción)
- [Conceptos Básicos](#conceptos-básicos)
- [Características Avanzadas](#características-avanzadas)
- [Ecosistema JavaScript](#ecosistema-javascript)
- [Recursos de Aprendizaje](#recursos-de-aprendizaje)
- [Contribuir](#contribuir)

## 📝 Introducción

JavaScript es un lenguaje de programación interpretado, de alto nivel, que se utiliza principalmente para crear contenido interactivo en páginas web. Creado inicialmente por Netscape en 1995, se ha convertido en uno de los lenguajes más populares y versátiles del mundo, extendiéndose más allá del navegador con tecnologías como Node.js.

## 🧱 Conceptos Básicos

### Variables y Tipos de Datos

```javascript
// Variables con let y const
let nombre = "Carlos";
const PI = 3.1416;

// Tipos de datos
let texto = "Hola Mundo"; // String
let numero = 42; // Number
let esVerdadero = true; // Boolean
let noDefinido = undefined; // Undefined
let nulo = null; // Null
let simbolo = Symbol("id"); // Symbol
let objeto = { nombre: "Carlos" }; // Object
let arreglo = [1, 2, 3]; // Array (Object)
```

### Estructuras de Control

```javascript
// Condicionales
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

// Bucles
for (let i = 0; i < 5; i++) {
  console.log(`Iteración ${i}`);
}

let frutas = ["manzana", "pera", "uva"];
for (let fruta of frutas) {
  console.log(fruta);
}
```

### Funciones

```javascript
// Función declarativa
function sumar(a, b) {
  return a + b;
}

// Función de expresión
const multiplicar = function (a, b) {
  return a * b;
};

// Arrow function
const dividir = (a, b) => a / b;

// Callback
setTimeout(() => {
  console.log("Han pasado 2 segundos");
}, 2000);
```

## 🚀 Características Avanzadas

### Programación Orientada a Objetos

```javascript
// Clases
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
  }
}

const carlos = new Persona("Carlos", 28);
console.log(carlos.saludar());
```

### Asincronía

```javascript
// Promesas
const obtenerDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, nombre: "Producto" });
    }, 1500);
  });
};

// Async/Await
async function mostrarDatos() {
  try {
    const datos = await obtenerDatos();
    console.log(datos);
  } catch (error) {
    console.error("Error:", error);
  }
}
```

### Manipulación del DOM

```javascript
// Seleccionar elementos
const titulo = document.querySelector("h1");
const botones = document.querySelectorAll(".btn");

// Modificar contenido
titulo.textContent = "Nuevo Título";

// Eventos
const boton = document.getElementById("miBoton");
boton.addEventListener("click", () => {
  alert("¡Botón clickeado!");
});
```

## 🌐 Ecosistema JavaScript

### Frameworks y Librerías Frontend

- **React**: Biblioteca para construir interfaces de usuario
- **Vue.js**: Framework progresivo para UI
- **Angular**: Framework completo para aplicaciones web
- **Svelte**: Compilador para crear interfaces reactivas

### Backend

- **Node.js**: Entorno de ejecución para JavaScript en el servidor
- **Express**: Framework minimalista para Node.js
- **NestJS**: Framework inspirado en Angular para backend
- **Deno**: Alternativa segura a Node.js

### Herramientas de Desarrollo

- **Webpack**: Empaquetador de módulos
- **Babel**: Compilador para usar JavaScript moderno
- **ESLint**: Herramienta de análisis de código
- **Jest**: Framework de testing

## 📚 Recursos de Aprendizaje

- [MDN Web Docs](https://developer.mozilla.org/es/docs/Web/JavaScript) - Documentación completa
- [JavaScript.info](https://javascript.info/) - Tutorial moderno de JavaScript
- [Eloquent JavaScript](https://eloquentjavascript.net/) - Libro gratuito
- [FreeCodeCamp](https://www.freecodecamp.org/) - Curso interactivo gratuito

## 🤝 Contribuir

Si deseas contribuir a este proyecto, no dudes en enviar un Pull Request o abrir un Issue. ¡Toda contribución es bienvenida!

<div align="right">
  <sub>Creado con ❤️ por <strong>Carl's{Dev}</strong></sub>
</div>
