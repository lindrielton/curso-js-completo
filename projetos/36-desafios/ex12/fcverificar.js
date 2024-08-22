function verificarNumero(numero){
    if( numero > 0 && numero % 2 == 0){
        console.log(' numero positivo é par')
    }else if( numero > 0 && numero % 2 !== 0){
        console.log(' numero positivo é inpar')
    }else if( numero < 0){
        console.log('numero negativo')
    }else if( numero === 0){
        console.log('numero neltro.')
    }
}

verificarNumero(-3)