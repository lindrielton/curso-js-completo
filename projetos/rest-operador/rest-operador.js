let num = 0;
let num1 = 1;
let num2 = 2;
let num3 = 3;
let num4 = 4;

function imprimirNumeros(...argts){
    for(let i = 0; i < argts.length; i++){
        console.log(argts[i])
    }
}


imprimirNumeros(num,num1);
console.log('separa')
imprimirNumeros(num2,num3,num4);
console.log('separa')
imprimirNumeros(1,2,3,4,5,6,7)