import {HashLink} from "react-router-hash-link";
import "./Footer.css"
export default function Footer() {


    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Caricaturescu</h4>
                    <p>Ofera un cadou diferit</p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <HashLink smooth to="/#modele">Modele</HashLink>
                    <HashLink smooth to="/#comanda">Comanda Acum</HashLink>
                    <HashLink smooth to="/#despre_noi">Despre Noi</HashLink>
                </div>
                <div className="footer-section">
                    <h4>Urmareste-ne</h4>
                    <div className="socials">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-pinterest"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 Caricaturescu. Toate drepturile rezervate.</p>
            </div>
        </footer>
    );
}