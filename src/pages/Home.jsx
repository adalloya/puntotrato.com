import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import BrandIcons from '../components/home/BrandIcons';
import CitySelector from '../components/home/CitySelector';
import HowItWorks from '../components/home/HowItWorks';
import FeaturedListings from '../components/home/FeaturedListings';
import BlogSection from '../components/home/BlogSection';
import Footer from '../components/layout/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <BrandIcons />
            <CitySelector />
            <HowItWorks />
            <FeaturedListings />
            <BlogSection />
            <Footer />
        </>
    );
};

export default Home;
