const arrray =  [ 1,2,3,4,5,6,7,8];

const cont = arrray.filter((num) => {
    if(num == 8){
        console.log(num + ' numero igual ');
    }else{
        console.log(`${num}`)
    }
});



const user = [
    {name:"matheus", avalible: false} , 
    {name:"lucas", avalible: true},
    {name:"joaõ", avalible: false},
    {name:"marcos", avalible: true},

]


const verifiquer = user.filter((list) => list.avalible );
console.log(verifiquer);

const verificafalse = user.filter((lista) => !lista.avalible);
console.log(verificafalse);