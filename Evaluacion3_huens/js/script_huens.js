alert("Ingrese 2 números para realizar algunas operaciones arítmeticas");


var num1 = Number(prompt("Ingrese el primer Número: "));
var num2 = Number(prompt("Ingrese el segundo Número: "));

var suma = num1 + num2;
var resta = num1 - num2;
var multiplicacion = num1 * num2;
var division = num1 / num2;


document.write("<h2>Operaciones Aritméticas: </h2>" + "<p>" + "El resultado de tu suma es: " + suma + "<br>" + "El resultado de tu resta es: " + resta + "<br>" + "El resultado de tu multiplicación es: " + multiplicacion + "<br>" + "El resultado de tu división es: " + division + "</p>");

var peliculasFavoritas = ['Queen', 'V de Vendetta', 'Star Wars', 'El Señor de los Anillos', 'Harry Potter'];
peliculasFavoritas.sort();

for (var i = 0; i < 5; i++) {
    alert(peliculasFavoritas[i]);
}