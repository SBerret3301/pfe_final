import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate('/login'); // حماية: ماشي مسجّل = يخرج
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleEdit = () => {
    navigate('/edit-profile'); // يفترض يكون عندك هاد المسار
  };

  return (
    <div className="container py-5 d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <div className="card shadow-lg border-0 rounded-4" style={{ maxWidth: '500px', width: '100%' }}>
        <div className="card-body text-center p-5">
          <div className="mb-4">
            <img
              src="/images/logo.jpeg"
              className="rounded-circle shadow"
              alt="avatar"
              width="100"
              height="100"
            />
          </div>
          <h3 className="mb-1">Mon Profil</h3>
          <p className="text-muted mb-4">Bienvenue dans votre espace personnel</p>
          {user ? (
            <div className="text-start">
              <p><strong>Nom:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <div className="d-flex justify-content-between mt-4">
                <button className="btn btn-outline-primary px-4" onClick={handleEdit}>
                  <i className="bi bi-pencil-square me-2"></i> Gérer le profil
                </button>
                <button className="btn btn-outline-danger px-4" onClick={handleLogout}>
                  <i className="bi bi-door-open me-2"></i> Se Déconnecter
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status"></div>
              <p className="mt-2">Chargement des informations...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
