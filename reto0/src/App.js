//import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router';
import Login from './components/pages/Login';
import Ordenes from './components/pages/Ordenes';
import Usuarios from './components/pages/Usuarios';
import Productos from './components/pages/Productos';
import DetalleOrdenes from './components/pages/DetalleOrdenes';
import DetalleUsuarios from './components/pages/DetalleUsuarios';
import DetalleProductos from './components/pages/DetalleProductos';
import ActualizarProducto from "./components/pages/ActualizarProducto";
import ActualizarUsuario from "./components/pages/ActualizarUsuario";
import Sidebar from './components/ui/Sidebar';
import Index from "./components/pages/Index";

function App(){
  return(
    <div className='md:flex'>
      <div className='md:w-2/5'>
        <Routes>
          <Route path="/" element={<Login />  } />
          <Route path="/index" element={<Index />  } />
          <Route path="/ordenes" element={<Ordenes/>}/>
          <Route path="/usuarios" element={<Usuarios />  } />
          <Route path="/productos" element={<Productos />  } />
          <Route path="/nueva-orden" element={<DetalleOrdenes/> }/>
          <Route path="/nuevo-producto" element={<DetalleProductos/> }/>
          <Route path="/nuevo-usuario" element={<DetalleUsuarios/> }/>
          <Route path="/actualizar-producto/:id" element={<ActualizarProducto/> }/>
          <Route path="/actualizar-usuario/:id" element={<ActualizarUsuario/> }/>
        </Routes>
      </div>
    </div>
  )
}
/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
