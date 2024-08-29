function somar(num, num2 = 2){
    return num + num2;
}

console.log(somar(1))


function potencia(base, exp=2){
    return Math.pow(base, exp);
}

console.log(potencia(2));
console.log(potencia(2,2));
console.log(potencia(2,3))