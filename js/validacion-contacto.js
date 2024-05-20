document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form.contacto').addEventListener('submit', function (e) {
        e.preventDefault(); 

        var nombre = document.getElementById('nomcontacto').value.trim();
        var apellido = document.getElementById('subnominput').value.trim();
        var email = document.getElementById('emailinput').value.trim();
        var telefono = document.getElementById('numberinput').value.trim();
        var consulta = document.getElementById('consulta').value.trim();
        var select = document.getElementById('select1').value.trim();

        if (nombre === '') {
            document.getElementById('error-nombre').style.display = 'block';
        } else {
            document.getElementById('error-nombre').style.display = 'none';
        }

        if (apellido === '') {
            document.getElementById('error-apellido').style.display = 'block';
        } else {
            document.getElementById('error-apellido').style.display = 'none';
        }

        if (email === '') {
            document.getElementById('error-email').style.display = 'block';
        } else {
            document.getElementById('error-email').style.display = 'none';
        }

        if (telefono === '') {
            document.getElementById('error-telefono').style.display = 'block';
        } else {
            document.getElementById('error-telefono').style.display = 'none';
        }

        if (select === '') {
            document.getElementById('error-select').style.display = 'block';
        } else {
            document.getElementById('error-select').style.display = 'none';
        }

        if (consulta === '') {
            document.getElementById('error-consulta').style.display = 'block';
        } else {
            document.getElementById('error-consulta').style.display = 'none';
        }

        if (nombre !== '' && apellido !== '' && email !== '' && telefono !== '' && consulta !== '' && select !== '') {
            const modal = document.getElementById('myModal');
            modal.style.display = 'flex';
            modal.style.justifyContent = 'center';
            modal.style.alignItems = 'center';
            modal.style.width = '25%';
            modal.style.marginLeft = '40%';
        }
    });


    var campos = ['nomcontacto', 'subnominput', 'emailinput', 'numberinput', 'select1', 'consulta'];

    campos.forEach(function (campoId) {
        var campo = document.getElementById(campoId);
        var errorId = 'error-' + campoId;

        campo.addEventListener('change', function () {
            if (campo.value.trim() !== '') {
                document.getElementById(errorId).style.display = 'none';
            }
        });
    });

    document.getElementById('modalButton').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});