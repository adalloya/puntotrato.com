import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import ListingCard from '../components/buy/ListingCard';
import { Search, Filter } from 'lucide-react';
import { carBrands, departments } from '../data/catalogs';
import './Buy.css';

// Dummy Data
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
        location: 'Bogotá D.C.',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80'
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
    },
    {
        id: 5,
        type: 'car',
        brand: 'Chevrolet',
        model: 'Onix Turbo',
        year: 2022,
        price: 65000000,
        mileage: 15000,
        condition: 'Bueno',
        fuel: 'Gasolina',
        location: 'Bogotá D.C.',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80'
    },
    {
        id: 6,
        type: 'moto',
        brand: 'Bajaj',
        model: 'Dominar 400',
        year: 2021,
        price: 14500000,
        mileage: 12000,
        condition: 'Bueno',
        fuel: 'Gasolina',
        location: 'Antioquia',
        image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80'
    }
];

const Buy = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedType, setSelectedType] = useState('all');

    const filteredListings = dummyListings.filter(listing => {
        const matchesSearch = listing.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
            listing.brand.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesBrand = selectedBrand ? listing.brand === selectedBrand : true;
        const matchesLocation = selectedLocation ? listing.location === selectedLocation : true;
        const matchesType = selectedType !== 'all' ? listing.type === selectedType : true;

        return matchesSearch && matchesBrand && matchesLocation && matchesType;
    });

    return (
        <>
            <Navbar />
            <div className="container" style={{ padding: '2rem 1rem' }}>

                <div className="browse-header">
                    <h1>Encuentra tu nave ideal</h1>
                    <div className="search-bar">
                        <Search className="search-icon" size={20} />
                        <input
                            type="text"
                            placeholder="Buscar por marca, modelo..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="browse-filters">
                    <button
                        className={`filter-chip ${selectedType === 'all' ? 'active' : ''}`}
                        onClick={() => setSelectedType('all')}
                    >
                        Todos
                    </button>
                    <button
                        className={`filter-chip ${selectedType === 'car' ? 'active' : ''}`}
                        onClick={() => setSelectedType('car')}
                    >
                        Carros
                    </button>
                    <button
                        className={`filter-chip ${selectedType === 'moto' ? 'active' : ''}`}
                        onClick={() => setSelectedType('moto')}
                    >
                        Motos
                    </button>

                    <select value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)} className="filter-select">
                        <option value="">Todas las marcas</option>
                        {carBrands.map(brand => <option key={brand} value={brand}>{brand}</option>)}
                    </select>

                    <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)} className="filter-select">
                        <option value="">Ubicación</option>
                        {departments.map(dept => <option key={dept} value={dept}>{dept}</option>)}
                    </select>
                </div>

                <div className="listings-grid">
                    {filteredListings.map(listing => (
                        <ListingCard key={listing.id} listing={listing} />
                    ))}
                </div>

                {filteredListings.length === 0 && (
                    <div className="no-results">
                        <p>No encontramos naves con esos filtros, parcero.</p>
                        <button onClick={() => { setSearchTerm(''); setSelectedBrand(''); setSelectedLocation(''); setSelectedType('all'); }}>
                            Limpiar filtros
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Buy;
