import { useState } from 'react';
import { login, register } from '@/data/auth';

export default function LoginForm() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = isRegistering
        ? await register(userId, password)
        : await login(userId, password);

      localStorage.setItem('token', data.token);
      console.log('Connexion réussie, token :', data.token);
      // Rediriger ou mettre à jour l'état de l'app
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || 'Erreur serveur');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '0 auto' }}>
      <h2>{isRegistering ? 'Créer un compte' : 'Se connecter'}</h2>

      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">
        {isRegistering ? 'S’inscrire' : 'Se connecter'}
      </button>

      <p style={{ color: 'red' }}>{error}</p>

      <p>
        {isRegistering ? 'Déjà un compte ?' : 'Pas encore de compte ?'}{' '}
        <button type="button" onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? 'Connexion' : 'Créer un compte'}
        </button>
      </p>
    </form>
  );
}
