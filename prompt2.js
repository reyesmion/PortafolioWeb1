function mostrarTabla() {
    var num = prompt('Ingresa un número (1-10)', '');
    num = parseInt(num);

    // Validar si el número ingresado está dentro del rango permitido (1-10)
    if (num >= 1 && num <= 10) {
        var tablaHtml = '<h2>Tabla de multiplicar del ' + num + '</h2><ul>';
        for (var x = 1; x <= 10; x++) {
            var producto = num * x;
            tablaHtml += '<li>' + num + ' x ' + x + ' = ' + producto + '</li>';
        }
        tablaHtml += '</ul>';

        // Mostrar la tabla en el contenedor
        document.getElementById('tabla-container').innerHTML = tablaHtml;
    } else {
        alert('Por favor ingresa un número válido entre 1 y 10.');
    }
}
