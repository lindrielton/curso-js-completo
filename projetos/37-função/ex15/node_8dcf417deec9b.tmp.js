function retornaarNumeroPar(n){
    if(n % 2 == 0){
        console.log(`${n} é par`)
    }else{
        console.log(n)
        retornaarNumeroPar(n-1);
    }
}

retornaarNumeroPar(61)

//outro exemplo

function parinpar(num){

  while(num >= 0){
    if(num.lenght === 0){
        console.log('fim da picada')
    }else if( num % 2 ==0){
        console.log(`${num} é par`)
        parinpar(num-1)
    }else{
        console.log(`${num}  é inpar`)
        parinpar(num - 3)
    }
   
  }
}

console.log(parinpar(32))