import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ContractForm from '../components/contract/ContractForm';

const ContractTool = () => {
    return (
        <>
            <Navbar />
            {/* Light background for the page wrapper */}
            <div className="pt-24 pb-12 min-h-screen bg-gray-50">
                <ContractForm />
            </div>
            <Footer />
        </>
    );
};

export default ContractTool;
