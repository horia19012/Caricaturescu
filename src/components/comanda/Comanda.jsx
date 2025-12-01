import { useState } from "react";
import Navbar from "../navbar/Navbar.jsx";
import "./Comanda.css";

import brownFrame from "/src/assets/brown.webp";
import blackFrame from "/src/assets/black.jpg";
import whiteFrame from "/src/assets/white.webp";

export default function Comanda() {
    const [formData, setFormData] = useState({
        prenume: "",
        nume: "",
        email: "",
        confirmEmail: "",
        telefon: "",
        judet: "",
        localitate: "",
        strada: "",
        numar: "",
        codPostal: "",
        bloc: "",
        scara: "",
        etaj: "",
        apartament: "",
        file: null,
        previewUrl: null,
        rama: "alb",
    });

    const [emailError, setEmailError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prev) => ({
                ...prev,
                file,
                previewUrl: URL.createObjectURL(file),
            }));
        }
    };

    const handleRamaChange = (e) => {
        setFormData((prev) => ({ ...prev, rama: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.email !== formData.confirmEmail) {
            setEmailError("Emailurile nu coincid!");
            return;
        }
        setEmailError("");
        console.log("Form submitted:", formData);
        alert("Comanda a fost trimisă!");
        setFormData({
            prenume: "",
            nume: "",
            email: "",
            confirmEmail: "",
            telefon: "",
            judet: "",
            localitate: "",
            strada: "",
            numar: "",
            codPostal: "",
            bloc: "",
            scara: "",
            etaj: "",
            apartament: "",
            file: null,
            previewUrl: null,
            rama: "alb",
        });
    };

    return (
        <>
            <Navbar />
            <div className="comanda-container">
                <h1>Plasează Comanda</h1>
                <p>Completează formularul de mai jos pentru a plasa comanda.</p>

                <form onSubmit={handleSubmit} className="comanda-form cloud-container">
                    <div className="form-content">
                        <div className="form-inputs">
                            <div className="form-row">
                                <input
                                    type="text"
                                    name="prenume"
                                    placeholder="Prenume *"
                                    value={formData.prenume}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="nume"
                                    placeholder="Nume *"
                                    value={formData.nume}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-row">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email *"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="email"
                                    name="confirmEmail"
                                    placeholder="Confirmă Email *"
                                    value={formData.confirmEmail}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {emailError && <p className="error-msg">{emailError}</p>}

                            <input
                                type="tel"
                                name="telefon"
                                placeholder="Număr de telefon *"
                                value={formData.telefon}
                                onChange={handleChange}
                                required
                            />

                            <div className="form-row">
                                <input
                                    type="text"
                                    name="judet"
                                    placeholder="Județul *"
                                    value={formData.judet}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="localitate"
                                    placeholder="Localitatea *"
                                    value={formData.localitate}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-row">
                                <input
                                    type="text"
                                    name="strada"
                                    placeholder="Strada *"
                                    value={formData.strada}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="numar"
                                    placeholder="Numărul *"
                                    value={formData.numar}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <input
                                type="text"
                                name="codPostal"
                                placeholder="Cod poștal *"
                                value={formData.codPostal}
                                onChange={handleChange}
                                required
                            />

                            <div className="form-row">
                                <input
                                    type="text"
                                    name="bloc"
                                    placeholder="Bloc (clădire)"
                                    value={formData.bloc}
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    name="scara"
                                    placeholder="Scara (intrare)"
                                    value={formData.scara}
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    name="etaj"
                                    placeholder="Etaj"
                                    value={formData.etaj}
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    name="apartament"
                                    placeholder="Apartament"
                                    value={formData.apartament}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-row">
                                <label>Culoare ramă:</label>
                                <select value={formData.rama} onChange={handleRamaChange}>
                                    <option value="alb">Alb</option>
                                    <option value="negru">Negru</option>
                                    <option value="maro">Maro</option>
                                </select>
                            </div>

                        </div>

                        <div className="form-image">
                            <h3>Încarcă imagine pentru comandă</h3>
                            <input type="file" onChange={handleFileChange} />
                            {formData.previewUrl && (
                                <div
                                    className="preview-wrapper"
                                    style={{
                                        backgroundImage:
                                            formData.rama === "alb"
                                                ? `url(${whiteFrame})`
                                                : formData.rama === "negru"
                                                    ? `url(${blackFrame})`
                                                    : `url(${brownFrame})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        border: "12px solid transparent", // to show the frame texture
                                    }}
                                >
                                    <img
                                        src={formData.previewUrl}
                                        alt="Preview"
                                        className="preview-image"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    <button type="submit" className="order-btn">
                        Trimite Comanda
                    </button>
                </form>
            </div>
        </>
    );
}
