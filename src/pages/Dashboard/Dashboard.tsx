import { Link, Outlet } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div>
      <nav>
<ul>
          <li>
            <Link to="/dashboard/perfil">Perfil</Link>
          </li>
          <li>
            <Link to="/dashboard/configuracoes">Configurações</Link>
          </li>
        </ul>
      </nav>


      {/* Aqui as rotas filhas serão renderizadas */}
      <Outlet />
    </div>
  );
}
