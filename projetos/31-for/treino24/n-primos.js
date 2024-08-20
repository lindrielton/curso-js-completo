for(let num = 2; num <=100; num++){
    let ispriome = true;
    for(let div = 2 ; div < num; div++){
        if(num % div == 0){
            ispriome = false;
            break;
        }
    }
    if(ispriome){
        console.log(num);
    }
}