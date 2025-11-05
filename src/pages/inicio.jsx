import "./Inicio.css";

export default function Inicio() {
  return (
    <div className="inicio">
      <section className="hero">
        <div className="hero-text">
          <h1>Bienvenidos a <span>Agua Rebelde</span></h1>
          <p>
            Somos una tienda dedicada a la venta y distribución de agua purificada.
            En Agua Rebelde creemos que la hidratación es libertad, y por eso te
            llevamos frescura donde la necesites.
          </p>
          <a href="/catalogo" className="boton">Ver Catálogo</a>
        </div>

        
      </section>

      <section className="info">
        <h2> Por qué elegirnos</h2>
        <div className="cards">
          <div className="card">
            <h3>Agua 100% purificada</h3>
            <p>Filtrada y tratada con los más altos estándares de calidad.</p>
          </div>
          <div className="card">
            <h3>Entrega rápida</h3>
            <p>Te llevamos tu pedido en el día en toda la ciudad.</p>
          </div>
          <div className="card">
            <h3>Compromiso ecológico</h3>
            <p>Usamos envases retornables y reciclables para cuidar el planeta.</p>
          </div>
        </div>
      </section>
    </div>
  );
}