import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-dark pt-5 border-top shadow-sm">
      <div className="container">
        <div className="row row-cols-2 row-cols-md-4 g-4">

          {/* Section 1 */}
          <div>
            <h5 className="fw-bold mb-3">Travel & Shop</h5>
            <p className="small">
              Explorez les meilleures offres de voyage et les produits les plus pratiques pour vos aventures.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h6 className="fw-bold mb-3">Découvrir</h6>
            <ul className="list-unstyled small">
              <li><a href="/voyages" className="text-dark text-decoration-none">Voyages</a></li>
              <li><a href="/produits" className="text-dark text-decoration-none">Produits</a></li>
              <li><a href="/destinations" className="text-dark text-decoration-none">Destinations</a></li>
              <li><a href="/promos" className="text-dark text-decoration-none">Promotions</a></li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h6 className="fw-bold mb-3">Support</h6>
            <ul className="list-unstyled small">
              <li><a href="/contact" className="text-dark text-decoration-none">Contact</a></li>
              <li><a href="/faq" className="text-dark text-decoration-none">FAQ</a></li>
              <li><a href="/conditions" className="text-dark text-decoration-none">Conditions</a></li>
              <li><a href="/confidentialite" className="text-dark text-decoration-none">Confidentialité</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h6 className="fw-bold mb-3">Newsletter</h6>
            <p className="small">Abonnez-vous pour recevoir les dernières nouveautés.</p>
            <form className="d-flex mb-3">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Votre email"
              />
              <button className="btn btn-dark">OK</button>
            </form>
          </div>
        </div>

        {/* Separator */}
        <hr className="my-4" />

        {/* Bottom line */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3">
          <p className="mb-2 mb-md-0 small">
            &copy; {new Date().getFullYear()} Travel & Shop. Tous droits réservés.
          </p>
          <div className="d-flex gap-3">
            <a href="#" className="text-dark fs-5"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-dark fs-5"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-dark fs-5"><i className="bi bi-twitter-x"></i></a>
            <a href="#" className="text-dark fs-5"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
