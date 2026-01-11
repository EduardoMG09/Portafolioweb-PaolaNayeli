import React from "react";
import "./Cursos.css";
import img from "../../assets/proximamente.png";

function Cursos() {
  return (
    <div className="cursos-container">
      <div className="cursos-content">
        <img src={img} alt="Próximamente" className="cursos-image" />
        <p className="cursos-text">
          ¡Estamos trabajando para traerte una selección de cursos
          interesantes! Pronto podrás acceder a contenido educativo de alta
          calidad en diversas áreas. Mantente atento a las actualizaciones.
        </p>
      </div>
    </div>
  );
}

export default Cursos;
