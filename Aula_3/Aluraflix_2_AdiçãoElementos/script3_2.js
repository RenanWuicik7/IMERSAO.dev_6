function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  var elementosListaFilmes = document.getElementById("listaFilmes");
  elementosListaFilmes.innerHTML += "<img src=" + filmeFavorito + ">";
  document.getElementById("filme").value = "";
}

var listaAnimes = ["https://imgur.com/DhPIFAC.jpg", "https://imgur.com/u9Scsdv.jpg", "https://imgur.com/FKjhZAO.jpg", "https://imgur.com/4EaKS1E.jpg", "https://imgur.com/CiUbkkT.jpg"];

var nomesAnimes = ["Naruto Shippuden", "Enen no Shouboutai(Fire Force)", "Mairimashita Iruma-Kun", "Tondemo Skill de Isekai Hourou Meshi", "Ao No Exorcist(Blue Exorcist)"];

for (i = 0; i < listaAnimes.length; i++) {
  document.write("<img src=" + listaAnimes[i] + ">");
  document.write("<p class='nomeDosItems'>" + nomesAnimes[i] + "</p>");
}