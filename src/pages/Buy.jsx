import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import ListingCard from '../components/buy/ListingCard';
import { Search, Filter } from 'lucide-react';
import { carBrands, departments } from '../data/catalogs';
import './Buy.css';

import { listings as dummyListings } from '../data/listings';

const Buy = () => {
    const [searchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedBrand, setSelectedBrand] = useState(searchParams.get('brand') || '');
    const [selectedLocation, setSelectedLocation] = useState(searchParams.get('location') || '');
    const [selectedType, setSelectedType] = useState('all');

    // Update state when URL params change (e.g. navigation from Home)
    useEffect(() => {
        const brandParam = searchParams.get('brand');
        const locationParam = searchParams.get('location');
        if (brandParam) setSelectedBrand(brandParam);
        if (locationParam) setSelectedLocation(locationParam);
    }, [searchParams]);

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
