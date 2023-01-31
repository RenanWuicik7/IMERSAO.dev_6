alert("Bem Vinde ao meu primeiro desafio da 6° edição da IMERSÃO.dev");
var nome = prompt("Qual é o seu nome ?");
alert(
  "Olá " +
    nome +
    " esse é um conversor de moedas após essa mensagem você terá algumas instruções de como usar esse projeto"
);
alert(
  "Digite 1 para converter Dólar(US$), 2 para Euro(Є), 3 para Libra Esterlina(£) e 4 para Iene(¥)."
);

var perguntaTipoMoeda = prompt("Qual o tipo de moeda deseja usar:");
var quantidadeDeMoedas = prompt("Quantas moedas deseja calcular ?");

function conversaofinal() {
  if (perguntaTipoMoeda == "1") {
    var cotacaoDoDolar = 5.11;
    return (cotacaoDoDolar * quantidadeDeMoedas).toFixed(2);
  } else if (perguntaTipoMoeda == "2") {
    var cotacaoDoEuro = 5.55;
    return (cotacaoDoEuro * quantidadeDeMoedas).toFixed(2);
  } else if (perguntaTipoMoeda == "3") {
    var cotacaoDaLibraEsterlina = 6.32;
    return (cotacaoDaLibraEsterlina * quantidadeDeMoedas).toFixed(2);
  } else if (perguntaTipoMoeda == "4") {
    var cotacaoDoIene = 0.039;
    return (cotacaoDoIene * quantidadeDeMoedas).toFixed(2);
  }
}

function simboloDemoeda() {
  if (perguntaTipoMoeda == "1") {
    return "US$ ";
  } else if (perguntaTipoMoeda == "2") {
    return "Є ";
  } else if (perguntaTipoMoeda == "3") {
    return "£ ";
  } else if (perguntaTipoMoeda == "4") {
    return "¥ ";
  }
}

function tipoDaMoeda() {
  if (perguntaTipoMoeda == "1") {
    return " Doláres";
  } else if (perguntaTipoMoeda == "2") {
    return " Euros";
  } else if (perguntaTipoMoeda == "3") {
    return " Libras Esterlinas";
  } else if (perguntaTipoMoeda == "4") {
    return " Ienes";
  }
}

document.getElementById("result").innerText =
  nome +
  " o valor de " +
  simboloDemoeda() +
  quantidadeDeMoedas +
  tipoDaMoeda() +
  " convertido em reais é R$ " +
  conversaofinal();
