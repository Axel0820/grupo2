import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Inicio.css";

export default function Inicio() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const cargarPedidos = () => {
      const pedidosGuardados = JSON.parse(localStorage.getItem("pedidos") || "[]");
      setPedidos(pedidosGuardados);
    };
    cargarPedidos();
  }, []);

  const pedidosPendientes = pedidos.filter(p => !p.entregado).length;
  const pedidosEntregados = pedidos.filter(p => p.entregado).length;

  return (
    <div className="inicio">
      <div className="contenedor">
        <h1>Panel del Empleado</h1>
        <p className="descripcion">
          Bienvenido al sistema de gestión de <span>Agua Rebelde</span>.  
          Aquí podés visualizar y administrar los pedidos del día.
        </p>

        <div className="stats">
          <div className="stat">
            <h3>Pendientes</h3>
            <p>{pedidosPendientes}</p>
          </div>
          <div className="stat">
            <h3>Entregados</h3>
            <p>{pedidosEntregados}</p>
          </div>
          <div className="stat">
            <h3>Total</h3>
            <p>{pedidos.length}</p>
          </div>
        </div>

        <div className="acciones">
          <Link to="/formulario" className="boton1">
            Nuevo Pedido
          </Link>
          <Link to="/catalogo" className="boton2">
            Ver Pedidos
          </Link>
        </div>
      </div>
    </div>
  );
}
