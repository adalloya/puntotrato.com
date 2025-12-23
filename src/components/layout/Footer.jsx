import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <img src="/logo.png" alt="PuntoTrato.com" className="footer-logo" />
                    <p>Tu plataforma de confianza para comprar y vender vehículos en Colombia.</p>
                </div>

                <div className="footer-links">
                    <h3>Navegación</h3>
                    <Link to="/buy">Comprar</Link>
                    <Link to="/sell">Vender</Link>
                    <Link to="/login">Ingresar</Link>
                </div>

                <div className="footer-contact">
                    <h3>Contacto</h3>
                    <p><Mail size={16} /> contacto@puntotrato.com</p>
                    <p><Phone size={16} /> +57 300 123 4567</p>
                    <p><MapPin size={16} /> Bogotá, Colombia</p>
                </div>

                <div className="footer-social">
                    <h3>Síguenos</h3>
                    <div className="social-icons">
                        <a href="#"><Facebook /></a>
                        <a href="#"><Instagram /></a>
                        <a href="#"><Twitter /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} PuntoTrato.com - Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
