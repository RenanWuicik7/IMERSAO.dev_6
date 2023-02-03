var listaAnimes = ["https://imgur.com/DhPIFAC.jpg", "https://imgur.com/u9Scsdv.jpg", "https://imgur.com/FKjhZAO.jpg", "https://imgur.com/4EaKS1E.jpg", "https://imgur.com/CiUbkkT.jpg", "https://imgur.com/I5pe9Vg.jpg", "https://imgur.com/rfqo4ar.jpg", "https://imgur.com/bTGXa2d.jpg", "https://imgur.com/0nPzxen.jpg"];

var nomesAnimes = ["Naruto Shippuden", "Enen no Shouboutai(Fire Force)", "Mairimashita Iruma-Kun", "Tondemo Skill de Isekai Hourou Meshi", "Ao No Exorcist(Blue Exorcist)", "Shaman King", "Fumetsu No Anata(To Your Eternity)", "The God Of High School", "Tower Of God"];

for (i = 0; i < listaAnimes.length; i++) {
  document.write("<div><img src=" + listaAnimes[i] + ">");
  document.write("<p class='nomesDosItens'>" + nomesAnimes[i] + "</p></div>");
}

document.write("<p>Mangás:</p>");

var listaMangas = ["https://imgur.com/Yj4W1Kx.jpg", "https://imgur.com/UL5uqbg.jpg", "https://imgur.com/DFU2LUP.jpg", "https://imgur.com/PpOwpCk.jpg", "https://imgur.com/7CohpOA.jpg", "https://imgur.com/rrCxhlg.jpg", "https://imgur.com/LNoPkPe.jpg", "https://imgur.com/ixH9lXE.jpg", "https://imgur.com/vZf66qt.jpg", "https://imgur.com/1khups9.jpg", "https://imgur.com/S7tMYoK.jpg"];

var nomesMangas = ["Kaiju N° 8", "Solo Leveling", "Leveling With The Gods", "Second Life Ranker", "The World After The End", "Seoul Yeog Deulu Ideu", "Eleceed", "Is This Hero For Real", "The Player That Can't Level Up", "Player", "SSS-Class Revival Hunter"];

for (i = 0; i < listaMangas.length; i++) {
  document.write("<div><img src=" + listaMangas[i] + ">");
  document.write("<p class='nomesDosItens'>" + nomesMangas[i] + "</p></div>");
}

document.write("<p>Filmes:</p>");

var listaFilmes = ["https://imgur.com/hZAHXlI.jpg", "https://imgur.com/wUCQKAZ.jpg", "https://imgur.com/qEIWd5I.jpg", "https://imgur.com/Z5cNJnr.jpg", "https://imgur.com/t9ir0xe.jpg", "https://imgur.com/Gnlc6jS.jpg", "https://imgur.com/JTono35.jpg"];

var nomesFilmes = ["Vingadores: Ultimato", "Os Croods 2: Uma Nova Era", "Aquaman", "Viva: A Vida É Uma Festa", "A Escola Do Bem E Do Mal", "O Segredo De Brokeback Mountain", "Let It Snow"];

for (i = 0; i < listaFilmes.length; i++) {
  document.write("<div><img src=" + listaFilmes[i] + ">");
  document.write("<p class='nomesDosItens'>" + nomesFilmes[i] + "</p></div>");
}

document.write("<p>Séries:</p>");

var listaSeries = ["https://imgur.com/l3GJ7oG.jpg", "https://imgur.com/wDtlP1A.jpg", "https://imgur.com/k5nKRfc.jpg", "https://imgur.com/oqPXbnX.jpg", "https://imgur.com/BVun4qI.jpg", "https://imgur.com/EyhsjHa.jpg", "https://imgur.com/MCJEpFU.jpg"];

var nomesSeries = ["FATE: A Saga Wink", "ShadowHunters: The Mortal Instruments", "Half Bad: The Bastard Son & The Devil Himself", "Alquimia Das Almas", "Stranger Things", "Wednesday(Vandinha)", "Squid Game(Round 6)"];

for (i = 0; i < listaSeries.length; i++) {
  document.write("<div><img src=" + listaSeries[i] + ">");
  document.write("<p class='nomesDosItens'>" + nomesSeries[i] + "</p></div>");
}