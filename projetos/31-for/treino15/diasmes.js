function dias(mes){

    switch (mes){
      case 2:
        console.log('tem 28 ou 29 dias, dependendo do ano')
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        console.log('tem 30 dias')
        break;
      default:
        console.log('31 dias')



    }

}

dias(2)