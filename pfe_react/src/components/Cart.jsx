import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import axios from '../axios';

const Cart = () => {
  const { panier, addToCart, removeFromCart, getTotal, decreaseQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  // طلب CSRF cookie فـ بداية
  useEffect(() => {
    axios.get('http://localhost:8000/sanctum/csrf-cookie', {
      withCredentials: true,
    })
    .then(() => console.log('✅ CSRF Cookie reçu'))
    .catch((error) => console.error('❌ Erreur CSRF', error));
  }, []);

  const handleOrder = async () => {
    try {
   
      await axios.get('http://localhost:8000/sanctum/csrf-cookie', { withCredentials: true });
  
      // ثم الإرسال
      const response = await axios.post('http://localhost:8000/api/commandes', {
        utilisateurs_id: 2,
        total: getTotal(),
        items: panier.map(item => ({
          produit_id: item.id,
          quantity: item.quantity,
          prix: item.prix,
        }))
      }, {
        withCredentials: true
      });
  
      alert('✅ Commande envoyée avec succès');
      clearCart();
      navigate('/checkout');
    } catch (error) {
      // تفاصيل الأخطاء
      console.error('❌ Erreur réseau ou CSRF:', error.response ? error.response.data : error.message);
      alert('Erreur réseau ou CSRF lors de l\'envoi de la commande');
    }
  };
  
 

  

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold text-dark">Votre Panier</h2>

      {panier.length === 0 ? (
        <p className="text-center mt-4">Votre panier est vide</p>
      ) : (
        <ul className="list-group">
          {panier.map((produit) => (
            <li key={produit.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img
                  src={`http://localhost:8000/${produit.image}`}
                  alt={produit.nom}
                  style={{ width: '70px', height: '70px', objectFit: 'cover', marginRight: '15px', borderRadius: '8px' }}
                />
                <div>
                  <h5 className="mb-1">{produit.nom}</h5>
                  <p className="mb-1 text-muted small">{produit.description}</p>
                  <p className="mb-1 fw-bold text-success">{produit.prix} DH</p>
                  <div className="d-flex align-items-center">
                    <button className="btn btn-outline-secondary btn-sm me-2" onClick={() => decreaseQuantity(produit.id)}>-</button>
                    <span>{produit.quantity}</span>
                    <button className="btn btn-outline-secondary btn-sm ms-2" onClick={() => addToCart(produit)}>+</button>
                  </div>
                </div>
              </div>
              <button onClick={() => removeFromCart(produit.id)} className="btn btn-danger btn-sm">Supprimer</button>
            </li>
          ))}
        </ul>
      )}

      {panier.length > 0 && (
        <div className="text-center mt-4">
          <h4>Total: {getTotal()} DH</h4>
          <div className="text-center mt-3">
            <button className="btn btn-success px-4" onClick={handleOrder}>
              Passer la commande
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
