//function idade (idade){
   
  //  console.log(`você tem essa idade ${idade}`)

//}


//idade(25);
//idade(30);
function ispalidrome(letra){
    let nome = letra .split('').reverse().join('');
    if(nome == letra){
       return true;
    }else{
        return false;
    }
} 

console.log(ispalidrome('vaav'))


