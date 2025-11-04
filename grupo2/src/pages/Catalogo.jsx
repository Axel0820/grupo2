import React, { useState, useEffect } from 'react';
import './Catalogo.css';

const Catalogo = () => {
    const [pedidos, setPedidos] = useState([]);
    const [loading, setLoading] = useState(true);

    // Cargar pedidos al montar el componente
    useEffect(() => {
        cargarPedidos();
    }, []);

    const cargarPedidos = async () => {
        try {
            const response = await fetch('http://localhost:3001/pedidos');
            const data = await response.json();
            setPedidos(data);
            setLoading(false);
        } catch (error) {
            console.error('Error al cargar pedidos:', error);
            setLoading(false);
        }
    };

    const eliminarPedido = async (id) => {
        try {
            const response = await fetch(`http://localhost:3001/pedidos/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // Actualizar la lista sin recargar
                setPedidos(pedidos.filter(pedido => pedido.id !== id));
            } else {
                alert('Error al eliminar el pedido');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error al conectar con la base de datos');
        }
    };

    if (loading) {
        return <div className="catalogo-container"><p>Cargando pedidos...</p></div>;
    }

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