function genera_rfc() {
    var nombre = document.getElementById("nombre").value.toUpperCase();
    var ap = document.getElementById("ap").value.toUpperCase();
    var am = document.getElementById("am").value.toUpperCase();
    var anio = document.getElementById("anio").value.slice(-2);
    var mes = document.getElementById("mes").value.padStart(2, '0');
    var dia = document.getElementById("dia").value.padStart(2, '0');
    var rfc = ap.slice(0, 2) + am.slice(0, 1) + nombre.slice(0, 1) + anio + mes + dia;
    document.getElementById("resultado").value = rfc;
}
