

//! bucle que imprime los numeros del 1 al 100 , imprime si el numero es par o si es impar

for (let i = 0; i <= 100; i++) {
    if(i %2 ==0){
        console.log(i + " : soy un numero par");
    }else if(i %5 == 0){
        console.log(i + " : soy divisible para 5");
        
    }else if(i %3 ==0){
        console.log(i + " : soy divisible para 3");
    }else{
        console.log("soy un numero normal");
    }
}