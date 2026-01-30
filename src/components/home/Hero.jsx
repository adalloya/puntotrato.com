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

                <div className="mt-8 flex justify-center fade-in delay-200">
                    <Link
                        to="/contrato"
                        className="group relative inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    >
                        <span className="bg-gradient-to-r from-accent-primary to-accent-secondary w-2 h-2 rounded-full animate-pulse"></span>
                        <span>¡Nuevo! Generador de Contrato de Venta Gratis</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
