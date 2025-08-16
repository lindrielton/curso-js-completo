let soma = (a,b) => {
    return a + b;
}



console.log(soma(2,5));



let mult = (x,y) => x * y;

console.log(mult(2,4));



let msn = (nome) => {
     if(nome){
           console.log(`olá ${nome}`)
     }else{
        return  "olá" ;
     }
}


console.log(msn("lucas"));
console.log(msn());



const user = {
    nome: "theo",
    sayusernameArrow(){
       setTimeout(() => { // fooi passado uma arrow function
            console.log('username' + this.nome)
       },700);
    },


}

user.sayusernameArrow();