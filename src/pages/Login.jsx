import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/layout/Navbar';
import { Mail, Lock, LogIn, AlertCircle } from 'lucide-react';
import './Auth.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(email, password);
            navigate('/');
        } catch (err) {
            console.error(err);
            setError('Error al iniciar sesión. Verifica tus credenciales.');
        }
        setLoading(false);
    }

    return (
        <>
            <Navbar />
            <div className="auth-container">
                <div className="auth-card">
                    <div className="auth-header">
                        <h2>Ingresar</h2>
                        <p>Bienvenido de nuevo, parcero.</p>
                    </div>

                    {error && <div className="auth-error"><AlertCircle size={16} /> {error}</div>}

                    <form onSubmit={handleSubmit} className="auth-form">
                        <div className="input-group">
                            <Mail className="input-icon" size={20} />
                            <input
                                type="email"
                                placeholder="Correo electrónico"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <Lock className="input-icon" size={20} />
                            <input
                                type="password"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="btn-primary auth-submit" disabled={loading}>
                            {loading ? 'Cargando...' : <><LogIn size={20} /> Iniciar Sesión</>}
                        </button>
                    </form>

                    <div className="auth-footer">
                        <p>¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
