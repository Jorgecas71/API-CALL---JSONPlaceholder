
async function obtenerDatos() {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
    const datos = await respuesta.json();
    return datos;
}

async function crearTabla() {
    const datos = await obtenerDatos();
    let tabla = '<table><tr><th>ID</th><th>Nombre</th><th>Ciudad</th></tr>';
    datos.forEach(usuario => {
        tabla += `<tr><td>${usuario.id}</td><td>${usuario.name}</td><td>${usuario.address.city}</td></tr>`;
    });
    tabla += '</table>';
    document.body.innerHTML = tabla;
}

const input = document.createElement('input');
input.id = 'idInput';
document.body.appendChild(input);

const boton = document.createElement('button');
boton.innerText = 'Buscar por ID';
document.body.appendChild(boton);


boton.addEventListener('click', async () => {
    const id = document.getElementById('idInput').value;
    const datos = await obtenerDatos();
    const usuario = datos.find(usuario => usuario.id === Number(id));
    if (usuario) {
        alert(`Nombre: ${usuario.name}, Teléfono: ${usuario.phone}`);
    } else {
        alert('No se encontró ningún usuario con ese ID');
    }
});

crearTabla();
