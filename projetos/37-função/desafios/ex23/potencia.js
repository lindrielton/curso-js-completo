function potenciaDumNumero(n1, n2){
    if(n1.value == 0 && n2 <= 0){
        console.log('dados ivalidos')
    }else{
         potencia = n1 ** n2 ;
        
    }
    console.log(`${potencia}`)
}

potenciaDumNumero(9, 2)

// outra maneira


function Ptcia(x1, f2){
    if(x1 != undefined && f2 != undefined){
       num = Math.pow(x1,f2)
       console.log(`a potencia é ${num}`)
    }
}

Ptcia(7,2)