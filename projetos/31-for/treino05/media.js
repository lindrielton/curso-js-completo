function jureFinal(media){
    if(media >= 7){
        console.log("aprovado")
    }else if ( media >= 5){
        console.log("vc está em recuperação")
    }else{
        console.log("reprovado")
    }
}

jureFinal(3)