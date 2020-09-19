var continuar = true;
while (continuar) {
    var letras = ['T', 'R', 'W', 'I', 'U', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'A', 'O'];
    var numero = Number(prompt("Introduce un número del 0 al 25"));

    if (numero < 0 || numero > 25) {
        confirm("El número igresado NO es Válido");


    } else {
        var letra = prompt("Introduce una letra");
        letra = letra.toUpperCase();

        var letraCalculada = letras[numero % 23];

        if (letraCalculada != letra) {

            alert("Lo siento...Perdiste!");

        } else {

            alert("El número y letra ingresados coinciden...GANASTE!");


        }

    }
}