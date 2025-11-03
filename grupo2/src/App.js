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
  );
}

export default App;
