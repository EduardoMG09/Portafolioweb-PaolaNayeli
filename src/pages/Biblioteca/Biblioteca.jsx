import React, { useState } from "react";
import "./Biblioteca.css";
import PdfSection from "../../components/PdfSection";
import { TesisDirigidas } from "../../components/TesisDirigidas";

function Biblioteca() {
  const [sección, setSeccion] = useState("pdfs");

  return (
    <div className="container-main">
      <div className="biblioteca-content">
        <div className="biblioteca-header">
          <h2>Biblioteca</h2>
          <h3>
            Aquí encontrarás materiales de diversas áreas que te servirán para
            tu desarrollo.
          </h3>
        </div>
        <p>
          En esta sección encontrarás algunos de los trabajos que he dirigido
          (en coautoría) con estudiantes de los últimos semestres de telemática
          o mecatrónica.
        </p>
      </div>

      <div className="btn-opciones">
        <button
          className={sección === "pdfs" ? "active" : ""}
          onClick={() => setSeccion("pdfs")}
        >
          Publicaciones arbitrarias
        </button>
        <button
          className={sección === "tesis" ? "active" : ""}
          onClick={() => setSeccion("tesis")}
        >
          Tesis dirigidas
        </button>
        <button
          className={sección === "material" ? "active" : ""}
          onClick={() => setSeccion("material")}
        >
          Material de interés
        </button>
      </div>

      
      <div className="biblioteca-seccion">
        {sección === "pdfs" && <PdfSection />}
        {sección === "tesis" && <TesisDirigidas />}
      </div>

    </div>
  );
}

export default Biblioteca;
