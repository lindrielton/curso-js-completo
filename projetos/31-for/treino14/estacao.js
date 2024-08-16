function deternmineEstação(mes){
    if (mes < 3 || mes === 12){
        console.log('verão')

    }else if (mes < 6){
        console.log('outono')
    }else if (mes < 9){
        console.log('inverno')
    }else{
        console.log("primavera")
    }
}

deternmineEstação(10)