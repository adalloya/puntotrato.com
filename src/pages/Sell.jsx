import React from 'react';
import Navbar from '../components/layout/Navbar';
import VehicleForm from '../components/publish/VehicleForm';

const Sell = () => {
    return (
        <>
            <Navbar />
            <div className="container" style={{ padding: '2rem 1rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h1>Vende tu nave</h1>
                    <p style={{ color: '#666' }}>Completa los datos y publica tu aviso en minutos.</p>
                </div>
                <VehicleForm />
            </div>
        </>
    );
};

export default Sell;
