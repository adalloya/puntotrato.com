import React from 'react';
import { Link } from 'react-router-dom';
import './CitySelector.css';

const cities = [
    {
        name: 'Bogotá D.C.',
        image: 'https://images.unsplash.com/photo-1571214227814-1d898c62c95e?q=80&w=800&auto=format&fit=crop',
        slug: 'Bogotá D.C.'
    },
    {
        name: 'Medellín',
        image: 'https://images.unsplash.com/photo-1565518206191-4d008b4791e2?q=80&w=800&auto=format&fit=crop',
        slug: 'Antioquia'
    },
    {
        name: 'Cali',
        image: 'https://images.unsplash.com/photo-1583093952317-0d500735ba70?q=80&w=800&auto=format&fit=crop',
        slug: 'Valle del Cauca'
    },
    {
        name: 'Barranquilla',
        image: 'https://images.unsplash.com/photo-1628795856488-84224b8923a1?q=80&w=800&auto=format&fit=crop',
        slug: 'Atlántico'
    },
    {
        name: 'Popayán',
        image: 'https://images.unsplash.com/photo-1582294132104-1889098ac20f?q=80&w=800&auto=format&fit=crop',
        slug: 'Cauca'
    }
];

const CitySelector = () => {
    return (
        <section className="cities-section">
            <div className="container">
                <h3 className="section-title">Busca en tu Ciudad</h3>
                <div className="cities-grid">
                    {cities.map((city, index) => (
                        <Link
                            to={`/buy?location=${city.slug}`}
                            key={index}
                            className="city-card"
                            style={{ backgroundImage: `url(${city.image})` }}
                        >
                            <div className="city-overlay"></div>
                            <span className="city-name">{city.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CitySelector;
