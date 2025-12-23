import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const PrivacyPolicy = () => {
    return (
        <>
            <Navbar />
            <div className="container" style={{ padding: '4rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
                <h1>Política de Privacidad y Tratamiento de Datos</h1>
                <p>Última actualización: {new Date().toLocaleDateString()}</p>

                <section style={{ marginTop: '2rem' }}>
                    <h3>1. Responsable del Tratamiento</h3>
                    <p>PuntoTrato.com es el responsable del tratamiento de los datos personales recolectados a través de esta plataforma, en cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013 de la República de Colombia.</p>
                </section>

                <section style={{ marginTop: '2rem' }}>
                    <h3>2. Finalidad de la Recolección</h3>
                    <p>Los datos personales (nombre, correo electrónico, teléfono, etc.) se recolectan con la finalidad de:</p>
                    <ul>
                        <li>Facilitar la publicación y gestión de anuncios de vehículos.</li>
                        <li>Permitir el contacto entre compradores y vendedores.</li>
                        <li>Enviar notificaciones relacionadas con el servicio.</li>
                        <li>Mejorar la experiencia del usuario y la seguridad del sitio.</li>
                    </ul>
                </section>

                <section style={{ marginTop: '2rem' }}>
                    <h3>3. Derechos ARCO (Habeas Data)</h3>
                    <p>Como titular de los datos, tienes derecho a:</p>
                    <ul>
                        <li><strong>Acceso:</strong> Conocer qué datos personales tenemos sobre ti.</li>
                        <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos.</li>
                        <li><strong>Cancelación:</strong> Solicitar la eliminación de tus datos cuando no sean necesarios.</li>
                        <li><strong>Oposición:</strong> Oponerte al tratamiento de tus datos para fines específicos.</li>
                    </ul>
                </section>

                <section style={{ marginTop: '2rem' }}>
                    <h3>4. Ejercicio de Derechos</h3>
                    <p>Para ejercer tus derechos ARCO, puedes enviarnos una solicitud al correo electrónico: <strong>contacto@puntotrato.com</strong>. Atenderemos tu solicitud dentro de los plazos establecidos por la ley.</p>
                </section>

                <section style={{ marginTop: '2rem' }}>
                    <h3>5. Seguridad</h3>
                    <p>Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos contra el acceso no autorizado, la pérdida o la alteración.</p>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default PrivacyPolicy;
