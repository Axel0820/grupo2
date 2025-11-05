import React, { useState, useEffect } from 'react';
import './Catalogo.css';

function Catalogo() {
    const [pedidos, setPedidos] = useState([]);

    // Cargar pedidos del localStorage
    useEffect(() => {
        cargarPedidos();
        // Actualizar cada segundo para detectar nuevos pedidos
        const interval = setInterval(cargarPedidos, 1000);
        return () => clearInterval(interval);
    }, []);

    const cargarPedidos = () => {
        const pedidosGuardados = JSON.parse(localStorage.getItem('pedidos') || '[]');
        setPedidos(pedidosGuardados);
    };

    const eliminarPedido = (id) => {
        const pedidosActualizados = pedidos.filter(pedido => pedido.id !== id);
        localStorage.setItem('pedidos', JSON.stringify(pedidosActualizados));
        setPedidos(pedidosActualizados);
    };

    return (
        <div className="catalogo-container">
            <h1>Lista de Pedidos</h1>
            {pedidos.length === 0 ? (
                <p className="no-pedidos">No hay pedidos registrados aún.</p>
            ) : (
                <div className="pedidos-lista">
                    {pedidos.map((pedido) => (
                        <div key={pedido.id} className="pedido-card">
                            <div className="pedido-header">
                                <h3>{pedido.nombre}</h3>
                                <button 
                                    onClick={() => eliminarPedido(pedido.id)}
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