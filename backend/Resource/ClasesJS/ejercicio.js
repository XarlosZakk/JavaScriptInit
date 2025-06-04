

class Lista {
    constructor() {

        this.item = [];
    }
    // metodo de agregar
    agregar(elemento) {
        this.item.push(elemento);
    }
    //para mostrar 
    mostrar() {
        console.log('lista : ${this.item}');
    }
}



//instanciar una objeto nuevo
let addElement = new Lista();
console.log(addElement);
addElement.agregar("luza");
addElement.mostrar();
console.log(addElement);

// markdaun