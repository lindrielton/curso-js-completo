function potenciaDumNumero(n1, n2){
    if(n1.value == 0 && n2 <= 0){
        console.log('dados ivalidos')
    }else{
         potencia = n1 ** n2 ;
        
    }
    console.log(`${potencia}`)
}

potenciaDumNumero(9, 2)