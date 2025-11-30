import {useState, useEffect} from "react";
import logo from "./assets/logo1.png";
import background from "./assets/background.webp";
import couple_image from "./assets/cuplu_caricatura.jpg"
import dog_image from "./assets/image2.jpg"
import "./App.css";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState(null);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const openModal = (img) => {
        setModalImage(img);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setModalImage(null);
    };


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

    const collections = [
        {
            img: couple_image,
            title: "Caricatura de cuplu",
        },
        {
            img: dog_image,
            title: "Caricatura cu cel mai bun prieten",
        },
        {
            img: couple_image,
            title: "Caricatura haioasa",
        },
        {
            img: dog_image,
            title: "Caricatura de grup",
        }
    ];

    return (
        <>
            {/* Navbar */}
            <header className="header">
                <nav className="nav" id="nav-bar">
                    <div className="nav-left">
                        <img src={logo} alt="Logo" className="logo"/>
                    </div>
                    <div className={`nav-right ${menuOpen ? "open" : ""}`}>
                        <a href="#collections">Modele</a>
                        <a href="#updates">Comanda Acum</a>
                        <a href="#about">Despre Noi</a>
                        <a href="#cart" className="cart">
                            <i className="fas fa-shopping-cart"></i>
                            <span className="cart-badge">3</span>
                        </a>
                    </div>
                    <button className="menu-toggle" onClick={toggleMenu}>
                        <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                </nav>
            </header>

            {/* Hero */}
            <section className="hero" style={{backgroundImage: `url(${background})`}}>
                <div className="hero-overlay"></div>
                <div className="hero-text">
                    <h1 className="hero-title">CARICATURI CADOU</h1>
                    <p className="hero-subtitle"><br/>
                        Ofera-i Persoanei Dragi
                        <br/>
                        Un Dar Diferit</p>
                    <button className="cta-btn">
                        Shop Now
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
                <div className="scroll-indicator">
                    <i className="fas fa-chevron-down"></i>
                </div>
            </section>

            {/* Featured Collections */}
            <section className="collections" id="collections">
                <div className="cloud-text">
                    <h2>Descrierea produsului</h2>
                    <p className="section-subtitle">Ne place să transformăm ideile simple în produse originale și să
                        oferim fiecărui client o experiență
                        memorabilă. La <strong>Caricaturescu</strong>, ne face plăcere să vedem clienții fericiți,
                        reacțiile lor de până acum fiind foarte pozitive! </p>
                </div>
                <div className="collection-grid">
                    {collections.map((col, i) => (
                        <div key={i} className="collection-card" onClick={() => openModal(col.img)}>
                            <img src={col.img} alt={col.title}/>
                            <div className="overlay">
                                <h3>{col.title}</h3>
                                <p>{col.description}</p>
                                <button className="view-btn">
                                    Comanda Acum
                                    <i className="fas fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Reviews Section */}
            <section className="reviews" id="reviews">
                <div className="section-header">
                    <h2>Ce spun clienții noștri</h2>
                    <p className="section-subtitle">Feedback real de la clienți mulțumiți</p>
                </div>

                <div className="reviews-container">
                    <div className="review-card">
                        <div className="review-header">
                            <div className="reviewer-info">
                                <div className="reviewer-avatar">M</div>
                                <div className="reviewer-details">
                                    <h4>Maria Popescu</h4>
                                    <span className="review-date">15 Ianuarie 2025</span>
                                </div>
                            </div>
                            <div className="rating">
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <span className="rating-number">5.0/5</span>
                            </div>
                        </div>
                        <div className="review-body">
                            <h5 className="review-title">Cadou perfect pentru aniversare!</h5>
                            <p className="review-text">
                                Am comandat o caricatură de cuplu pentru aniversarea noastră și a fost absolut minunată!
                                Calitatea desenului este excepțională, iar detaliile sunt incredibile. Partenerul meu a
                                fost
                                extrem de emoționat. Recomand cu căldură!
                            </p>
                        </div>
                        <div className="review-footer">
                            <span className="verified"><i
                                className="fas fa-check-circle"></i> Achiziție verificată</span>
                        </div>
                    </div>

                    <div className="review-card">
                        <div className="review-header">
                            <div className="reviewer-info">
                                <div className="reviewer-avatar">A</div>
                                <div className="reviewer-details">
                                    <h4>Andrei Ionescu</h4>
                                    <span className="review-date">8 Ianuarie 2025</span>
                                </div>
                            </div>
                            <div className="rating">
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <span className="rating-number">4.5/5</span>
                            </div>
                        </div>
                        <div className="review-body">
                            <h5 className="review-title">Serviciu excelent și livrare rapidă</h5>
                            <p className="review-text">
                                Caricatura cu câinele meu a ieșit fantastic! Artistul a reușit să surprindă perfect
                                personalitatea lui. Comunicarea a fost promptă și profesională. Singura mică observație
                                ar fi că aș fi dorit o variantă digitală inclusă în preț.
                            </p>
                        </div>
                        <div className="review-footer">
                            <span className="verified"><i
                                className="fas fa-check-circle"></i> Achiziție verificată</span>
                        </div>
                    </div>

                    <div className="review-card">
                        <div className="review-header">
                            <div className="reviewer-info">
                                <div className="reviewer-avatar">E</div>
                                <div className="reviewer-details">
                                    <h4>Elena Dumitrescu</h4>
                                    <span className="review-date">2 Ianuarie 2025</span>
                                </div>
                            </div>
                            <div className="rating">
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <span className="rating-number">5.0/5</span>
                            </div>
                        </div>
                        <div className="review-body">
                            <h5 className="review-title">Cadou unic pentru familia mea</h5>
                            <p className="review-text">
                                Am comandat o caricatură de grup pentru întreaga familie și toți au fost încântați!
                                Atenția la detalii este remarcabilă - fiecare persoană a fost reprezentată perfect.
                                Este acum piesa centrală din sufrageria noastră. Mulțumim!
                            </p>
                        </div>
                        <div className="review-footer">
                            <span className="verified"><i
                                className="fas fa-check-circle"></i> Achiziție verificată</span>
                        </div>
                    </div>

                    <div className="review-card">
                        <div className="review-header">
                            <div className="reviewer-info">
                                <div className="reviewer-avatar">C</div>
                                <div className="reviewer-details">
                                    <h4>Cristian Vasile</h4>
                                    <span className="review-date">28 Decembrie 2024</span>
                                </div>
                            </div>
                            <div className="rating">
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="far fa-star"></i>
                                </div>
                                <span className="rating-number">4.0/5</span>
                            </div>
                        </div>
                        <div className="review-body">
                            <h5 className="review-title">Foarte mulțumit de rezultat</h5>
                            <p className="review-text">
                                Caricatura haioasă pe care am comandat-o pentru prietena mea a fost un succes total!
                                Stilul artistic este exact ce căutam. Procesul de comandă a fost simplu, iar echipa
                                foarte prietenoasă. O singură stea mai puțin pentru timpul de livrare puțin mai lung.
                            </p>
                        </div>
                        <div className="review-footer">
                            <span className="verified"><i
                                className="fas fa-check-circle"></i> Achiziție verificată</span>
                        </div>
                    </div>
                </div>

                <div className="overall-rating">
                    <div className="overall-score">
                        <span className="big-rating">4.6</span>
                        <div className="stars-large">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <p>Bazat pe 247 recenzii</p>
                    </div>
                </div>
            </section>

            {/* Image Modal */}
            {modalOpen && (
                <div className="modal" onClick={closeModal}>
                    <span className="modal-close">&times;</span>
                    <img className="modal-content" src={modalImage} alt="Enlarged"/>
                </div>
            )}
            <section className="newsletter" id="updates">
                <div className="newsletter-content"
                     style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <img src={logo} alt="Logo" style={{width: '300px', height: 'auto', marginBottom: '2rem'}}/>
                    <button className="order-btn">
                        Comanda Acum
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </section>


            {/* About */}
            <section className="about" id="about">
                <div className="about-content">
                    <h2>Despre Noi</h2>
                    <p>
                        Suntem o echipă pasionată de creativitate, cu o misiune clară: să aducem zâmbete și amintiri de
                        neuitat
                        prin cadouri personalizate.
                    </p>
                    <div className="features">
                        <div className="feature-item">
                            <i className="fas fa-palette"></i>
                            <h4>Design-uri unice</h4>
                            <p>Design-uri originale sub formă de caricaturi personalizate, perfecte pentru cadouri sau decor.</p>
                            <p></p>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-headset"></i>
                            <h4>Suport Clienți</h4>
                            <p>Echipa noastră este aici să te ajute cu orice întrebare sau problemă.</p>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-shipping-fast"></i>
                            <h4>Livrare Rapida</h4>
                            <p>Livrare rapida in intreaga tara</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>Caricaturescu</h4>
                        <p>Ofera un cadou diferit</p>
                    </div>
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <a href="#collections">Modele</a>
                        <a href="#updates">Comanda Acum</a>
                        <a href="#about">Despre Noi</a>
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
        </>
    );
}

export default App;