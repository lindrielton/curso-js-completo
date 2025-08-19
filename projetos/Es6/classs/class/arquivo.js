class jogador{
    constructor(nome,idade,funcao){
        this.nome = nome,
        this.idade = idade,
        this.funcao = funcao
        
    }

    jogar(){
        console.log(`a bola está com ${this.nome} ele chuta é e golll`)
    }

    entrevista(){
        console.log(`meu nome é ${this.nome}, tenho ${this.idade}, é jodo de ${this.funcao}!`)
    }
}



let nJogador = new jogador("messi", 35, "meio-campo");

nJogador.jogar();
nJogador.entrevista();


class novoJogaor extends jogador{
    constructor(nome,idade,velocidade, chuteira){
        super(nome, idade)
        this.velocidade = velocidade
        this.chuteira = chuteira

    }

    veloz(){
        console.log(`${this.nome} corre á 45km por hora`)
    }

    calculo(hora){
            return ( 'você percorreu ,' + this.velocidade*hora + ', km')

    }

    chut(){
        this.chuteira.forEach(cor => {
            console.log('chuteira escolhida, ' + cor)
        });
    }
}




let jogador2 = new novoJogaor('cristiano', 40, 45, ['vermelha' , 'branca', 'preta'])

jogador2.jogar();
console.log(jogador2.calculo(10));
jogador2.veloz();
jogador2.chut();