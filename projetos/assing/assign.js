carro = {
    portas: 4,
    marca: 'hinday',
    motor:'2.0',
}


adicionais = {
    arcondicinado: 'sim',
    bancoCouro: 'ok',
    tetoSolar: 'ok',

}


console.log(carro);

Object.assign(carro,adicionais);

console.log(carro);