//spread operatior 


const a1 = [10,20,30];
const a2 = [30,40,50];



const juncao = [...a1, ...a2];


console.log(juncao);


const carName = {nome:"fiat-unu"}
const carCor = {cor:"braco"}
const carPeso = {peso:400, rodas:17}


const uniCar = {carName, ...carCor, ...carPeso}


console.log(uniCar);

