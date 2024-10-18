function sorteio(n){
    if(n === undefined){
        console.log('pfv escolha um numero real para o sorteio')
    }else{
        sortegrande =  Math.floor(Math.random() * n)
        return sortegrande;
    }
}

console.log(sorteio(15))
console.log(sorteio(100))
console.log(sorteio(50))