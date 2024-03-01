document.addEventListener('DOMContentLoaded', function () {
    fetch('data/clientes.json')
        .then(response => response.json())
        .then(data => {
            mostrarDatosClientes(data['2021'], 'cuerpoTabla2021');
            mostrarDatosClientes(data['2022'], 'cuerpoTabla2022');
        })
        .catch(error => console.error('Error:', error));
});

function mostrarDatosClientes(data, idTabla) {
    let tabla = document.getElementById(idTabla);

    for (let trimestre in data) {
        let clientes = data[trimestre];
        let filaTrimestre = document.createElement('tr');
        let celdaTrimestre = document.createElement('td');
        celdaTrimestre.textContent = `Trimestre: ${trimestre}`;
        celdaTrimestre.colSpan = 7;
        filaTrimestre.appendChild(celdaTrimestre);
        tabla.appendChild(filaTrimestre);

        for (let cliente of clientes) {
            let fila = document.createElement('tr');
            fila.classList.add('fila-cliente');  // Agrega la clase 'fila-cliente' a las filas de los clientes

            let filaTrimestre = document.createElement('tr');
            filaTrimestre.classList.add('fila-trimestre');

            fila.appendChild(crearCelda(cliente.nombre));
            fila.appendChild(crearCelda(cliente.apellidos));
            fila.appendChild(crearCelda(cliente.telefono));
            fila.appendChild(crearCelda(`${cliente.direccion.calle}, ${cliente.direccion.ciudad}, ${cliente.direccion.codigoPostal}, ${cliente.direccion.provincia}`));
            fila.appendChild(crearCelda(cliente.correoElectronico));
            fila.appendChild(crearCelda(cliente.fechaInclusion));

            let productos = cliente.pedidos.flatMap(pedido => pedido.productos.map(producto => producto.nombreProducto));
            let listaProductos = document.createElement('ul');
            productos.forEach(producto => {
                let itemLista = document.createElement('li');
                itemLista.textContent = producto;
                listaProductos.appendChild(itemLista);
            });

            let celdaProductos = document.createElement('td');
            celdaProductos.appendChild(listaProductos);
            fila.appendChild(celdaProductos);

            tabla.appendChild(fila);
        }
    }
}

function crearCelda(texto) {
    let celda = document.createElement('td');
    celda.textContent = texto;
    return celda;
}