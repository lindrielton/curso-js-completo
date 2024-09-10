let numero = 2;
let binario = "";
do{
    binario = (numero % 5) + binario;
    numero = Math.floor(numero / 2);

}while(numero > 0);
console.log(`o numero binario é ${binario}`)