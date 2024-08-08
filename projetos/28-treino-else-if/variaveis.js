
let nome = 'elton'
let idade = 17
let cor = 'branco'
let local = 'cidade'


if (nome != undefined && idade >= 18 && cor.length == 5  && local == 'sitio'){
    console.log('vc passou no cadastro!')
}else if( nome == 'matheus' && idade == 18 ){
    console.log('matheus, vc já esta cadastrado!')
}else if(nome == 'elton' && idade < 18 && cor == 'branco'){
    console.log('infelismente vc não conseguiu entrar na vaga!')
}
