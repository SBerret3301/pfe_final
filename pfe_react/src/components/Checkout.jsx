import React, { useState } from 'react';

const Checkout = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [payment, setPayment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // إرسال البيانات (هنا يمكن إرسالها للـ backend عبر API مثلاً)
    alert("Commande confirmée !");
    
    // Reset form after submission
    setFullName('');
    setPhone('');
    setAddress('');
    setPayment('');
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-body p-4">
              <h2 className="card-title mb-4 text-center">Informations de livraison</h2>
              <form onSubmit={handleSubmit}>
                
                {/* Nom complet */}
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">Nom complet</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    name="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Votre nom complet"
                    required
                  />
                </div>

                {/* Téléphone */}
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Téléphone</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="06 00 00 00 00"
                    required
                  />
                </div>

                {/* Adresse */}
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Adresse</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="123 rue exemple, Ville"
                    required
                  />
                </div>

                {/* Informations de paiement */}
                <div className="mb-3">
                  <label htmlFor="payment" className="form-label">Informations de paiement</label>
                  <input
                    type="text"
                    className="form-control"
                    id="payment"
                    name="payment"
                    value={payment}
                    onChange={(e) => setPayment(e.target.value)}
                    placeholder="Carte Visa **** **** **** 1234"
                    required
                  />
                </div>

                {/* Bouton */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-success">
                    Confirmer le paiement
                  </button>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
