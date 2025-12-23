import React from 'react';
import './BlogSection.css';
import { ArrowUpRight } from 'lucide-react';

const blogPosts = [
    {
        id: 1,
        title: 'Guía completa para traspaso de vehículos 2024',
        excerpt: 'Todo lo que necesitas saber sobre trámites, costos y documentos para realizar un traspaso exitoso en Colombia.',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80',
        category: 'Trámites'
    },
    {
        id: 2,
        title: '¿Carro nuevo o usado? Ventajas y desventajas',
        excerpt: 'Analizamos qué opción te conviene más según tu presupuesto y necesidades. La depreciación vs. garantía.',
        image: 'https://images.unsplash.com/photo-1632823471419-ebd926955a15?auto=format&fit=crop&q=80',
        category: 'Consejos'
    },
    {
        id: 3,
        title: 'Los mejores carros para la topografía colombiana',
        excerpt: 'Descubre qué vehículos se comportan mejor en nuestras carreteras de montaña. Potencia, torque y altura al piso.',
        image: 'https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&q=80',
        category: 'Reseñas'
    },
    {
        id: 4,
        title: 'Todo sobre el Pico y Placa en 2024',
        excerpt: 'Mantente al día con las restricciones de movilidad en Bogotá, Medellín, Cali y otras ciudades principales.',
        image: 'https://images.unsplash.com/photo-1599321453916-832f05786a41?auto=format&fit=crop&q=80',
        category: 'Normatividad'
    },
    {
        id: 5,
        title: 'Mantenimiento preventivo: Lo que debes saber',
        excerpt: 'Una guía básica para mantener tu nave al 100%. Cambio de aceite, frenos, llantas y revisiones periódicas.',
        image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80',
        category: 'Mantenimiento'
    },
    {
        id: 6,
        title: 'Seguridad al comprar usado: Evita estafas',
        excerpt: 'Consejos vitales para verificar antecedentes, siniestros y realizar una compra segura y confiable.',
        image: 'https://images.unsplash.com/photo-1560252829-804f1a72b3de?auto=format&fit=crop&q=80',
        category: 'Seguridad'
    }
];

const BlogSection = () => {
    return (
        <section className="blog-section">
            <div className="container">
                <div className="blog-header">
                    <h2>Blog y Consejos</h2>
                    <p className="blog-subtitle">Aprende todo sobre el mundo automotriz en Colombia</p>
                </div>

                <div className="blog-grid">
                    {blogPosts.map(post => (
                        <article key={post.id} className="blog-card">
                            <div className="blog-image-wrapper">
                                <img src={post.image} alt={post.title} className="blog-image" />
                                <span className="blog-category">{post.category}</span>
                            </div>
                            <div className="blog-content">
                                <h3 className="blog-title">{post.title}</h3>
                                <p className="blog-excerpt">{post.excerpt}</p>
                                <button className="read-more-btn">
                                    Leer más <ArrowUpRight size={16} />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
