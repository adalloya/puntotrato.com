import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Menu, X, Car, UserCircle, LogOut } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
            setIsOpen(false);
        } catch (error) {
            console.error('Failed to log out', error);
        }
    };

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src="/logo.png" alt="PuntoTrato.com" style={{ height: '40px' }} />
                </Link>

                <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </div>

                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <Link to="/buy" className="nav-link" onClick={() => setIsOpen(false)}>Comprar</Link>
                    <Link to="/sell" className="nav-link" onClick={() => setIsOpen(false)}>Vender</Link>

                    {currentUser ? (
                        <div className="user-menu" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <span style={{ fontWeight: 'bold', color: 'var(--text-dark)' }}>
                                {currentUser.displayName || (currentUser.email ? currentUser.email.split('@')[0] : 'Usuario')}
                            </span>
                            <button className="nav-link btn-login" onClick={handleLogout} style={{ background: '#ffebee', color: '#c62828', border: 'none' }}>
                                <LogOut size={18} /> Salir
                            </button>
                        </div>
                    ) : (
                        <Link to="/login" className="nav-link btn-login" onClick={() => setIsOpen(false)}>
                            <UserCircle size={18} /> Ingresar
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
