<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import Catalogo from './componente/Catalogo';
import FormularioProducto from './componente/Formulario';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormularioProducto />
        <Catalogo />
        
      </header>
    </div>
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/inicio";
import Formulario from "./pages/Formulario";
import Catalogo from "./pages/Catalogo"; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/catalogo" element={<Catalogo />} />
      </Routes>
    </Router>
>>>>>>> 87be889f54037ba1d29ab26dd235dad27586149c
  );
}

export default App;
