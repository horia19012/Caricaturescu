import {useEffect} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Comanda from "./components/comanda/Comanda.jsx";
import Home from "./components/home/Home.jsx";

function App() {
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
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/comanda" element={<Comanda/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;