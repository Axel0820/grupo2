import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../img/logo2.png"; // Asegurate de poner tu imagen en src/assets/

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Agua Rebelde Logo" className="logo" />
        <span className="brand">AGUA REBELDE</span>
      </div>

      <div className="navbar-links">
        <NavLink to="/" className="nav-item">
          INICIO
        </NavLink>
        <NavLink to="/formulario" className="nav-item">
          FORMULARIO
        </NavLink>
        <NavLink to="/catalogo" className="nav-item">
          LISTA
        </NavLink>
        
      </div>
    </nav>
  );
};

export default Navbar;