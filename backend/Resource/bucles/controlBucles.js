// como controlar los bucles en js
let Lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//bucle for 

for(let i = 0; i < Lista.length; i++){

    if (Lista[i] == 3) {
        continue;// si se cumple, que este continue
    }
    console.log(Lista[i]);
    

    if (Lista[i] > 5) {
        break;// rompe el buble y sale 
    }
}