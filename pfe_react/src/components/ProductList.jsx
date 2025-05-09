import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext'; // استيراد السياق
import { useNavigate } from 'react-router-dom'; // باش ندوزو للبانير

const ProductList = () => {
  const [produits, setProduits] = useState([]);
  const { addToCart } = useCart();  // دالة الإضافة للسلة
  const navigate = useNavigate();   // التنقل بين الصفحات

  // تحميل المنتجات من API
  useEffect(() => {
    fetch('http://localhost:8000/api/produits')
      .then(response => response.json())
      .then(data => setProduits(data))
      .catch(error => console.error('Erreur de chargement des produits:', error));
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold text-dark">Nos Produits</h2>

      <div className="row g-4">
        {produits.map(produit => (
          <div key={produit.id} className="col-12 col-sm-6 col-lg-4">
            <div className="card shadow-sm h-100 position-relative">
              <span className="position-absolute top-0 start-0 m-2 badge bg-danger">
                Promo
              </span>
              <img
                src={`http://localhost:8000/${produit.image}`}
                className="card-img-top"
                alt={produit.nom}
                style={{ height: '230px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{produit.nom}</h5>
                <p className="card-text text-muted small">{produit.description}</p>
                <p className="fw-bold text-success mb-1">{produit.prix} DH</p>
                <p className="text-secondary small mb-3">Stock: {produit.stock}</p>

                <div className="mt-auto text-center">
                  <button
                    className="btn btn-primary w-100"
                    onClick={() => {
                      addToCart(produit);   // نضيفو المنتج للسلة
                      navigate('/Cart');  // ننتاقل للصفحة ديال البانير
                    }}
                  >
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
