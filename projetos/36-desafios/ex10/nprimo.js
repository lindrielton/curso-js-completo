let numero = 41
let primo = 0

for(i = 1; i <= 50; i++){

    if( numero % i == 0){
        primo++;
    }
}

if(primo == 2){
    console.log(`o numero ${numero} é primo`)
}else{
    console.log(`o numero ${numero} não é primo`)
}