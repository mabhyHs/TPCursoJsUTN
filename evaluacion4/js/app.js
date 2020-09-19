var colorFondo = document.body.style.backgroundColor = '#fcf79f';

var fuenteDestacada = document.getElementById("destacado");
fuenteDestacada.style.fontSize = '24px';


var colorParrafo = document.getElementsByTagName("p");
var fuenteTitulos = document.getElementsByTagName("H2");
var i;

for (i = 0; i < colorParrafo.length; i++) {
    colorParrafo[i].style.color = "#0ca001";
}

for (i = 0; i < fuenteTitulos.length; i++) {
    fuenteTitulos[i].style.fontFamily = "Arial";
}

var enlace = document.createElement("A");
enlace.id = "enlace_1";
enlace.innerHTML = "Click Aquí!";
enlace.href = "https://www.lipsum.com";
enlace.target = "blank";
document.body.appendChild(enlace);