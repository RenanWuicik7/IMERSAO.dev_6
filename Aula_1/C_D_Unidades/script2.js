alert("Bem vinde ao meu segundo desafio da 6° edição da IMERSÃO.dev");
var nome = prompt("Qual é o seu nome ?");
alert("Olá " + nome + " esse é um conversor de unidades, após essa mensagem você terá algumas instruções de como usar esse projeto"
);
alert(
  "Para converter Anos-Luz e Km digite 1, para converter Fahrenheit, Kelvin ou Celsius digite 2"
);

var perguntaTipoUnidade = prompt("Qual caminho deseja seguir? 1 ou 2 ?");

function conversaoFinal() {
  if (perguntaTipoUnidade == "1") {
    var perguntaQualKmAnoluz = prompt(
      "Para converter Ano-Luz em Km digite 1, para converter Km em Ano-Luz digite 2"
    );
    if (perguntaQualKmAnoluz == "1") {
      var quantosAnos = prompt("Quantos Ano-Luz deseja transformar em Km ?");
      var anoLuzEmKm = 9461000000000;
      return (anoLuzEmKm * quantosAnos).toFixed(5);
    } else {
      var quantosKm = prompt("Quantos Quilometros deseja transformar em Ano-Luz ?");
      return (9461000000000 / quantosKm).toFixed(5);
    }
  } else if (perguntaTipoUnidade == "2") {
    var perguntaFhKeCe = prompt(
      "Digite o numero da conversão queira fazer: Fahrenheit -> Kelvin: 1, Fahrenheit -> Celsius: 2, Kelvin  -> Fahrenheit: 3, Kelvin -> Celsius: 4, Celsius -> Fahrenheit: 5, Celsius -> Kelvin: 6"
    );
    if (perguntaFhKeCe == "1") {
      var quantosFhEmKelvin = prompt(
        "Quantos Fahrenheit você quer trasformar em Kelvin ?"
      );
      return ((quantosFhEmKelvin - 32) * 5 / 9 + 273.15).toFixed(5);
    } else if (perguntaFhKeCe == "2") {
      var quantosFhEmCelsius = prompt(
        "Quantos Fahrenheit você quer trasformar em Celsius ?"
      );
      return ((quantosFhEmCelsius - 32) * 5 / 9).toFixed(5);
    } else if (perguntaFhKeCe == "3") {
      var quantosKvEmFahrenheit = prompt(
        "Quantos Kelvin você deseja transformar em Fahrenheit ?"
      );
      return ((quantosKvEmFahrenheit - 273.15) * 9 / 5 + 32).toFixed(5);
    } else if(perguntaFhKeCe == "4") {
      var quantosKvEmCelsius = prompt("Quantos Kelvin você quer transformar em Celsius ?");
      return (quantosKvEmCelsius - 273.15).toFixed(5);
    } else if(perguntaFhKeCe == "5") {
      var quantosClEmFahrenheit = prompt("Quantos Celsius você deseja transformar em Fahrenheit ?");
      return ((quantosClEmFahrenheit * 9/5) + 32).toFixed(5);
    } else if(perguntaFhKeCe == "6") {
      var quantosClEmKelvin = parseInt(prompt("Quantos Celsius você deseja transformar em Kelvin ?"));
      return (quantosClEmKelvin + 273.15);
    }
  }
}

document.getElementById("result").innerText = nome + " o valor final convertido é " + conversaoFinal();
