function calculateAverage(array){
    
    let media = (array[0] + array[1] + array[2]) / array.length;
    console.log(`sua media é `, + Math.ceil(media) )
    
    
}

calculateAverage(array = [10,9,8])

// reverter estring

function reverseString(nome){
    
   return nome .split("").reverse().join("");
}

console.log(reverseString('lindrielton'))