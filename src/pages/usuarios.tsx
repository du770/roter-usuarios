import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: {
    firstname: string;
    lastname: string;
  };
  email: string;
  phone: string;
  username: string;
}

export default function Usuarios() {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(`https://fakestoreapi.com/users/${id}`)
        .then(res => res.json())
        .then(data => {
          setUser(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [id]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!user) {
    return <div>Usuário não encontrado.</div>;
  }

  return (
    <div>
      <h2>Informações do Usuário</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Nome:</strong> {user.name.firstname} {user.name.lastname}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Telefone:</strong> {user.phone}</p>
      <p><strong>Usuário:</strong> {user.username}</p>
    </div>
  );
}