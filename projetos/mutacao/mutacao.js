let nome = {
    apelido: 'elton',
}

let pessoa = nome;

let nome2 = {
    apelido: 'elton'
}


console.log(pessoa == nome2)
console.log(nome2 == nome)
console.log(nome == pessoa);

pessoa.apelido = 'lucas';

console.log(nome.apelido)