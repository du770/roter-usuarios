import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Início from './pages/inicio';
import Sobre from './pages/sobre';
import Contato from './pages/contato';
import Usuarios from './pages/usuarios';
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
  const [userIds, setUserIds] = useState<number[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/users')
      .then(response => response.json())
      .then(data => {
        const ids = data.map((user: any) => user.id);
        setUserIds(ids);
      });
  }, []);

  return (
    <Router>
      <>
        <nav>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/contato">Contato</Link></li>
            {/* Removido o map dos usuários */}
          </ul>
        </nav>
        <div className="main-content">
          <Subtitle />
          <Routes>
            <Route path="/" element={<Início />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/usuarios/:id" element={<Usuarios />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}