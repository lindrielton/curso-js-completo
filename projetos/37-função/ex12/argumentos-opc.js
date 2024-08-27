function soma (a,b){
    if(a === undefined || b === undefined){
        console.log('essa fução precisa dos dois numeros para somar')
    }else{
        return a + b;
    }
}

console.log(soma(1))

console.log(soma(2,8))

function cadastro (nome, idade){
    if(idade === undefined){
        console.log(`olá seu nome é ${nome}`)
    }else{
        console.log(`seu nome é ${nome}  é idade é ${idade}`)
    }
}

cadastro('elton', 25)