import React, { useState, useEffect } from 'react';
import api from '../axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formulaire, setFormulaire] = useState({
    email: '',
    password: '',
  });

  const [messageErreur, setMessageErreur] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    // نربط الاسم الحقيقي بالاسم المزور
    if (name === 'login_email') {
      setFormulaire({ ...formulaire, email: value });
    } else if (name === 'login_password') {
      setFormulaire({ ...formulaire, password: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.get('/sanctum/csrf-cookie');
      const response = await api.post('/login', formulaire);

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      console.log('✅ Connexion réussie :', response.data);
      setMessageErreur('');
      navigate('/articles');
    } catch (error) {
      console.error('❌ Erreur de connexion :', error.response?.data || error.message);
      setMessageErreur(error.response?.data?.message || 'Une erreur est survenue lors de la connexion');
    }
  };

  useEffect(() => {
    setFormulaire({ email: '', password: '' });
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return <div className="text-center">Chargement...</div>;
  }

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4 rounded-4" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Connexion</h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Adresse email</label>
            <input
              type="email"
              name="login_email" // اسم مزيف لتجنب autofill
              className="form-control"
              id="email"
              placeholder="exemple@email.com"
              value={formulaire.email}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Mot de passe</label>
            <input
              type="password"
              name="login_password" // اسم مزيف لتجنب autofill
              className="form-control"
              id="password"
              placeholder="Votre mot de passe"
              value={formulaire.password}
              onChange={handleChange}
              autoComplete="new-password"
              required
            />
          </div>
          {messageErreur && <div className="alert alert-danger">{messageErreur}</div>}
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Se connecter</button>
          </div>
        </form>
        <p className="text-center mt-3">
          Pas encore inscrit ? <a href="/register">Créer un compte</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
