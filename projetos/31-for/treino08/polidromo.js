function verificar(nome){

    let  palavraInvert = nome.split("").reverse().join("");
     if(nome == palavraInvert){
        console.log("palavra é um palidromo")
     }else{
        console.log("não é")
     }
}

verificar("arara")