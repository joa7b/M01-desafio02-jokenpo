const prompt = require('prompt-sync')();
console.clear()

//Introdução
console.log('JOGO JOKENPO!')
prompt('Pressione ENTER para começar.')


//Variável que nos permite sair da aplicação
let resposta = 'sim'

//Corpo do jogo
while (resposta == 'sim') {
    console.clear()

    //Coletando o número de rodadas
    let rodadas = +prompt('Quantas rodadas você quer jogar? ');

    //Armazena a pontuação
    let pontosJogador = 0;
    let pontosMaquina = 0;

    //Jogo
    for (let i = 0; i<rodadas; i++) {
        let jogadaMaquina = Math.floor(Math.random() * 3+1);
        console.log(`Rodada ${i+1}`);

        let jogadaJogador = +prompt('Escolha um número [1]PEDRA  [2]PAPEL  [3]TESOURA: ');

        if (jogadaJogador == 1) {
            console.log('Jogador: Pedra.');
        }else if (jogadaJogador == 2) {
            console.log('Jogador: Papel.');
        }else if (jogadaJogador == 3) {
            console.log('Jogador: Tesoura.');
        }else {
            console.log('Resposta inválida.');
        }

        if (jogadaMaquina == 1) {
            console.log('Máquina: Pedra.');
        }else if (jogadaMaquina == 2) {
            console.log('Máquina: Papel.');
        }else {
            console.log('Máquina: Tesoura.');
        }

        console.log();


        if (jogadaJogador == 1 && jogadaMaquina == 1) {
            console.log("EMPATE")
          } else if (jogadaJogador == 1 && jogadaMaquina == 2) {
            console.log("PERDEU")
            pontosMaquina++
          } else if (jogadaJogador == 1 && jogadaMaquina == 3) {
            console.log("GANHOU")
            pontosJogador++
          } else if (jogadaJogador == 2 && jogadaMaquina == 1) {
            console.log("GANHOU")
            pontosJogador++
          } else if (jogadaJogador == 2 && jogadaMaquina == 2) {
            console.log("EMPATE")
          } else if (jogadaJogador == 2 && jogadaMaquina == 3) {
            console.log("PERDEU")
            pontosMaquina++
          } else if (jogadaJogador == 3 && jogadaMaquina == 1) {
            console.log("PERDEU")
            pontosMaquina++
          } else if (jogadaJogador == 3 && jogadaMaquina == 2) {
            console.log("GANHOU")
            pontosJogador++
          } else if (jogadaJogador == 3 && jogadaMaquina == 3) {
            console.log("EMPATE")
          }

        
    }

    //Exibindo os resultados
    console.log();
    prompt('Pressione ENTER para ver os resultados.')
    console.clear()

    console.log(`Pontuação Máquina: ${pontosMaquina}.`);
    console.log(`Pontuação Jogador: ${pontosJogador}.`);
    console.log();
        
    if (pontosJogador>pontosMaquina) {
        console.log('O jogador ganhou a partida!');
    }else if (pontosJogador<pontosMaquina) {
        console.log('A máquina ganhou a partida!');
    }else {
        console.log('Deu EMPATE!');
    }

    //Caso o usuário não queira continuar a variável resposta será alterada.
    console.log('Deseja continuar? Digite SIM ou NAO. ');
    resposta = prompt(''.toLowerCase);
    
}