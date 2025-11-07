import React from 'react';
import { useForm } from 'react-hook-form';
import './Formulario.css';

function Formulario() {
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  
  const onSubmit = (data) => {
   
    const pedidos = JSON.parse(localStorage.getItem('pedidos') || '[]');
    const nuevoPedido = {
      ...data,
      id: Date.now(),
      fecha: new Date().toLocaleString()
    };
    pedidos.push(nuevoPedido);
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
    
    console.log('Datos del pedido:', data);
    alert('Pedido enviado exitosamente, revisa la consola');
    reset(); 
  };

  return (
    <div className="formulario-container">
      <h2>Formulario de Pedido - Agua Rebelde</h2>
      <p>Completa tus datos para realizar tu pedido de agua</p>
      <form onSubmit={handleSubmit(onSubmit)} className="formulario">
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            id="nombre"
            type="text"
            {...register('nombre', { 
              required: 'El nombre es requerido',
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: 'Solo se permiten letras y espacios'
              }
            })}
            placeholder="Ingrese su nombre"
          />
          {errors.nombre && <span className="error">{errors.nombre.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="dni">DNI:</label>
          <input
            id="dni"
            type="text"
            {...register('dni', { 
              required: 'El DNI es requerido',
              pattern: {
                value: /^[0-9]+$/,
                message: 'Solo se permiten dígitos del 0 al 9'
              }
            })}
            placeholder="Ingrese su DNI"
          />
          {errors.dni && <span className="error">{errors.dni.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="direccion">Dirección:</label>
          <input
            id="direccion"
            type="text"
            {...register('direccion', { required: 'La dirección es requerida' })}
            placeholder="Ingrese su dirección"
          />
          {errors.direccion && <span className="error">{errors.direccion.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="celular">Número de Celular:</label>
          <input
            id="celular"
            type="tel"
            {...register('celular', { 
              required: 'El número de celular es requerido',
              pattern: {
                value: /^\+?(\d+){3,}$/,
                message: 'Mínimo 3 dígitos, opcional "+"'
              }
            })}
            placeholder="Ingrese su número de celular"
          />
          {errors.celular && <span className="error">{errors.celular.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="producto">Producto:</label>
          <select
            id="producto"
            {...register('producto', { required: 'Seleccione un producto' })}
          >
            <option value="">Seleccione un producto</option>
            <option value="Botella 1L">Botella 1L</option>
            <option value="Bidón 20L">Bidón 20L</option>
            <option value="Pack 6x500ml">Pack 6x500ml</option>
          </select>
          {errors.producto && <span className="error">{errors.producto.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="cantidad">Cantidad:</label>
          <input
            id="cantidad"
            type="text"
            {...register('cantidad', { 
              required: 'La cantidad es requerida',
              pattern: {
                value: /^[0-9]+$/,
                message: 'Solo se permiten dígitos del 0 al 9'
              },
              validate: value => parseInt(value) > 0 || 'La cantidad debe ser mayor a 0'
            })}
            placeholder="Ingrese la cantidad"
          />
          {errors.cantidad && <span className="error">{errors.cantidad.message}</span>}
        </div>

        <button type="submit" className="submit-btn">Enviar Pedido</button>
      </form>
    </div>
  );
}

export default Formulario;
