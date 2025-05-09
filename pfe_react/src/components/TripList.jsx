import React, { useEffect, useState } from "react";

const TripList = () => {
  const [voyages, setVoyages] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/voyages")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch voyages");
        return response.json();
      })
      .then((data) => setVoyages(data))
      .catch((error) => console.error("Error fetching voyages:", error));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
    

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "5rem",
          justifyContent: "center",
        }}
      >
        {voyages.map((voyage) => (
          <div
            key={voyage.id}
            style={{
              width: "280px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              overflow: "hidden",
              position: "relative",
              backgroundColor: "#fff",
              fontFamily: "sans-serif",
            }}
          >
            {/* VIP Badge */}
            <div
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                backgroundColor: "#0a1f44",
                color: "white",
                padding: "8px 8px",
                fontSize: "12px",
                borderRadius: "4px",
                fontWeight: "bold",
                zIndex: 10,
              }}
            >
              VIP Access
            </div>

            {/* Image */}
            <img
              src={voyage.image}
              alt={voyage.destination}
              style={{
                width: "100%",
                height: "170px",
                objectFit: "cover",
              }}
            />

            {/* Content */}
            <div style={{ padding: "1rem" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "5px" }}>
                {voyage.destination}
              </h3>

              <p style={{ fontSize: "13px", color: "#888", marginBottom: "5px" }}>
                {voyage.date_debut} → {voyage.date_fin}
              </p>

              <p
                style={{
                  backgroundColor: "#d4edda",
                  color: "#155724",
                  fontSize: "13px",
                  fontWeight: "bold",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  display: "inline-block",
                  marginBottom: "8px",
                }}
              >
                {Math.floor(Math.random() * 1500 + 100)} MAD de réduction
              </p>

              <p style={{ fontSize: "15px", fontWeight: "bold", color: "#d00000", marginBottom: "4px" }}>
                {voyage.prix} MAD{" "}
                <span
                  style={{
                    textDecoration: "line-through",
                    fontSize: "13px",
                    color: "#888",
                    marginLeft: "5px",
                  }}
                >
                  {parseInt(voyage.prix) + 500} MAD
                </span>
              </p>

              <p style={{ fontSize: "12px", color: "#999", marginBottom: "12px" }}>
                par personne
              </p>
              <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>


              <button style={{
            
                      marginTop: '10px',
                      padding: '0.5rem 1rem',
                      backgroundColor: '#007bff',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      width:"170px",
                    }}>
                    Voir plus
                    </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripList;
