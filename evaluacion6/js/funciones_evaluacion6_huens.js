function calculoIva() {
    var monto = document.getElementById('Monto').value;
    if (isNaN(monto)) {
        alert("Introduce un numero, por favor");
        document.getElementById('Monto').value = "";
    } else {
        var iva = parseFloat(monto) * 0.21;
        var total = parseFloat(monto) + parseFloat(iva);
        document.getElementById("Iva").value = iva;
        document.getElementById("Total").value = total;
    }
};


function limpiar() {
    document.getElementById("Monto").value = "";
    document.getElementById("Iva").value = "";
    document.getElementById("Total").value = "";
}