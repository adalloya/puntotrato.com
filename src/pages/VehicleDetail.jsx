import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ListingCard from '../components/buy/ListingCard';
import { MapPin, Gauge, Fuel, Calendar, Shield, CreditCard, ChevronLeft } from 'lucide-react';
import './VehicleDetail.css';

// Using same dummy data for demo purposes (ideally this comes from a service)
const dummyListings = [
    {
        id: 1,
        type: 'car',
        brand: 'Mazda',
        model: '3 Grand Touring',
        year: 2021,
        price: 85000000,
        mileage: 25000,
        condition: 'Excelente',
        fuel: 'Gasolina',
        transmission: 'Automática',
        armor: 'Ninguno',
        plateLastDigit: 5,
        location: 'Bogotá D.C.',
        description: 'Mazda 3 Grand Touring en perfecto estado. Único dueño, mantenimientos en concesionario. Pantalla táctil, sensores de reversa, cuero.',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        images: [
            'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80', // Front
            'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80', // Side
            'https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&q=80', // Interior
        ]
    },
    {
        id: 2,
        type: 'car',
        brand: 'Renault',
        model: 'Duster',
        year: 2019,
        price: 52000000,
        mileage: 45000,
        condition: 'Bueno',
        fuel: 'Gasolina',
        transmission: 'Mecánica',
        armor: 'Ninguno',
        plateLastDigit: 2,
        location: 'Antioquia',
        image: 'https://images.unsplash.com/photo-1626075678385-2e0691764eb8?auto=format&fit=crop&q=80'
    },
    {
        id: 3,
        type: 'moto',
        brand: 'Yamaha',
        model: 'MT-09',
        year: 2023,
        price: 42000000,
        mileage: 5000,
        condition: 'Excelente',
        fuel: 'Gasolina',
        transmission: 'Mecánica',
        armor: 'Ninguno',
        plateLastDigit: 9,
        location: 'Cundinamarca',
        image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80'
    },
    {
        id: 4,
        type: 'car',
        brand: 'Toyota',
        model: 'Fortuner',
        year: 2018,
        price: 160000000,
        mileage: 60000,
        condition: 'Excelente',
        fuel: 'Diesel',
        location: 'Valle del Cauca',
        image: 'https://images.unsplash.com/photo-1626888206841-ba3c87428489?auto=format&fit=crop&q=80'
    }
];

const VehicleDetail = () => {
    const { id } = useParams();
    const [listing, setListing] = useState(null);
    const [recommendations, setRecommendations] = useState([]);
    const [selectedImage, setSelectedImage] = useState('');

    useEffect(() => {
        // Find listing by ID
        const found = dummyListings.find(l => l.id === parseInt(id));
        setListing(found);
        if (found) {
            setSelectedImage(found.image);

            // Simple Recommendation Engine
            // Prioritize: Same Model > Same Brand > Similar Price
            const recs = dummyListings
                .filter(l => l.id !== found.id)
                .sort((a, b) => {
                    let scoreA = 0;
                    let scoreB = 0;

                    if (a.model === found.model) scoreA += 10;
                    if (b.model === found.model) scoreB += 10;

                    if (a.brand === found.brand) scoreA += 5;
                    if (b.brand === found.brand) scoreB += 5;

                    if (Math.abs(a.price - found.price) < 10000000) scoreA += 3;
                    if (Math.abs(b.price - found.price) < 10000000) scoreB += 3;

                    return scoreB - scoreA;
                })
                .slice(0, 3); // Top 3

            setRecommendations(recs);
        }
    }, [id]);

    if (!listing) return <div>Cargando...</div>;

    const formatPrice = (price) => {
        return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(price);
    };

    return (
        <>
            <Navbar />
            <div className="container detail-container">
                <Link to="/buy" className="back-link"><ChevronLeft size={20} /> Volver al listado</Link>

                <div className="detail-grid">
                    {/* Left Column: Images */}
                    <div className="detail-images">
                        <div className="main-image watermarked">
                            <img src={selectedImage} alt={listing.model} />
                            <img src="/logo.png" className="watermark-overlay" alt="Watermark" />
                        </div>
                        <div className="image-thumbnails">
                            <img src={listing.image} onClick={() => setSelectedImage(listing.image)} className={selectedImage === listing.image ? 'active' : ''} />
                            {listing.images && listing.images.map((img, idx) => (
                                <img key={idx} src={img} onClick={() => setSelectedImage(img)} className={selectedImage === img ? 'active' : ''} />
                            ))}
                            {/* Fallback for dummy data without extra images */}
                            {!listing.images && [1, 2, 3].map(i => (
                                <div key={i} className="thumbnail-placeholder" onClick={() => alert('Solo demostración')}>Foto {i}</div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Info */}
                    <div className="detail-info">
                        <h1 className="detail-title">{listing.brand} {listing.model}</h1>
                        <div className="detail-price">{formatPrice(listing.price)}</div>

                        <div className="detail-location">
                            <MapPin size={18} /> {listing.location}
                        </div>

                        <div className="detail-specs">
                            <div className="spec-row">
                                <span><Calendar size={16} /> Año</span>
                                <strong>{listing.year}</strong>
                            </div>
                            <div className="spec-row">
                                <span><Gauge size={16} /> Kilometraje</span>
                                <strong>{listing.mileage.toLocaleString()} km</strong>
                            </div>
                            <div className="spec-row">
                                <span><Fuel size={16} /> Combustible</span>
                                <strong>{listing.fuel}</strong>
                            </div>
                            <div className="spec-row">
                                <span>Transmisión</span>
                                <strong>{listing.transmission || 'No especificado'}</strong>
                            </div>
                            <div className="spec-row">
                                <span><Shield size={16} /> Blindaje</span>
                                <strong>{listing.armor || 'No especificado'}</strong>
                            </div>
                            <div className="spec-row">
                                <span>Placa (Último dígito)</span>
                                <strong>{listing.plateLastDigit || 'X'}</strong>
                            </div>
                            <div className="spec-row">
                                <span>Estado</span>
                                <strong className="condition-badge">{listing.condition}</strong>
                            </div>
                        </div>

                        <button className="btn-primary contact-btn">
                            Contactar al Vendedor
                        </button>
                    </div>
                </div>

                <div className="detail-description">
                    <h3>Descripción</h3>
                    <p>{listing.description || 'Sin descripción detallada por el momento.'}</p>
                </div>

                {/* Recommendations */}
                <div className="recommendations-section">
                    <h3>Vehículos Similares</h3>
                    <div className="listings-grid">
                        {recommendations.map(rec => (
                            <ListingCard key={rec.id} listing={rec} />
                        ))}
                    </div>
                </div>
            </div>
            <div style={{ marginTop: 'auto' }}>
                <Footer />
            </div>
        </>
    );
};

export default VehicleDetail;
