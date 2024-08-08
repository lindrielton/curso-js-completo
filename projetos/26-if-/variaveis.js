
let idade = 0
let nome = ''

if (idade == 18 && nome == 'matheus'){
    console.log('dados validos, sejá bem vindo')
}


let passaport = false

if ((idade > 30 && nome != 'matheus')  || passaport == true){
    console.log('pode subir!')
}

if ((idade.length == 0 && ! nome) || passaport == false){
    console.log('esse passageiro não existe.')
}
