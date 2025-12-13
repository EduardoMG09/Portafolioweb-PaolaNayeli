import { useState, useEffect } from "react"
import "../styles/Navbar.css"
import img from "../assets/logo-1.webp"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const pages = [
    { name: "Inicio", path: "#inicio" },
    { name: "Sobre Mí", path: "#sobre-mi" },
    { name: "Contenido", path: "#contenido" },
    { name: "Contacto", path: "#contacto" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        <a href="#inicio" className="logo-side">
          <img src={img.src || img} alt="Paola Cortez Logo" />
        </a>

        <div className={`options-side ${mobileMenuOpen ? "open" : ""}`}>
          {pages.map((page) => (
            <a key={page.name} href={page.path} className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              {page.name}
            </a>
          ))}
          <button className="cta-btn" onClick={() => setMobileMenuOpen(false)}>
            Comenzar
          </button>
        </div>

        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
