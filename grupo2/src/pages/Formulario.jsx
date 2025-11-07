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
      fecha: new Date().toLocaleString(),
      entregado: false
    };
    pedidos.push(nuevoPedido);
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
    
    console.log('Datos del pedido:', data);
    mostrarNotificacion();
    reset(); 
  };

  const mostrarNotificacion = () => {
    const modal = document.createElement('div');
    modal.className = 'modal-exito';
    modal.innerHTML = `
      <div class="modal-exito-contenido">
        <div class="modal-exito-icono">✓</div>
        <h3>¡Pedido Enviado!</h3>
        <p>Tu pedido ha sido registrado exitosamente</p>
      </div>
    `;
    document.body.appendChild(modal);
    
    setTimeout(() => {
      modal.classList.add('fade-out');
      setTimeout(() => document.body.removeChild(modal), 300);
    }, 2500);
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
              maxLength: {
                value: 30,
                message: 'El nombre no puede tener más de 30 caracteres'
              },
              pattern: {
                value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                message: 'Solo se permiten letras y espacios'
              }
            })}
            placeholder="Ingrese su nombre"
            maxLength="30"
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
                value: /^[0-9]{8}$/,
                message: 'El DNI debe tener exactamente 8 dígitos'
              },
              minLength: {
                value: 8,
                message: 'El DNI debe tener 8 dígitos'
              },
              maxLength: {
                value: 8,
                message: 'El DNI debe tener 8 dígitos'
              }
            })}
            placeholder="Ingrese su DNI (8 dígitos)"
            maxLength="8"
          />
          {errors.dni && <span className="error">{errors.dni.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="direccion">Dirección:</label>
          <input
            id="direccion"
            type="text"
            {...register('direccion', { 
              required: 'La dirección es requerida',
              maxLength: {
                value: 150,
                message: 'La dirección no puede tener más de 150 caracteres'
              }
            })}
            placeholder="Ingrese su dirección"
            maxLength="150"
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
                value: /^\+54\s?\d{10,11}$/,
                message: 'Formato: +54 seguido de 10-11 dígitos (Ej: +54 3875787392)'
              }
            })}
            placeholder="+54 3875787392"
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
            type="number"
            min="1"
            {...register('cantidad', { 
              required: 'La cantidad es requerida',
              pattern: {
                value: /^[0-9]+$/,
                message: 'Solo se permiten números positivos'
              },
              validate: value => parseInt(value) > 0 || 'La cantidad debe ser mayor a 0',
              min: {
                value: 1,
                message: 'La cantidad mínima es 1'
              }
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
