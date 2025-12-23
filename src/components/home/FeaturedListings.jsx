import React from 'react';
import { Link } from 'react-router-dom';
import ListingCard from '../buy/ListingCard';
import { ArrowRight } from 'lucide-react';
import './FeaturedListings.css';

// Using same dummy data structure for consistency, limited to 4 items
const featuredListings = [
    {
        id: 1,
        type: 'car',
        brand: 'Mazda',
        model: '3 Grand Touring (2021)',
        year: 2021,
        price: 85000000,
        mileage: 25000,
        condition: 'Excelente',
        fuel: 'Gasolina',
        location: 'Bogotá D.C.',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 4,
        type: 'car',
        brand: 'Toyota',
        model: 'Fortuner (2018)',
        year: 2018,
        price: 160000000,
        mileage: 60000,
        condition: 'Excelente',
        fuel: 'Diesel',
        location: 'Valle del Cauca',
        image: 'https://images.unsplash.com/photo-1594247551066-cd8c630f7b58?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 3,
        type: 'moto',
        brand: 'Yamaha',
        model: 'MT-09 (2023)',
        year: 2023,
        price: 42000000,
        mileage: 5000,
        condition: 'Excelente',
        fuel: 'Gasolina',
        location: 'Cundinamarca',
        image: 'https://plus.unsplash.com/premium_photo-1683134305885-c0352cb4244b?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 5,
        type: 'car',
        brand: 'Chevrolet',
        model: 'Onix Turbo (2022)',
        year: 2022,
        price: 65000000,
        mileage: 15000,
        condition: 'Bueno',
        fuel: 'Gasolina',
        location: 'Bogotá D.C.',
        image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 2,
        type: 'car',
        brand: 'Renault',
        model: 'Duster Oroch (2019)',
        year: 2019,
        price: 52000000,
        mileage: 45000,
        condition: 'Bueno',
        fuel: 'Gasolina',
        location: 'Antioquia',
        image: 'https://images.unsplash.com/photo-1626075678385-2e0691764eb8?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 6,
        type: 'moto',
        brand: 'BMW',
        model: 'F 850 GS (2022)',
        year: 2022,
        price: 68000000,
        mileage: 8000,
        condition: 'Excelente',
        fuel: 'Gasolina',
        location: 'Medellín',
        image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=1000&auto=format&fit=crop'
    }
];

const FeaturedListings = () => {
    return (
        <section className="featured-section">
            <div className="container">
                <div className="featured-header">
                    <h2>Naves Recién Llegadas</h2>
                    <Link to="/buy" className="view-all-link">
                        Ver todo el inventario <ArrowRight size={20} />
                    </Link>
                </div>

                <div className="listings-grid">
                    {featuredListings.map(listing => (
                        <ListingCard key={listing.id} listing={listing} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedListings;
