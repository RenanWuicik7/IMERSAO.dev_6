alert("Bem vinde ao meu terceiro desafio da 6° edição da IMERSÃO.dev");
var nome = prompt("Qual é o seu nome ?");
alert("Olá " + nome + " esse é um conversor de Reais(R$) e Bitcoin´s(₿)! Após essa mensagem você terá algumas instruções de como usar esse projeto"
);

var qualtipo = prompt("Para converter Bitcoin(₿) em Reais(R$) digite 1 e para converter Reais(R$) em Bitcoin(₿) digite 2:");

function conversaoFinal() {
  if(qualtipo == "1") {
  var quantosBit = prompt("Quantos Bitcoin´s que você quer converter em reais ?");
  var cotacaoDoBitcoin = 116647.97;
  return (quantosBit * cotacaoDoBitcoin).toFixed(2);
  } else if(qualtipo == "2") {
    var quantosreais = prompt("Quantos Reais você deseja converter em Bitcoin ?");
    var cotaçãoDoReal = 0.0000085;
    return (cotaçãoDoReal * quantosreais).toFixed(5);
  }
}

function respostaFinal() {
  if(qualtipo == "1") {
    return "em Bitcoin para reais"
  } else if(qualtipo == "2") {
    return "em Reais para Bitcoin";
  }
}

function simboloFinal() {
  if(qualtipo == "1") {
    return "R$ ";
  } else if(qualtipo == "2") {
    return "₿ ";
  }
}

document.getElementById("result").innerText = nome + " a quantidade " + respostaFinal() +" que essa conversão fez foi de " + simboloFinal() + conversaoFinal();
