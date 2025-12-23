import React from 'react';
import { Camera, MessageCircle, CheckCircle } from 'lucide-react';
import './HowItWorks.css';

const StepCard = ({ icon: Icon, title, description, step }) => (
    <div className="step-card">
        <div className="step-number">{step}</div>
        <div className="step-icon-wrapper">
            <Icon size={40} className="step-icon" />
        </div>
        <h3 className="step-title">{title}</h3>
        <p className="step-description">{description}</p>
    </div>
);

const HowItWorks = () => {
    return (
        <section className="how-it-works-section">
            <div className="container">
                <div className="section-header">
                    <h2>¿Cómo funciona PuntoTrato?</h2>
                    <p className="section-subtitle">Vender o comprar tu nave nunca fue tan fácil y seguro.</p>
                </div>

                <div className="steps-grid">
                    <StepCard
                        step="1"
                        icon={Camera}
                        title="Publica tu nave"
                        description="Sube fotos y los detalles básicos en menos de 2 minutos. Nuestra guía te ayuda a tomar las mejores fotos."
                    />
                    <StepCard
                        step="2"
                        icon={MessageCircle}
                        title="Negocia directo"
                        description="Habla directamente con los interesados. Sin intermediarios, sin comisiones ocultas. Tú tienes el control."
                    />
                    <StepCard
                        step="3"
                        icon={CheckCircle}
                        title="Cierra el trato"
                        description="Acuerda el precio y cierra la venta. Nosotros te damos tips para hacer el traspaso de forma segura."
                    />
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
