// ano bissexto

function anoBicesto(ano){
    if ((ano % 4 == 0 && ano % 100 !=0 ) || (ano % 400 == 0 )){
        console.log("esse ano é bi")
    }else{
        console.log("esse ano não é bi")
    }
}

anoBicesto(2000)