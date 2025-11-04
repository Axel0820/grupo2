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
  );
}

export default App;

