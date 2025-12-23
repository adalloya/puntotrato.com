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
                    ¿Buscas <span className="highlight-text">carro</span> o buscas <span className="highlight-text">plata</span>?
                </h1>
                <p className="hero-subtitle">
                    PuntoTrato: De una y sin tanta lata.
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
            </div>
        </section>
    );
};

export default Hero;
