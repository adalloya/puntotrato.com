import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Tag } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-title">
                    ¡Bienvenido <span className="highlight-text">parcero</span>!
                </h1>
                <p className="hero-subtitle">
                    Encuentra tu próxima nave o vende tu gajo al mejor precio.
                    <br />Sin tanto cuento, rápido y seguro.
                </p>

                <div className="hero-buttons">
                    <Link to="/buy" className="hero-btn buy-btn">
                        <Search size={20} />
                        Quiero comprar una nave
                    </Link>
                    <Link to="/sell" className="hero-btn sell-btn">
                        <Tag size={20} />
                        Quiero vender mi carro/moto
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
