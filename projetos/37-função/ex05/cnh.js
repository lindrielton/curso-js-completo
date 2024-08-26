function podeDirigir(idade, cnh){
    if (idade >= 18 && cnh == true){
         console.log('pode dirigir')
    }else{
        console.log('não pode dirigir')
    }
}
podeDirigir(12, true)