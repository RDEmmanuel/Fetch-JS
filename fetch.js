const tabla = document.querySelector('#tabla-usuarios');

function cargarUsuarios() {
    fetch('archivo.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la info
        .then(usuarios => {
            usuarios.forEach(user => {
                const row = document.createElement('tr')
                row.innerHTML += `
                    <td>${user.nombre}</td>
                    <td>${user.apellido}</td>
                    <td>${user.edad}</td>
                    <td>${user.correo}</td>
                `
                tabla.appendChild(row)
            });
        }) //Aqui mostramos la informacion
}

cargarUsuarios();