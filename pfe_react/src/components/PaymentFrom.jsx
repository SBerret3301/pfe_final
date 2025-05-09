import React, { useState } from 'react';

const PaymentForm = ({ amount, reservationId }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://127.0.0.1:8000/api/paiements', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reservation_id: reservationId,
        montant: amount,
        date_paiement: new Date().toISOString().split('T')[0], // تاريخ اليوم بصيغة YYYY-MM-DD
        statut: 'payé',
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Échec de la requête');
        }
        return response.json();
      })
      .then((data) => {
        alert('✅ تم الدفع بنجاح!');
        setCardNumber('');
        setExpiryDate('');
        setCvv('');
        setFullName('');
        setPhone('');
        setIsPaymentSuccess(true);
      })
      .catch((error) => {
        console.error('Erreur:', error);
        alert('❌ وقع خطأ أثناء الدفع، المرجو المحاولة من جديد.');
      });
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center ">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-body p-4">
              <h2 className="card-title text-center mb-4">Paiement</h2>

              {isPaymentSuccess === true ? (
                <div className="alert alert-success text-center">
                  ✅ Paiement effectué avec succès !
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Nom complet */}
                  <div className="mb-3">
                    <label className="form-label">Nom complet</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Votre nom complet"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>

                  {/* Téléphone */}
                  <div className="mb-3">
                    <label className="form-label">Téléphone</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="06 00 00 00 00"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>

                  {/* Numéro de carte */}
                  <div className="mb-3">
                    <label className="form-label">Numéro de carte</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="1234 5678 9012 3456"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      required
                    />
                  </div>

                  {/* Date d’expiration */}
                  <div className="mb-3">
                    <label className="form-label">Date d'expiration</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="MM/AA"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      required
                    />
                  </div>

                  {/* CVV */}
                  <div className="mb-4">
                    <label className="form-label">CVV</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="123"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      required
                    />
                  </div>

                  {/* Montant total */}
                  <p className="mb-3 text-center fw-bold">
                    Montant total : <span className="text-success">${amount}</span>
                  </p>

                  {/* Bouton payer */}
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Payer maintenant
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
