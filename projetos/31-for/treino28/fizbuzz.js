
let i = 1;

while( i <= 100){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('fizbuz')
    }else if( i % 3 === 0){
        console.log('fiz')
    }else if(i % 5 === 0){
        console.log('fizbuz')
    }else{
        console.log(i)
    }
    i++;
}


