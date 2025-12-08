import React from "react";
import Navbar from "../../components/Navbar";
import "./Home.css";
import CardHeader from "../../components/CardHeader";

//Imagenes de header
import img from "../../assets/peluche-animacion.png";
import img2 from "../../assets/peluche-animacion-2.png";
import img3 from "../../assets/peluche-animacion-3.png";

function Home() {
  const imagenes = [
    [img2, "Segunda imagen", "#D97FDB"],
    [img, "Primera imagen", "#DEC03C"],
    [img3, "Tercera imagen", "#27C8F5"],
  ];

  return (
    <div className="container-main">
      <Navbar />
      <div className="content-home">
        <div className="content-home-inner">
          <div className="mensaje-header">
            <h2>Bienvenidos al sitio web de</h2>
            <h1>Paola Cortez</h1>
            <h3>Comienza tu futuro ahora!</h3>
          </div>
          <div className="imagen-header">
            {imagenes.map((image, index) => (
              <CardHeader key={index} image={image[0]} text={image[1]} color={image[2]} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
