let original = 'Hello'

let invertida = '';
let i = original.length - 1;
while (i >= 0){
    invertida += original[i];
    i--;
}

console.log(`a estring "${original}" invertida é "${invertida}"`);
