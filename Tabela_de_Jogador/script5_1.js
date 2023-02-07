var usuarioNovo = prompt("Olá Novo Usuário! Por favor digite como podemos te chamar:");
var instrucoes = alert("Olá " + usuarioNovo + " agradecemos por usar nossos serviços! Para começar os seus status serão zerados, para usar o placar você pode adicionar um jogador e depois personalizar o placar como quiser.");

var statusDoUsuario = [{
  nome: usuarioNovo,
  nivel: 1, 
  hp: 0,
  mp: 0,
  stm: 0,
  def: 0,
  totalPower: 0
}];

function adicionarJogador(){
  var nomeNovoJogador = prompt("Adicione o nome do novo jogador:");
  var novoJogador = {
  nome: nomeNovoJogador,
  nivel: 1, 
  hp: 0,
  mp: 0,
  stm: 0,
  def: 0,
  totalPower: 0
  }
  statusDoUsuario.push(novoJogador);
  exibirNaTela();
}

  
var elementoTabela = document.getElementById("tabelaJogadores");

exibirNaTela();

function exibirNaTela() {
  var resultado = '';
  for (var i = 0; i < statusDoUsuario.length; i++) {
    resultado += `
      <tr>
         <td>${statusDoUsuario[i].nome}</td>
         <td>${statusDoUsuario[i].nivel}</td>
         <td>${statusDoUsuario[i].hp}</td>
         <td>${statusDoUsuario[i].mp}</td>
         <td>${statusDoUsuario[i].stm}</td>
         <td>${statusDoUsuario[i].def}</td>
         <td>${statusDoUsuario[i].totalPower}</td>
         <td><button onClick="hitPoint(${i})">+/- HP</button></td>
         <td><button onClick="magicPoint(${i})">+/- MP</button></td>
         <td><button onClick="stamina(${i})">+/- STM</button></td>
         <td><button onClick="defense(${i})">+/- DEF</button></td>
        </tr>
  `;
  }
  elementoTabela.innerHTML = resultado;
}

function hitPoint(jogador) {
  console.log("oi")
  var pergunta = prompt("HP: Você quer tirar ou adicionar pontos ? Digite 1 para adicionar e 2 para tirar:");
  if(pergunta == "1") {
    var add = parseInt(prompt("Quantos pontos quer colocar ?"));
    statusDoUsuario[jogador].hp += add;
    console.log(statusDoUsuario[jogador])
    calculaPoderTotal(jogador);
    exibirNaTela();
  } else if(pergunta == "2") {
    var remove = parseInt(prompt("Quantos pontos deseja remover ?"));
    statusDoUsuario[jogador].hp -= remove;
    calculaPoderTotal(jogador);
    exibirNaTela();
  } else {
    alert("Desculpe mas o conteúdo digitado não é válido");
  }
}

function magicPoint(jogador) {
 var pergunta2 = prompt("Você quer tirar ou adicionar pontos ? Digite 1 para adicionar e 2 para tirar:");
  if(pergunta2 == "1") {
    var add2 = parseInt(prompt("Quantos pontos quer colocar ?"));
    statusDoUsuario[jogador].mp += add2;
    calculaPoderTotal(jogador);
    exibirNaTela();
  } else if(pergunta2 == "2") {
    var remove2 = parseInt(prompt("Quantos pontos deseja remover ?"));
    statusDoUsuario[jogador].mp -= remove2;
    calculaPoderTotal(jogador);
    exibirNaTela();
  } else {
    alert("Desculpe mas o conteúdo digitado não é válido");
  }
}

function stamina(jogador) {
  var pergunta3 = prompt("Você quer tirar ou adicionar pontos ? Digite 1 para adicionar e 2 para tirar:");
  if(pergunta3 == "1") {
    var add3 = parseInt(prompt("Quantos pontos quer colocar ?"));
    statusDoUsuario[jogador].stm += add3;
    calculaPoderTotal(jogador);
    exibirNaTela();
  } else if(pergunta3 == "2") {
    var remove3 = parseInt(prompt("Quantos pontos deseja remover ?"));
    statusDoUsuario[jogador].stm -= remove3;
    calculaPoderTotal(jogador);
    exibirNaTela();
  } else {
    alert("Desculpe mas o conteúdo digitado não é válido");
  }
}

function defense(jogador) {
  var pergunta4 = prompt("Você quer tirar ou adicionar pontos ? Digite 1 para adicionar e 2 para tirar:");
  if(pergunta4 == "1") {
    var add4 = parseInt(prompt("Quantos pontos quer colocar ?"));
    statusDoUsuario[jogador].def += add4;
    calculaPoderTotal(jogador);
    exibirNaTela();
  } else if(pergunta4 == "2") {
    var remove4 = parseInt(prompt("Quantos pontos deseja remover ?"));
    statusDoUsuario[jogador].def -= remove4;
    calculaPoderTotal(jogador);
    exibirNaTela();
  } else {
    alert("Desculpe mas o conteúdo digitado não é válido");
  }
}

function calculaPoderTotal(jogador) {
  var pontos = statusDoUsuario[jogador].hp + statusDoUsuario[jogador].mp + statusDoUsuario[jogador].stm + statusDoUsuario[jogador].def;
  statusDoUsuario[jogador].totalPower = pontos;
}

function subirDeNivel() {
  for (var i = 0; i < statusDoUsuario.length; i++) {
    statusDoUsuario[i].nivel += 1;
  }
  exibirNaTela();
}

function zerarTudo() {
  for (var i = 0; i < statusDoUsuario.length; i++) {
    statusDoUsuario[i].hp = 0;
    statusDoUsuario[i].nivel = 1;
    statusDoUsuario[i].mp = 0;
    statusDoUsuario[i].stm = 0;
    statusDoUsuario[i].def = 0;
    statusDoUsuario[i].totalPower = 0;
  }
  exibirNaTela();
}