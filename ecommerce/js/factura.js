
fetch('data/factura.json')
    .then(response => response.json())
    .then(data => {
        let factura = data.factura;
        let cliente = data.cliente;

        document.getElementById('nombreCliente').textContent = `${cliente.nombre} ${cliente.apellidos}`;
        document.getElementById('direccionCliente').textContent = `${cliente.direccion.calle}, ${cliente.direccion.ciudad}, ${cliente.direccion.codigoPostal}, ${cliente.direccion.provincia}`;
        document.getElementById('numeroPedido').textContent = factura.numeroPedido;
        document.getElementById('fechaCompra').textContent = factura.fechaCompra;
        document.getElementById('fechaEntrega').textContent = factura.fechaEntrega;
        document.getElementById('totalFactura').textContent = factura.totalFactura.toFixed(2) + ' €';

        let tablaProductos = document.getElementById('productos');
        factura.productos.forEach(producto => {
            let fila = document.createElement('tr');

            fila.appendChild(crearCelda(producto.nombreProducto));
            fila.appendChild(crearCelda(producto.referencia));
            fila.appendChild(crearCelda(producto.precio.toFixed(2) + ' €'));
            fila.appendChild(crearCelda(producto.unidades));

            tablaProductos.appendChild(fila);
        });
    });

function crearCelda(texto) {
    let celda = document.createElement('td');
    celda.textContent = texto;
    return celda;
}