import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import YouTubePreview from "../../components/YoutubeLink";
import CardHeader from "../../components/CardHeader";
import "./Home.css";
import json from "../../json/YoutubeLinks.json";

// Imagenes de header
import img from "../../assets/peluche-animacion.png";
import img2 from "../../assets/duck-img.png";
import img3 from "../../assets/pinguino-img.png";
import img4 from "../../assets/Paola-foto.webp";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const heroRef = useRef(null);
  const cardsRef = useRef([]);
  const sectionsRef = useRef([]);

  const imagenes = [
    [img2, "#e8c816ff"],
    [img, "#33bef5ff"],
    [img3, "#9b57efff"],
  ];

  const degree = [
    "Maestría en Educación",
    "Maestría en Ciencias de la Computación",
    "Ingeniera en Sistemas Computacionales",
    "Técnica en computación",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current.querySelectorAll(".hero-content > *"), {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(cardsRef.current, {
        opacity: 0,
        x: 100,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        delay: 0.3,
      });

      sectionsRef.current.forEach((section) => {
        if (section) {
          gsap.from(section.querySelectorAll(".animate-on-scroll"), {
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="container-main">
      <Navbar />

      <div className="content-home">
        {/* Hero Section */}
        <section className="hero-section" id="inicio" ref={heroRef}>
          <div className="hero-inner">
            <div className="hero-content">
              <span className="hero-tag">Educación Digital Innovadora</span>
              <h1 className="hero-title">
                Bienvenido al sitio web de{" "}
                <span className="hero-name">Paola Cortez</span>
              </h1>
              <p className="hero-description">
                Contenido educativo de calidad enfocado, ¿Preparado para conocer
                tu futuro ahora?
              </p>
              <div className="hero-cta">
                <a href="#contenido" className="btn btn-primary">
                  Explorar Contenido
                </a>
                <a href="#contacto" className="btn btn-secondary">
                  Contactar
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-cards">
                {imagenes.map((image, index) => (
                  <div key={index} ref={(el) => (cardsRef.current[index] = el)}>
                    <CardHeader image={image[0]} color={image[1]} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          className="about-section section section-colored section-blue"
          id="sobre-mi"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <div className="about-content">
            <div className="about-image animate-on-scroll">
              <img src={img4 || "/placeholder.svg"} alt="Paola Cortez" />
            </div>
            <div className="about-text animate-on-scroll">
              <div className="section-title animate-on-scroll">
                <p className="section-subtitle">Sobre Mí</p>
                <h2>Paola Cortez</h2>
              </div>
              <p>
                Soy Paola Cortez, apasionada por la educación y comprometida con
                la formación integral de estudiantes universitarios. En esta
                plataforma, podrás acceder a mis publicaciones académicas y
                explorar recursos didácticos digitales que facilitan tu
                aprendizaje.
              </p>
              <p>
                Ofrezco servicios de asesoría personalizada para ayudarte a
                alcanzar tus metas académicas. Este espacio es para ti: un lugar
                donde el conocimiento se comparte y el aprendizaje se
                transforma.
              </p>

              <div className="degree-badges">
                {degree.map((deg, index) => (
                  <span key={index} className="degree-badge">
                    {deg}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="featured-section section section-colored section-green"
          id="contenido"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <div className="section-title animate-on-scroll">
            <p className="section-subtitle">Contenido Destacado</p>
            <h2>Recursos Educativos</h2>
          </div>

          <div className="content-grid">
            {json.videos.map((video) => (
              <YouTubePreview
                url={video.url}
                title={video.title}
                key={video.id}
              />
            ))}
          </div>
        </section>

        <section
          className="cta-section section-colored section-purple"
          id="contacto"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <div className="cta-content animate-on-scroll">
            <h2>¿Listo para Comenzar?</h2>
            <p>
              Únete a cientos de estudiantes que están transformando su
              aprendizaje en tecnología.
            </p>
            <div className="cta-buttons">
              <a
                href="mailto:contacto@paolacortez.com"
                className="btn btn-white"
              >
                Enviar Email
              </a>
              <a href="#contenido" className="btn btn-secondary-light">
                Ver Cursos
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
