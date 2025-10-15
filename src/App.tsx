import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Início from './pages/inicio';
import Sobre from './pages/sobre';
import Contato from './pages/contato';
import Usuarios from './pages/usuarios';
import Dashboard from './pages/Dashboard/dashboard';
import Perfil from './pages/Dashboard/perfil';
import Configuracoes from './pages/Dashboard/configuracoes';
import Login from './pages/Dashboard/login';
import './App.css';


function Subtitle() {
  const location = useLocation();

  let title = '';
  let message = '';

  switch (location.pathname) {
    case '/':
      break;
    case '/sobre':
      break;
    case '/contato':
      break;
    case '/usuarios':
      break;
    default:
      if (location.pathname.startsWith('/usuarios/')) {
        title = 'Usuário';
        message = 'Detalhes do usuário selecionado.';
      } else {
        title = '';
        message = '';
      }
  }

  return (
    <div className="subtitle">
      {title && <div>{title}</div>}
      {message && <div style={{ fontWeight: 'normal', fontSize: '1rem', marginTop: 8 }}>{message}</div>}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <>
        <nav>
          <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/contato">Contato</Link></li>
           <li><Link to="/login">Entrar</Link></li>

          </ul>
        </nav>
        <div className="main-content">
          <Subtitle />
          <Routes>
            <Route path="/" element={<Início />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/usuarios/:id" element={<Usuarios />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="perfil" element={<Perfil />} />
              <Route path="configuracoes" element={<Configuracoes />} />
            </Route>
            <Route path="/login" element={<Login />} /> {/* Adicionando a rota de Login */}
          </Routes>
        </div>
      </>
    </Router>
  );
}