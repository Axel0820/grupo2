    import React, { useState, useEffect } from 'react';
    import './Catalogo.css';

    function Catalogo() {
    const [pedidos, setPedidos] = useState([]);
    const [nombreBusqueda, setNombreBusqueda] = useState('');
    const [tipoProducto, setTipoProducto] = useState('todos');

    useEffect(() => {
        cargarPedidos();
        const interval = setInterval(cargarPedidos, 1000);
        return () => clearInterval(interval);
    }, []);

    const cargarPedidos = () => {
        const pedidosGuardados = JSON.parse(localStorage.getItem('pedidos') || '[]');
        setPedidos(pedidosGuardados);
    };

    const confirmarYEliminar = (id) => {
        const confirmar = window.confirm('¿Estás seguro de que deseas eliminar este pedido?');
        if (confirmar) {
        const pedidosActualizados = pedidos.filter(pedido => pedido.id !== id);
        localStorage.setItem('pedidos', JSON.stringify(pedidosActualizados));
        setPedidos(pedidosActualizados);
        }
    };

    const normalizar = (texto) =>
        texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    const pedidosFiltrados = pedidos.filter(pedido => {
        const nombre = normalizar(pedido.nombre || '');
        const producto = normalizar(pedido.producto || '');

        const coincideNombre = nombre.includes(normalizar(nombreBusqueda));
        const coincideProducto =
        tipoProducto === 'todos' || producto.includes(tipoProducto);

        return coincideNombre && coincideProducto;
    });

    return (
        <div className="catalogo-container">
        <h1>Lista de Pedidos</h1>

        {/* Buscador y filtro */}
        <div className="filtros">
            <input
            type="text"
            placeholder="Buscar por nombre..."
            value={nombreBusqueda}
            onChange={(e) => setNombreBusqueda(e.target.value)}
            />
            <select value={tipoProducto} onChange={(e) => setTipoProducto(e.target.value)}>
            <option value="todos">Todos los productos</option>
            <option value="bidon">Bidón</option>
            <option value="botella">Botella</option>
            <option value="pack">Pack</option>
            </select>
        </div>

        {pedidosFiltrados.length === 0 ? (
            <p className="no-pedidos">No se encontraron pedidos.</p>
        ) : (
            <div className="pedidos-lista">
            {pedidosFiltrados.map((pedido) => (
                <div key={pedido.id} className="pedido-card">
                <div className="pedido-header">
                    <h3>{pedido.nombre}</h3>
                    <button
                    onClick={() => confirmarYEliminar(pedido.id)}
                    className="btn-eliminar"
                    >
                    ✕
                    </button>
                </div>
                <div className="pedido-info">
                    <p><strong>DNI:</strong> {pedido.dni}</p>
                    <p><strong>Producto:</strong> {pedido.producto}</p>
                    <p><strong>Cantidad:</strong> {pedido.cantidad}</p>
                    <p><strong>Dirección:</strong> {pedido.direccion}</p>
                    <p><strong>Celular:</strong> {pedido.celular}</p>
                    <p className="fecha"><strong>Fecha:</strong> {pedido.fecha}</p>
                </div>
                </div>
            ))}
            </div>
        )}
        </div>
    );
    }

    export default Catalogo;
