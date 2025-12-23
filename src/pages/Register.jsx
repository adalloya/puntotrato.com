import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/layout/Navbar';
import { Mail, Lock, User, UserPlus, AlertCircle } from 'lucide-react';
import './Auth.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        if (e) e.preventDefault();
        console.log("Form submitted via button! Values:", { email, password, confirmPassword });

        if (password !== confirmPassword) {
            return setError('Las contraseñas no coinciden.');
        }

        if (password.length < 6) {
            return setError('La contraseña debe tener al menos 6 caracteres.');
        }

        try {
            setError('');
            setLoading(true);
            await signup(email, password, name);
            navigate('/');
        } catch (err) {
            console.error(err);
            setError('Error al crear cuenta. ' + err.message);
        }
        setLoading(false);
    }

    return (
        <>
            <Navbar />
            <div className="auth-container">
                <div className="auth-card">
                    <div className="auth-header">
                        <h2>Crear Cuenta</h2>
                        <p>Únete para comprar o vender tu nave.</p>
                    </div>

                    {error && <div className="auth-error"><AlertCircle size={16} /> {error}</div>}

                    <div className="auth-form">
                        <div className="input-group">
                            <User className="input-icon" size={20} />
                            <input
                                type="text"
                                placeholder="Nombre completo"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

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

                        <div className="input-group">
                            <Lock className="input-icon" size={20} />
                            <input
                                type="password"
                                placeholder="Confirmar Contraseña"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button type="button" onClick={handleSubmit} className="btn-primary auth-submit" disabled={loading}>
                            {loading ? 'Creando cuenta...' : <><UserPlus size={20} /> Registrarse</>}
                        </button>
                    </div>

                    <div className="auth-footer">
                        <p>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
