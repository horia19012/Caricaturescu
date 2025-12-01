import { useState, useEffect } from "react";
import logo from "/src/assets/logo1.png";
import "./Navbar.css";
import { HashLink } from 'react-router-hash-link';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        const handleScroll = () => {
            const nav = document.getElementById("nav-bar");
            const alpha = Math.min(window.scrollY / 150, 1);
            if (nav) {
                nav.style.backgroundColor = `rgba(255, 255, 255, ${alpha})`;
                nav.style.boxShadow = `0 4px 20px rgba(0,0,0,${0.2 * alpha})`;
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="header">
            <nav className="nav" id="nav-bar">
                <div className="nav-left">
                    <img src={logo} alt="Logo" className="logo" />
                </div>

                <div className={`nav-right ${menuOpen ? "open" : ""}`}>
                    <HashLink smooth to="/#modele">Modele</HashLink>
                    <HashLink smooth to="/#comanda">Comanda Acum</HashLink>
                    <HashLink smooth to="/#despre_noi">Despre Noi</HashLink>

                    <a href="#cart" className="cart">
                        <i className="fas fa-shopping-cart"></i>
                        <span className="cart-badge">3</span>
                    </a>
                </div>

                <button className="menu-toggle" onClick={toggleMenu}>
                    <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
                </button>
            </nav>
        </header>
    );
}
