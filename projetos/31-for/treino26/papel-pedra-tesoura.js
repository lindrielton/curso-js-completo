let escolhaUsuario = "papel";
let escolhaComputador;
let resultado;
do{
    let aleatorio = Math.floor(Math.random() * 3);
    switch(aleatorio){
        case 0:
        escolhaComputador = "pedra"
        break
        case 1:
        escolhaComputador = "papel"
        break
        default:
        escolhaComputador = "tesoura"
    }
    
    if(escolhaUsuario === "pedra" || escolhaComputador === "tesoura" || escolhaUsuario === "papel" || escolhaComputador === "pedra" || escolhaUsuario === "tesoura" || escolhaComputador === "papel"){
        resultado = "Usuário ganhou!"
       
    }
    else if(escolhaUsuario === escolhaComputador){
        resultado = "Empate!"
        
    }
    else{
        resultado = "computador ganhou!"

    }

    console.log(resultado)
}while(resultado === "empate!")