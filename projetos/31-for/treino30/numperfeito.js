for(let num = 1; num <= 100; num++){
    let soma = 0;
    for(let j = 1; j < num; j++){
        if(num % j === 0){
            soma+=j;
        }else if(soma === num){
            console.log(`${num}`)
        }
        
    }
}