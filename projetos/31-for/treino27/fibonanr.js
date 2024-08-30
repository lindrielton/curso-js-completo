
let numero1 = 0;
let numero2 = 1;
console.log(numero1);
console.log(numero2);



for(let i = 2; i < 10; i++){
    let nexnum = numero1 + numero2;
    console.log(nexnum);
    numero1 = numero2;
    numero2 = nexnum;
  
}