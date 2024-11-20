function decremento(numero){
    for(let i = numero; i > 0; i--){
        if(i % 2 == 0){
            console.log(`${i} numero par`)
        }
    }
} 

decremento(51)

function soma (n1,n2,n3){
   let resultado =  n1+n2+n3;
   console.log(`${resultado}`)
    
}

soma(5,10,15)