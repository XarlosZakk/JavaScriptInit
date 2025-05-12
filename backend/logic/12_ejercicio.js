// ejercicio de js con el condicional if 

let valorUno = 10;
let valorDos = 2;

let resultadResta = valorUno - valorDos;

if(resultadResta > 0){
    console.log("es mayor a 0")
    if(resultadResta %2 == 0 ){
        console.log("es un numero par");
    }else{
        console.log("no es un numero par");
    }
}else{
    console.log("es menor o igual a 0");
    
}
