import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/">Inicio</NavLink> |{" "}
      <NavLink to="/formulario">Formulario</NavLink>
      <NavLink to="/catalogo">Catálogo</NavLink>
    </nav>
  );
}