import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListeArticles() {
  const [articles, setArticles] = useState([]); // Pour stocker les articles
  const [loading, setLoading] = useState(true); // Pour savoir si les données sont en cours de chargement
  const [error, setError] = useState(null); // Pour stocker l'éventuelle erreur
  const [searchTerm, setSearchTerm] = useState(""); // Pour stocker le terme de recherche
  const [filteredArticles, setFilteredArticles] = useState([]); // Pour stocker les articles filtrés

  // Récupération des articles depuis l'API
  useEffect(() => {
    console.log("Tentative de récupération des données...");

    axios.get("http://localhost:8000/api/articles")
      .then(response => {
        console.log("Données récupérées:", response.data);
        setArticles(response.data);
        setFilteredArticles(response.data); // Initialiser les articles filtrés avec tous les articles
        setLoading(false);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des données:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Si les données sont en train de se charger
  if (loading) {
    return <div className="alert alert-info">Chargement des données...</div>;
  }

  // Si une erreur se produit
  if (error) {
    return <div className="alert alert-danger">Erreur : {error}</div>;
  }

  // Fonction de filtrage des articles
  const handleSearch = () => {
    // Vérifier si searchTerm est non vide
    if (searchTerm.trim() === "") {
      setFilteredArticles(articles); // Si le terme de recherche est vide, afficher tous les articles
    } else {
      const filtered = articles.filter(article =>
        article.description && article.description.toLowerCase().includes(searchTerm.toLowerCase()) // Vérifier si description existe
      );
      console.log("Articles filtrés:", filtered); // Affichage des articles filtrés dans la console
      setFilteredArticles(filtered);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">📦 Liste des articles</h1>

      {/* Champ de recherche et bouton */}
      <div className="d-flex mb-4">
        <input
          type="text"
          className="form-control me-2"
          placeholder="🔍 Rechercher par description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Mise à jour du terme de recherche
        />
        <button 
          className="btn btn-primary" 
          onClick={handleSearch} // Lancement de la recherche
        >
          Rechercher
        </button>
      </div>

      {/* Tableau des articles filtrés */}
      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th>📌 Code</th>
            <th>📍 Emplacement</th>
            <th>📝 Description</th>
            <th>💰 Prix</th>
          </tr>
        </thead>
        <tbody>
          {filteredArticles.map(article => (
            <tr key={article.id}>
              <td>{article.code_article}</td>
              <td>{article.emplacement}</td>
              <td>{article.description}</td>
              <td>{article.prix_unitaire} د.م.</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListeArticles;
