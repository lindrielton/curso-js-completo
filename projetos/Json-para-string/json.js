
let dson = {
    "nome" : "elton",
    "idade" : 25,
    "sexo" : "masculino",
    "develuper" : "aprendendo",
    "hobbies" : ["estudar", "jogar-futebol", "aprender-contra-baixo"]
}


let CriandoString = JSON.stringify(dson);

console.log(CriandoString);

let RetornandoArray = JSON.parse(CriandoString);

console.log(RetornandoArray);
console.log(dson.hobbies[2]);