(function () {
    var formulario = document.getElementsByName('formquejas')[0],
        elementos = formulario.elements,
        boton = document.getElementById('btnquejas');

    var validarNombre = function (e) {
        if (formulario.nquejas.value == 0) {
            alert("Completa tu nombre");
            e.preventDefault();
        }
    }
    var validarNpedido = function (e) {
        if (formulario.npedido.value == 0) {
            alert('Completa n° de pedido');
            e.preventDefault();
        }
    }
    var validarEmail = function (e) {
        if (formulario.correo.value == 0) {
            alert('Completa tu Email');
            e.preventDefault();
        }
    }
    var validar = function (e) {
        validarNombre(e);
        validarNpedido(e);
        validarEmail(e);
    };
    formulario.addEventListener("submit", validar);
}())



