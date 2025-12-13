"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../../components/Navbar";
import CardHeader from "../../components/CardHeader";
import "./Home.css";

// Imagenes de header
import img from "../../assets/peluche-animacion.png";
import img2 from "../../assets/peluche-animacion-2.png";
import img3 from "../../assets/peluche-animacion-3.png";
import img4 from "../../assets/Paola-foto.webp";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const heroRef = useRef(null);
  const cardsRef = useRef([]);
  const sectionsRef = useRef([]);

  const imagenes = [
    [img2, "Tips escolares", "#D97FDB"],
    [img, "Contenido digital", "#DEC03C"],
    [img3, "Ayuda en tu camino universitario", "#27C8F5"],
  ];

  const degree = [
    "Maestría en Educación",
    "Maestría en Ciencias de la Computación",
    "Ingeniera en Sistemas Computacionales",
    "Técnica en computación",
  ];

  const featuredContent = [
    {
      category: "Curso",
      title: "Fundamentos de Matemáticas",
      description:
        "Aprende matemáticas de forma divertida e interactiva con recursos visuales y ejercicios prácticos.",
      meta: "12 Lecciones",
      image: img,
    },
    {
      category: "Blog",
      title: "Estrategias de Aprendizaje",
      description:
        "Descubre técnicas efectivas para mejorar el rendimiento académico de tus estudiantes.",
      meta: "5 min lectura",
      image: img2,
    },
    {
      category: "Recurso",
      title: "Plantillas Educativas",
      description:
        "Descarga plantillas gratuitas para tus clases y actividades educativas digitales.",
      meta: "20+ Recursos",
      image: img3,
    },
  ];

  const testimonials = [
    {
      text: "Los recursos de Paola han transformado completamente mi forma de enseñar. Mis estudiantes están más motivados que nunca.",
      author: "María González",
      role: "Profesora de Primaria",
      initial: "M",
    },
    {
      text: "El contenido es de alta calidad y muy fácil de implementar en el aula. Recomiendo sus cursos a todos mis colegas.",
      author: "Carlos Ramírez",
      role: "Director Académico",
      initial: "C",
    },
    {
      text: "Gracias a los materiales educativos, he podido crear lecciones más dinámicas y efectivas para mis estudiantes.",
      author: "Ana Martínez",
      role: "Profesora de Secundaria",
      initial: "A",
    },
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
        <section className="hero-section" ref={heroRef}>
          <div className="hero-inner">
            <div className="hero-content">
              <span className="hero-tag">Educación Digital Innovadora</span>
              <h1 className="hero-title">
                Hola, soy <span className="hero-name">Paola Cortez</span>
              </h1>
              <p className="hero-description">
                Aquí encontrarás un espacio dedicado al aprendizaje, la
                creatividad y el intercambio de ideas.
              </p>
              <div className="hero-cta">
                <a href="#cursos" className="btn btn-primary">
                  Explorar Cursos
                </a>
                <a href="#contacto" className="btn btn-secondary">
                  Ver Blog
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-cards">
                {imagenes.map((image, index) => (
                  <div key={index} ref={(el) => (cardsRef.current[index] = el)}>
                    <CardHeader
                      image={image[0]}
                      text={image[1]}
                      color={image[2]}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          className="about-section section"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <div className="about-content">
            <div className="about-image animate-on-scroll">
              <img src={img4} alt="Paola Cortez" />
            </div>
            <div className="about-text">
              <div className="section-title animate-on-scroll">
                <p className="section-subtitle">Sobre Mí</p>
                <h2>Transformando la Educación Digital</h2>
              </div>
              <div className="animate-on-scroll">
                <p>
                  Soy Paola Cortez, apasionada por la educación y comprometida
                  con la formación integral de estudiantes universitarios. En
                  esta plataforma, podrás acceder a mis publicaciones
                  académicas, explorar recursos didácticos digitales que
                  facilitan tu aprendizaje, y descubrir los cursos diseñados
                  especialmente para tu crecimiento profesional.
                </p>
                <p>
                  Además, ofrezco servicios de asesoría personalizada para
                  ayudarte a alcanzar tus metas académicas y resolver tus dudas.
                  Este espacio es para ti: un lugar donde el conocimiento se
                  comparte, las inquietudes se resuelven y el aprendizaje se
                  transforma.
                </p>
              </div>
            </div>
          </div>
          <div className="grid-academico">
            <h2>Grados Académicos</h2>
            <div className="stats-grid animate-on-scroll">
              {degree.map((deg, index) => (
                <div key={index} className="stat-item">
                  <h3 className="stat-value">{deg}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Content Section */}
        <section
          className="featured-section section"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <div className="section-title animate-on-scroll">
            <p className="section-subtitle">Contenido Destacado</p>
            <h2>Recursos Educativos Populares</h2>
          </div>

          <div className="content-grid">
            {featuredContent.map((content, index) => (
              <div key={index} className="content-card animate-on-scroll">
                <div className="content-card-image">
                  <img
                    src={content.image.src || content.image}
                    alt={content.title}
                  />
                </div>
                <div className="content-card-body">
                  <span className="content-card-category">
                    {content.category}
                  </span>
                  <h3 className="content-card-title">{content.title}</h3>
                  <p className="content-card-description">
                    {content.description}
                  </p>
                  <div className="content-card-footer">
                    <span className="card-meta">{content.meta}</span>
                    <a
                      href="#cursos"
                      className="btn btn-secondary"
                      style={{ padding: "0.5rem 1rem", fontSize: "0.875rem" }}
                    >
                      Ver más
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          className="testimonials-section section"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <div className="section-title animate-on-scroll">
            <p className="section-subtitle">Testimonios</p>
            <h2>Lo Que Dicen Los Educadores</h2>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card animate-on-scroll">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.initial}</div>
                  <div className="author-info">
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="cta-section"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <div className="cta-content animate-on-scroll">
            <h2>¿Listo para Transformar tu Enseñanza?</h2>
            <p>
              Únete a cientos de educadores que ya están creando experiencias de
              aprendizaje extraordinarias.
            </p>
            <div className="cta-buttons">
              <a href="#cursos" className="btn btn-white">
                Comenzar Ahora
              </a>
              <a href="#contacto" className="btn btn-secondary">
                Más Información
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
