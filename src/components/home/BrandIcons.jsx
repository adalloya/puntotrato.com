import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './BrandIcons.css';

// Import local brand logos
import chevroletImg from '../../assets/images/brands/chevrolet.png';
import renaultImg from '../../assets/images/brands/renault.jpg';
import suzukiImg from '../../assets/images/brands/suzuki.png';
import fordImg from '../../assets/images/brands/ford.jpg';
import nissanImg from '../../assets/images/brands/nissan.png';
import kiaImg from '../../assets/images/brands/kia.png';
import toyotaImg from '../../assets/images/brands/toyota.jpg';
import mazdaImg from '../../assets/images/brands/mazda.jpg';
import vwImg from '../../assets/images/brands/volkswagen.jpg';
import hyundaiImg from '../../assets/images/brands/hyundai.jpg';

const brands = [
    { name: 'Chevrolet', logo: chevroletImg },
    { name: 'Renault', logo: renaultImg },
    { name: 'Mazda', logo: mazdaImg },
    { name: 'Kia', logo: kiaImg },
    { name: 'Toyota', logo: toyotaImg },
    { name: 'Nissan', logo: nissanImg },
    { name: 'Suzuki', logo: suzukiImg },
    { name: 'Ford', logo: fordImg },
    { name: 'Volkswagen', logo: vwImg },
    { name: 'Hyundai', logo: hyundaiImg }
];

const BrandIcons = () => {
    const navigate = useNavigate(); // Added useNavigate hook

    const handleBrandClick = (brandName) => {
        navigate(`/buy?brand=${brandName}`);
    };

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
                                        // Using a reliable car logo API or simple text placeholder
                                        e.target.src = `https://ui-avatars.com/api/?name=${brand.name}&background=random&color=fff&size=80`;
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
