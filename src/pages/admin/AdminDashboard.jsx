import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { db } from '../../firebase';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { Trash2, LogOut, RefreshCw, Eye, EyeOff, CheckCircle, XCircle, UserX, UserCheck } from 'lucide-react';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('listings');
    const [listings, setListings] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const fetchListings = async () => {
        setLoading(true);
        if (!db) return setLoading(false);
        try {
            const querySnapshot = await getDocs(collection(db, 'listings'));
            const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setListings(data);
        } catch (error) {
            console.error("Error fetching listings:", error);
        } finally {
            setLoading(false);
        }
    };

    const fetchUsers = async () => {
        setLoading(true);
        if (!db) return setLoading(false);
        try {
            const querySnapshot = await getDocs(collection(db, 'users'));
            const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setUsers(data);
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (activeTab === 'listings') fetchListings();
        else fetchUsers();
    }, [activeTab]);

    const handleLogout = () => {
        localStorage.removeItem('adminAuthenticated');
        navigate('/admin/login');
    };

    // --- Listing Actions ---
    const handleDeleteListing = async (id) => {
        if (window.confirm('¿Eliminar publicación permanentemente?')) {
            try {
                await deleteDoc(doc(db, 'listings', id));
                setListings(listings.filter(l => l.id !== id));
            } catch (e) { alert("Error al eliminar"); }
        }
    };

    const toggleListingStatus = async (id, currentStatus) => {
        const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
        try {
            await updateDoc(doc(db, 'listings', id), { status: newStatus });
            setListings(listings.map(l => l.id === id ? { ...l, status: newStatus } : l));
        } catch (e) { alert("Error actualizando estado"); }
    };

    const toggleListingVisibility = async (id, hidden) => {
        try {
            await updateDoc(doc(db, 'listings', id), { hidden: !hidden });
            setListings(listings.map(l => l.id === id ? { ...l, hidden: !hidden } : l));
        } catch (e) { alert("Error actualizando visibilidad"); }
    };

    // --- User Actions ---
    const handleDeleteUser = async (id) => {
        if (window.confirm('¿Eliminar usuario de la Base de Datos? (Nota: Esto no borra la cuenta de Auth)')) {
            try {
                await deleteDoc(doc(db, 'users', id));
                setUsers(users.filter(u => u.id !== id));
            } catch (e) { alert("Error al eliminar usuario"); }
        }
    };

    const toggleUserStatus = async (id, currentStatus) => {
        const newStatus = currentStatus === 'banned' ? 'active' : 'banned';
        try {
            await updateDoc(doc(db, 'users', id), { status: newStatus });
            setUsers(users.map(u => u.id === id ? { ...u, status: newStatus } : u));
        } catch (e) { alert("Error actualizando usuario"); }
    };

    return (
        <>
            <Navbar />
            <div className="admin-dashboard-container">
                <div className="container">
                    <div className="admin-header">
                        <h1>Panel de Control</h1>
                        <button onClick={handleLogout} className="btn-secondary logout-btn">
                            <LogOut size={18} /> Salir
                        </button>
                    </div>

                    <div className="admin-tabs">
                        <button
                            className={`tab-btn ${activeTab === 'listings' ? 'active' : ''}`}
                            onClick={() => setActiveTab('listings')}
                        >
                            Anuncios ({listings.length})
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'users' ? 'active' : ''}`}
                            onClick={() => setActiveTab('users')}
                        >
                            Usuarios ({users.length})
                        </button>
                    </div>

                    <div className="admin-content-card">
                        <div className="table-header-actions">
                            <h2>{activeTab === 'listings' ? 'Gestión de Vehículos' : 'Gestión de Usuarios'}</h2>
                            <button onClick={activeTab === 'listings' ? fetchListings : fetchUsers} className="refresh-btn">
                                <RefreshCw size={18} /> Actualizar
                            </button>
                        </div>

                        {loading ? <p className="loading-text">Cargando...</p> : (
                            <div className="table-responsive">
                                <table className="admin-table">
                                    <thead>
                                        {activeTab === 'listings' ? (
                                            <tr>
                                                <th>Ref</th>
                                                <th>Vehículo</th>
                                                <th>Vendedor</th>
                                                <th>Estado</th>
                                                <th>Visibilidad</th>
                                                <th>Acciones</th>
                                            </tr>
                                        ) : (
                                            <tr>
                                                <th>ID</th>
                                                <th>Usuario</th>
                                                <th>Email</th>
                                                <th>Rol</th>
                                                <th>Estado</th>
                                                <th>Acciones</th>
                                            </tr>
                                        )}
                                    </thead>
                                    <tbody>
                                        {activeTab === 'listings' ? listings.map(l => (
                                            <tr key={l.id} className={l.hidden ? 'row-hidden' : ''}>
                                                <td>
                                                    <img
                                                        src={l.images?.[0] || 'https://via.placeholder.com/40'}
                                                        className="listing-mini-thumb" alt=""
                                                    />
                                                </td>
                                                <td>
                                                    <div className="cell-content">
                                                        <strong>{l.brand} {l.model}</strong>
                                                        <small>{l.year} • ${Number(l.price).toLocaleString()}</small>
                                                    </div>
                                                </td>
                                                <td>{l.sellerName || l.userId || 'N/A'}</td>
                                                <td>
                                                    <span className={`status-badge ${l.status === 'active' ? 'active' : 'inactive'}`}>
                                                        {l.status || 'active'}
                                                    </span>
                                                </td>
                                                <td>{l.hidden ? 'Oculto' : 'Visible'}</td>
                                                <td>
                                                    <div className="action-buttons">
                                                        <button
                                                            className="action-btn"
                                                            onClick={() => toggleListingStatus(l.id, l.status)}
                                                            title={l.status === 'active' ? 'Desactivar' : 'Activar'}
                                                        >
                                                            {l.status === 'active' ? <XCircle size={18} /> : <CheckCircle size={18} />}
                                                        </button>
                                                        <button
                                                            className="action-btn"
                                                            onClick={() => toggleListingVisibility(l.id, l.hidden)}
                                                            title={l.hidden ? 'Mostrar' : 'Ocultar'}
                                                        >
                                                            {l.hidden ? <Eye size={18} /> : <EyeOff size={18} />}
                                                        </button>
                                                        <button className="action-btn delete-btn" onClick={() => handleDeleteListing(l.id)}>
                                                            <Trash2 size={18} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )) : users.map(u => (
                                            <tr key={u.id} className={u.status === 'banned' ? 'row-banned' : ''}>
                                                <td><small>{u.id.substring(0, 8)}...</small></td>
                                                <td><strong>{u.displayName || 'Sin Nombre'}</strong></td>
                                                <td>{u.email}</td>
                                                <td>{u.role || 'user'}</td>
                                                <td>
                                                    <span className={`status-badge ${u.status === 'banned' ? 'inactive' : 'active'}`}>
                                                        {u.status || 'active'}
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="action-buttons">
                                                        <button
                                                            className="action-btn"
                                                            onClick={() => toggleUserStatus(u.id, u.status)}
                                                            title={u.status === 'banned' ? 'Reactivar' : 'Banear'}
                                                        >
                                                            {u.status === 'banned' ? <UserCheck size={18} /> : <UserX size={18} />}
                                                        </button>
                                                        <button className="action-btn delete-btn" onClick={() => handleDeleteUser(u.id)}>
                                                            <Trash2 size={18} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AdminDashboard;
