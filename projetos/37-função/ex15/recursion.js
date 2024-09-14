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


