import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

import img from "../assets/logo-1.webp"

function Navbar() {
    const pages = [
        { name: 'Inicio', path: '/' },
        { name: 'Blog', path: '/blog' },
        { name: 'Biblioteca', path: '/biblioteca' },
        { name: 'Cursos', path: '/cursos' },
        { name: 'Contactame', path: '/contactame' }
    ];

  return (
    <nav className='navbar'>
        <div className="navbar-inner">
            <div className="imge-side">
                <img src={img} alt="" />
            </div>
            <div className="options-side">
                {pages.map((page) => (
                    <Link key={page.name} to={page.path} className="nav-link">
                        {page.name}
                    </Link>
                ))}
            </div>
        </div>
    </nav>
  );
}

export default Navbar;