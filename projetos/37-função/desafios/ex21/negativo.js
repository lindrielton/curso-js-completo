function numeroNegativo(numero){
    if(numero >= 0){
        console.log('seu numero é positivo')
    }else if(numero < 0){
        let n1 =  Math.abs(numero);
        console.log(`seu numero trasformado em positivo é ${n1}`)
    }

}

numeroNegativo(-40)