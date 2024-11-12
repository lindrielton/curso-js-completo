function Discoberta(dado){
 if(typeof dado === "number"){
    console.log('seu tipo de dado é um numero')
 }else if(typeof dado === "string"){
    console.log('seu dado é do tipo string')
 }else if(typeof dado === "boolean"){
    console.log('seu tipo de dado é do tipo boleano')
 }
}

console.log(Discoberta(false))