import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Terms = () => {
    return (
        <>
            <Navbar />
            <div className="container" style={{ padding: '4rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
                <h1>Términos y Condiciones</h1>
                <p>Última actualización: {new Date().toLocaleDateString()}</p>

                <section style={{ marginTop: '2rem' }}>
                    <h3>1. Aceptación de los Términos</h3>
                    <p>Al acceder y utilizar PuntoTrato.com, aceptas estar sujeto a estos términos y condiciones. Si no estás de acuerdo con alguna parte de los términos, no podrás acceder al servicio.</p>
                </section>

                <section style={{ marginTop: '2rem' }}>
                    <h3>2. Descripción del Servicio</h3>
                    <p>PuntoTrato.com es una plataforma que facilita la conexión entre vendedores y compradores de vehículos en Colombia. No somos propietarios de los vehículos ofrecidos, ni participamos en la transacción financiera final entre las partes.</p>
                </section>

                <section style={{ marginTop: '2rem' }}>
                    <h3>3. Responsabilidades del Usuario</h3>
                    <p>El usuario se compromete a:</p>
                    <ul>
                        <li>Proporcionar información veraz y precisa sobre los vehículos.</li>
                        <li>No publicar contenido fraudulento, engañoso o ilegal.</li>
                        <li>Respetar los derechos de propiedad intelectual de terceros.</li>
                    </ul>
                </section>

                <section style={{ marginTop: '2rem' }}>
                    <h3>4. Limitación de Responsabilidad</h3>
                    <p>PuntoTrato.com no garantiza la exactitud de los anuncios publicados ni el estado mecánico de los vehículos. Toda transacción se realiza bajo el propio riesgo de las partes involucradas.</p>
                </section>

                <section style={{ marginTop: '2rem' }}>
                    <h3>5. Modificaciones</h3>
                    <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio.</p>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Terms;
