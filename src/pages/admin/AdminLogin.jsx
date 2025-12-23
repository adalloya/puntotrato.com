import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Lock } from 'lucide-react';
import './AdminLogin.css';

const AdminLogin = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple password check - in production this should be more secure
        // Default password if env var is missing: 'admin123'
        const adminPass = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123';

        if (password === adminPass) {
            localStorage.setItem('adminAuthenticated', 'true');
            navigate('/admin/dashboard');
        } else {
            setError('Contraseña incorrecta');
        }
    };

    return (
        <>
            <Navbar />
            <div className="admin-login-container">
                <div className="admin-login-card">
                    <div className="admin-icon-wrapper">
                        <Lock size={40} color="#0073e6" />
                    </div>
                    <h2>Administración</h2>
                    <p>Ingresa la contraseña maestra para continuar</p>

                    <form onSubmit={handleLogin} className="admin-form">
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="admin-input"
                        />
                        {error && <p className="error-message">{error}</p>}
                        <button type="submit" className="btn-primary admin-btn">
                            Ingresar
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AdminLogin;
