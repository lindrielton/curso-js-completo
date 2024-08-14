/* imc de um apessoa.*/


function calcularPeso(altura, peso){

    let imc = peso/(altura*altura)
    
if(imc >= 18.5  && imc < 25){
    console.log("vc está com o peso regular.")
}else if(imc >= 25 && imc < 30){
    console.log("sobrepeso")
}else  if (imc < 18.5){
    console.log("vc está abaixo do peso.")
}else{
    console.log("obesidade")
}
}


calcularPeso(1.70, 80)