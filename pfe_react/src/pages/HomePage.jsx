




import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-white text-black"     style={{ maxWidth: '100%' }}>

      {/* Hero Section */}
      <section className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-center bg-white text-black">
  <div className="container py-5">
    <h1 className="display-3 fw-bold mb-4">Explorez. Réservez. Emportez.</h1>
    <p className="lead mb-4">Découvrez des expériences uniques et trouvez tout ce qu’il vous faut pour voyager avec style.</p>
    <button className="btn btn-dark btn-lg">Commencer l’aventure</button>
  </div>
</section>


      {/* À propos */}
      <section className="container py-5">
        <h2 className="text-center fw-bold mb-4">À propos de nous</h2>
        <p className="text-center mx-auto text-muted" style={{ maxWidth: '700px' }}>
          Travel Shop est une plateforme complète pour les passionnés de voyage. Que vous cherchiez à explorer de nouvelles destinations ou à acheter des équipements de voyage de qualité, vous êtes au bon endroit.
        </p>
        <div className="row mt-5">
          <div className="col-md-6 mb-4">
            <img src="/images/img.jpeg" className="img-fluid rounded shadow" alt="voyage" />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <p className="text-muted">
              Nos experts vous accompagnent du rêve au départ, tout en vous proposant une boutique soigneusement sélectionnée pour répondre à tous vos besoins en déplacement.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Nos Services</h2>
          <div className="row text-center">
            {[
              { title: 'Voyages organisés', desc: 'Découvrez nos forfaits vers les plus belles destinations.' },
              { title: 'Boutique en ligne', desc: 'Accessoires, sacs, gadgets, tout pour les voyageurs.' },
              { title: 'Réservations faciles', desc: 'Réservez en quelques clics, avec un service client réactif.' },
            ].map((s, i) => (
              <div className="col-md-4 mb-4" key={i}>
                <div className="p-4 border border-dark rounded shadow-sm h-100">
                  <h4 className="fw-bold">{s.title}</h4>
                  <p className="text-muted">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catégories */}
      <section className="container py-5">
        <h2 className="text-center fw-bold mb-4">Explorez nos catégories</h2>
        <div className="row text-center">
          {["Destinations", "Accessoires de voyage", "Électronique", "Aventure", "Séjours plage", "Produits en promotion"].map((cat, i) => (
            <div className="col-md-2 mb-4" key={i}>
              <div className="p-3 border rounded shadow-sm h-100">{cat}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog / Actus */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Nos Derniers Articles</h2>
          <div className="row">
            {[1, 2, 3].map((_, idx) => (
              <div className="col-md-4 mb-4" key={idx}>
                <div className="card h-100 shadow-sm">
                  <img src='https://picsum.photos/seed/voyage' className="card-img-top" alt="blog" />
                  <div className="card-body">
                    <h5 className="card-title">Article Voyage #{idx + 1}</h5>
                    <p className="card-text text-muted">Conseils, idées, et tendances pour voyager malin.</p>
                    <a href="#" className="btn btn-sm btn-dark">Lire plus</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Ils nous font confiance</h2>
          <div className="row">
            {[ 
              { name: 'Fatima, Casablanca', msg: 'J’ai réservé mon séjour et acheté une valise, tout est arrivé à temps !' },
              { name: 'Omar, Marrakech', msg: 'Une excellente sélection de produits pour le voyage.' },
              { name: 'Lina, Rabat', msg: 'Simple, rapide, et fiable. Je recommande.' },
            ].map((t, i) => (
              <div className="col-md-4" key={i}>
                <blockquote className="blockquote border p-4 rounded shadow-sm">
                  <p>“{t.msg}”</p>
                  <footer className="blockquote-footer">{t.name}</footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">Nos Partenaires</h2>
          <div className="d-flex flex-wrap justify-content-center gap-4 align-items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg" height="50" alt="Airbnb" />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-black text-white text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">Rejoignez notre communauté</h2>
          <p className="mb-4">Inscrivez-vous pour recevoir des offres spéciales sur les voyages et nos produits en boutique.</p>
          <a href="/register" className="btn btn-outline-light btn-lg">Créer un compte</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container d-flex justify-content-between align-items-center flex-wrap">
          <p className="mb-0">&copy; {new Date().getFullYear()} Travel Shop. Tous droits réservés.</p>
          <div>
            <a href="#" className="text-white me-3"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-white me-3"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default HomePage;
