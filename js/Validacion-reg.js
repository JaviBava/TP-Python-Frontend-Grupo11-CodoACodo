document.getElementById('formularioreg').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nomreg').value.trim();
    const apellido = document.getElementById('subnom').value.trim();
    const correo = document.getElementById('correoreg').value.trim();
    const contraseña = document.getElementById('passwordreg').value.trim();

    const errorNombre = document.getElementById('errorNombre');
    const errorApellido = document.getElementById('errorApellido');
    const errorCorreo = document.getElementById('errorCorreo');
    const errorContraseña = document.getElementById('errorContraseña');

    let isValid = true;

    if (nombre === '') {
        errorNombre.textContent = '* El campo "nombre" es obligatorio.';
        isValid = false;
    } else {
        errorNombre.textContent = '';
    }

    if (apellido === '') {
        errorApellido.textContent = '* El campo "apellido" es obligatorio.';
        isValid = false;
    } else {
        errorApellido.textContent = '';
    }

    if (correo === '') {
        errorCorreo.textContent = '* El campo "correo electrónico" es obligatorio.';
        isValid = false;
    } else {
        errorCorreo.textContent = '';
    }

    if (contraseña === '') {
        errorContraseña.textContent = '* El campo "contraseña" es obligatorio.';
        isValid = false;
    } else {
        errorContraseña.textContent = '';
    }

    if (isValid) {
        const popup = document.getElementById('popup');
        popup.style.display = 'block';
        popup.style.justifyContent = 'center';
        popup.style.alignItems = 'center';
        document.getElementById('botonpopup').addEventListener('click', function () {
            window.location.href = 'index.html';
        });
    }
});

var nomreg1 = document.getElementById("nomreg");
var input_submit = document.getElementById("btnregistrar");
input_submit.addEventListener("click", enviarform);
function enviarform(event) {
    var show_nom = nomreg1.value;
    var remnom1 = document.getElementById("remnom");
    remnom1.innerHTML = show_nom;
}
