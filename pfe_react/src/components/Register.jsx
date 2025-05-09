import React, { useState } from 'react';
import api from '../axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const [messageErreur, setMessageErreur] = useState('');
  const [messageSucces, setMessageSucces] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.get('/sanctum/csrf-cookie');
      const response = await api.post('/register', form);

      // ✅ تخزين التوكن والمستخدم
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      console.log('✅ Registration success:', response.data);
      setMessageSucces("Compte créé avec succès !");
      setMessageErreur('');

      // ✅ redirection vers profil ou autre
      navigate('/profile'); // غير المسار إذا بغيتي شي صفحة أخرى
    } catch (error) {
      console.error('❌ Registration error:', error.response?.data || error.message);
      setMessageErreur(error.response?.data?.message || 'Une erreur est survenue lors de l’inscription');
      setMessageSucces('');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4 rounded-4" style={{ width: '100%', maxWidth: '450px' }}>
        <h2 className="text-center mb-4">Créer un compte</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nom complet</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="Votre nom"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Adresse email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="exemple@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Mot de passe</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Mot de passe"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password_confirmation" className="form-label">Confirmer le mot de passe</label>
            <input
              type="password"
              name="password_confirmation"
              className="form-control"
              id="password_confirmation"
              placeholder="Confirmation"
              value={form.password_confirmation}
              onChange={handleChange}
              required
            />
          </div>

          {messageErreur && <div className="alert alert-danger">{messageErreur}</div>}
          {messageSucces && <div className="alert alert-success">{messageSucces}</div>}

          <div className="d-grid">
            <button type="submit" className="btn btn-success">Créer un compte</button>
          </div>
        </form>

        <p className="text-center mt-3">
          Déjà inscrit ? <a href="/login">Se connecter</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
