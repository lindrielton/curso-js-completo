function sumEvenNumbers(numeros){
    let soma = 0;
    for(i = 0; i <= numeros.length; i++){
        if(i % 2 === 0){
            soma += i
        }

    }
    console.log(`${soma}`)
}
let numeros = [1,2,3,4,5,6,7,8,9]
sumEvenNumbers(numeros)