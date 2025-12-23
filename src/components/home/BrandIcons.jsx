import React from 'react';
import { Link } from 'react-router-dom';
import './BrandIcons.css';

// Import local brand logos
import chevroletImg from '../../assets/images/brands/chevrolet.png';
import renaultImg from '../../assets/images/brands/renault.png';
import mazdaImg from '../../assets/images/brands/mazda.png';
import toyotaImg from '../../assets/images/brands/toyota.png';
import kiaImg from '../../assets/images/brands/kia.png';
import nissanImg from '../../assets/images/brands/nissan.png';
import fordImg from '../../assets/images/brands/ford.png';
import vwImg from '../../assets/images/brands/volkswagen.png';
import suzukiImg from '../../assets/images/brands/suzuki.png';
import hyundaiImg from '../../assets/images/brands/hyundai.png';

const brands = [
    { name: 'Chevrolet', logo: chevroletImg },
    { name: 'Renault', logo: renaultImg },
    { name: 'Mazda', logo: mazdaImg },
    { name: 'Toyota', logo: toyotaImg },
    { name: 'Kia', logo: kiaImg },
    { name: 'Nissan', logo: nissanImg },
    { name: 'Ford', logo: fordImg },
    { name: 'Volkswagen', logo: vwImg },
    { name: 'Suzuki', logo: suzukiImg },
    { name: 'Hyundai', logo: hyundaiImg }
];

const BrandIcons = () => {
    return (
        <section className="brands-section">
            <div className="container">
                <h3 className="section-title">Encuentra por Marca</h3>
                <div className="brands-scroll-container">
                    {brands.map((brand, index) => (
                        <Link
                            to={`/buy?brand=${brand.name}`}
                            key={index}
                            className="brand-item"
                        >
                            <div className="brand-logo-wrapper">
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = 'https://via.placeholder.com/80?text=' + brand.name[0];
                                    }}
                                />
                            </div>
                            <span className="brand-name">{brand.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandIcons;
