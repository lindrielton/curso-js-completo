function mediaAluno(nota1, nota2){
    let media = (nota1 + nota2) / 2

    if( media <= 6){
        console.log("Aluno reprovado.")

    }else{
        console.log(`sua média é ${media} é vc está aprovado`)
    }  
}
mediaAluno(7, 8)