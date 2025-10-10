import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Usuarios() {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/users/${id}`)
        .then(res => res.json())
        .then(data => setUser(data));
    }
  }, [id]);

  if (!user) {
    return <div>Carregando...</div>;
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