import "../styles/Footer.css"
import img from "../assets/logo-verne2.webp"
import { Link } from "react-router-dom"

function Footer() {
  const socialLinks = [
    {
      name: "YouTube",
      url: "https://www.youtube.com/@PaolaCortez07",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@paola.herrera762?_r=1&_t=ZS-92yaxCS8qAL",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
    },
    {
      name: "Email",
      url: "mailto:contacto@paolacortez.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
  ]

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <img src={img} alt="Paola Cortez logotipo" className="footer-logo" />
          </div>
          <div className="footer-about">
            <h3>Paola Cortez</h3>
            <p>
              Creadora de contenido educativo enfocado en tecnología e ingeniería de TI. Transformando el aprendizaje
              digital.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Recursos</h4>
              <Link to="/">Inicio</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/biblioteca">Biblioteca</Link>
              <Link to="/cursos">Cursos</Link>
            </div>
          </div>

          <div className="footer-social">
            <h4>Sígueme</h4>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Paola Cortez. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
