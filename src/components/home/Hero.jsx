import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Tag } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <video className="hero-video" autoPlay loop muted playsInline>
                <source src="/hero-video.mp4" type="video/mp4" />
            </video>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-title">
                    ¿Buscas carro o buscas plata?
                </h1>
                <p className="hero-subtitle">
                    De una y sin tanta lata.
                </p>

                <div className="hero-buttons">
                    <Link to="/buy" className="hero-btn buy-btn">
                        <Search size={20} />
                        Quiero comprar una nave
                    </Link>
                    <Link to="/sell" className="hero-btn sell-btn">
                        <Tag size={20} />
                        Quiero vender mi nave
                    </Link>
                </div>

                <div className="hero-buttons-secondary fade-in delay-200">
                    <Link to="/contrato" className="hero-btn contract-btn">
                        <span className="bg-yellow-400 w-2 h-2 rounded-full animate-pulse mr-2"></span>
                        Generar Contrato de Venta Gratis
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
