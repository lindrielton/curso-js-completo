function lembraSoma(x){
    return function(y){
        return x + y;
    }

}

soma1 = lembraSoma(2)

console.log(soma1(10))

soma2 = lembraSoma(10)
console.log(soma2(50))


// outro exemplo



function contador(i){
    let cont = i;
   let  somaContador = function(){  // função anonima
        console.log(i)
        i++
    }
    return somaContador;
}
 let conta = contador(5)
   conta()
   conta()
   conta()
   conta()

let conta2 = contador(1)
conta2()
conta2()
conta2()