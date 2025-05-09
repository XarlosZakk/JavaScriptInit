//? ejercicio de FizzBuzz con bucle for
/*
todo: Realizar un ejercicio de FizzBuzz con bucle for, que imprima los números del 1 al 100, pero para los múltiplos de 3 imprime "Fizz" en lugar del número y para los múltiplos de 5 imprime "Buzz". Para los números que son múltiplos de ambos imprime "FizzBuzz".
*/
for(num = 0; num <= 100; num++){
    if(num % 3 == 0 && num % 5 == 0){
        console.log(num + 'FizzBuzz');
    }else if(num % 3 == 0){
        console.log (num + 'Fizz');
    }else if(num % 5 == 0){
        console.log( num + 'Buzz');
    }else{
        console.log(num); 
    }
}
