import React from 'react'
import '../style/x_style.css';
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Getstart() {
    const navigate = useNavigate();

    return (
        <section className="x_hero_section">
            <div className="x_hero_overlay"></div>

            <div className="x_hero_content">
                <h5 className="x_hero_subtitle">
                    Cinematic Dark Mode
                </h5>

                <p className="x_hero_text">
                    Immerse yourself in a cinema-grade dark interface designed for focus
                    and battery efficiency.
                </p>

                <button
                    className="x_hero_btn"
                    onClick={() => navigate("/main")}
                >
                    Get Started <FaArrowRight className="ms-2" />
                </button>

            </div>
        </section>
    )
}

export default Getstart