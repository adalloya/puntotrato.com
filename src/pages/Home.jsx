import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
                <h2>Más secciones vendrán pronto...</h2>
                <p>Aquí irán los recomendados y listados.</p>
            </div>
        </>
    );
};

export default Home;
