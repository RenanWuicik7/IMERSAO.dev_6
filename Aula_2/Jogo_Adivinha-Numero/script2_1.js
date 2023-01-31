alert("Bem vinde ao meu desafio da Segunda aula da 6° edição da IMERSÃO.dev");
var nome = prompt("Qual é o seu nome ?");
var numeroLimite = parseInt(prompt(nome + " digite um número que será sorteado entre 0 e esse número:"));

function sorteia() {
  var numeroSorteado = Math.round(numeroLimite * Math.random());
  return numeroSorteado;
}

var tentativas = 3;

document.getElementById("result").innerText = nome + " o número sorteado estará entre 0 e " + numeroLimite;

function tiposTentativas() {
  if(numeroLimite <= 10) {
    return tentativas = 5;
  } else if (numeroLimite >= 10 && numeroLimite <= 50) {
    return tentativas = 10;
  } else if (numeroLimite >= 50 && numeroLimite <= 100) {
    return tentativas = 20;
  } else if (numeroLimite >= 100 && numeroLimite <= 1000) {
    return tentativas = 30;
  } else if (numeroLimite >= 1000) {
    return tentativas = 45;
  }
}

var chute = parseInt(prompt(nome + " digite seu chute de 0 a " + numeroLimite + ". Você tem " + tiposTentativas() + " tentativas"));

while(chute != sorteia()) {
  if(chute == sorteia()) {
    document.getElementById("result2").innerText = nome + " MEUS PARÁBENS!!! Você Acertou!"; 
    break;
  } else if (chute > sorteia()) {
    tentativas--;
    chute = parseInt(prompt(nome + " infelismente você errou! O numero sorteado é menor! Agora você tem " + tentativas + " tentativas. Tente novamente:"));
  } else if(chute < sorteia()) {
    tentativas--;
    chute = parseInt(prompt(nome + " infelismente você errou! O numero sorteado era maior! Agora você tem " + tentativas + " tentativas. Tente novamente:"));
   }
  if(tentativas == 1 && chute > sorteia()) {
    chute = parseInt(prompt(nome + " infelismente você errou! O numero sorteado é menor! Pense bem antes de responder essa é a sua ÚLTIMA tentativa. Tente novamente:"));
    tentativas--;
  }
  if(tentativas == 1 && chute < sorteia()) {
    chute = parseInt(prompt(nome + " infelismente você errou! O numero sorteado era maior! Pense bem antes de responder essa é a sua ÚLTIMA tentativa. Tente novamente:"));
    tentativas--;
  }
  if(tentativas == 0) {
    document.getElementById("result2").innerText = nome + " Infelizmente você perdeu! Acabou o seu numero de tentativas, recarregue a página e tente novamente, boa sorte na próxima ;)";
    break;
   }
 }