import React from 'react';
import { Link } from 'react-router-dom';
import ListingCard from '../buy/ListingCard';
import { ArrowRight } from 'lucide-react';
import './FeaturedListings.css';

import { listings as featuredListings } from '../../data/listings';

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
