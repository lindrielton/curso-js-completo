function semaforo(cor){
    if(cor === 'vermelho' ){
        console.log('pare')
    }else if( cor === 'laranja'){
        console.log('atenção')
    }else if ( cor === 'laranja'){
        console.log('siga')
    }else if( cor === 'amarelo'){
        console.log('diminua a velocidade')
    }else{
        console.log('coloque uma cor valida.')
    }
}

semaforo('amarelo')