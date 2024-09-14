let num = 12321;
let reverso = 0;
let temp = num;
while (temp > 0){
    let digito = temp % 10;
    reverso = (reverso*10) + digito;
    temp = Math.floor(temp/10);
}
if (num == reverso){
    console.log(`${num} é polidromo.`)
}else{
    console.log(`${num} não é um polidromo.`);
}

 
