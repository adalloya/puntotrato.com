import React from 'react';
import { Link } from 'react-router-dom';
import './CitySelector.css';

import bogotaImg from '../../assets/images/cities/bogota.jpg';
import medellinImg from '../../assets/images/cities/medellin.jpg';
import caliImg from '../../assets/images/cities/cali.png';
import barranquillaImg from '../../assets/images/cities/barranquilla.jpg';
import popayanImg from '../../assets/images/cities/popayan.jpg';

const cities = [
    {
        name: 'Bogotá D.C.',
        image: bogotaImg,
        slug: 'Bogotá D.C.'
    },
    {
        name: 'Medellín',
        image: medellinImg,
        slug: 'Antioquia'
    },
    {
        name: 'Cali',
        image: caliImg,
        slug: 'Valle del Cauca'
    },
    {
        name: 'Barranquilla',
        image: barranquillaImg,
        slug: 'Atlántico'
    },
    {
        name: 'Popayán',
        image: popayanImg,
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
