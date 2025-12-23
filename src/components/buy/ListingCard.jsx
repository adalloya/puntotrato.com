import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Gauge, Fuel, Calendar } from 'lucide-react';
import './ListingCard.css';

const ListingCard = ({ listing }) => {
    const formatPrice = (price) => {
        return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(price);
    };

    return (
        <Link to={`/vehicle/${listing.id}`} className="listing-card">
            <div className="listing-image">
                <img src={listing.image} alt={`${listing.brand} ${listing.model}`} />
                <div className="listing-price">{formatPrice(listing.price)}</div>
                <div className="listing-tag">{listing.condition}</div>
            </div>

            <div className="listing-details">
                <h3 className="listing-title">{listing.brand} {listing.model}</h3>

                <div className="listing-specs">
                    <div className="spec-item">
                        <Calendar size={14} />
                        <span>{listing.year}</span>
                    </div>
                    <div className="spec-item">
                        <Gauge size={14} />
                        <span>{listing.mileage.toLocaleString()} km</span>
                    </div>
                    <div className="spec-item">
                        <Fuel size={14} />
                        <span>{listing.fuel}</span>
                    </div>
                </div>

                <div className="listing-location">
                    <MapPin size={14} />
                    {listing.location}
                </div>
            </div>
        </Link>
    );
};

export default ListingCard;
