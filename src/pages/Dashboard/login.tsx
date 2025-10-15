import { useState } from 'react';

export default function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('Verificando...');

    try {
      const res = await fetch('https://fakestoreapi.com/users');
      type User = {
        id: number;
        email: string;
        username: string;
      };

      const users: User[] = await res.json();

      const user = users.find(
        (u: User) => u.username === login
      );

      if (!user) {
        setMessage('Usuário não encontrado.');
        setSuccess(false);
        return;
      }

      if (password === 'password') {
        setMessage('Login realizado com sucesso!');
        setSuccess(true);
      } else {
        setMessage('Senha incorreta.');
        setSuccess(false);
      }
    } catch {
      setMessage('Erro ao conectar com o servidor.');
      setSuccess(false);
    }
  };

  const handleLogout = () => {
    setSuccess(false);
    setLogin('');
    setPassword('');
    setMessage('');
  };

  if (success) {
    return (
      <div style={{ maxWidth: 400, margin: '40px auto' }}>
        <h2>Bem-vindo, {login}!</h2>
        <p>Login realizado com sucesso!</p>
        <button onClick={handleLogout} style={{ marginTop: 16 }}>Sair</button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 400, margin: '40px auto' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Usuário:</label>
          <input
            type="text"
            value={login}
            onChange={e => setLogin(e.target.value)}
            required
            style={{ width: '100%', marginBottom: 10 }}
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{ width: '100%', marginBottom: 10 }}
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
      {message && <div style={{ marginTop: 16 }}>{message}</div>}
    </div>
  );
}