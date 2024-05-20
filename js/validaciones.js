document.getElementById('formularioCompra').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const direccion = document.getElementById('direccion').value.trim();

    const errorNombre = document.getElementById('errorNombre');
    const errorCorreo = document.getElementById('errorCorreo');
    const errorDireccion = document.getElementById('errorDireccion');

    let isValid = true;

    if (nombre === '') {
        errorNombre.textContent = '* El campo "nombre" es obligatorio.';
        isValid = false;
    } else {
        errorNombre.textContent = '';
    }

    if (correo === '') {
        errorCorreo.textContent = '* El campo "correo electrónico" es obligatorio.';
        isValid = false;
    } else {
        errorCorreo.textContent = '';
    }

    if (direccion === '') {
        errorDireccion.textContent = '* El campo "dirección de envío" es obligatorio.';
        isValid = false;
    } else {
        errorDireccion.textContent = '';
    }

    if (isValid) {
        const modal = document.getElementById('myModal');
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.width = '25%';
        modal.style.marginLeft = '40%';
        document.getElementById('modalButton').addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
});