import React, { useState } from 'react';
import {
    vehicleTypes, carBrands, motoBrands, years, conditions,
    fuels, transmissions, armor, departments, photoFields
} from '../../data/catalogs';
import { Upload, ChevronRight, ChevronLeft, Check, AlertCircle } from 'lucide-react';
import './VehicleForm.css';

const VehicleForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        type: 'car',
        brand: '',
        model: '',
        year: '',
        mileage: '',
        plateLastDigit: '',
        fuel: '',
        transmission: '',
        armor: 'Ninguno',
        condition: '',
        price: '',
        location: '',
        description: '',
        images: {}
    });

    const [previewImages, setPreviewImages] = useState({});

    const brands = formData.type === 'moto' ? motoBrands : carBrands;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (fieldId, e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({
                ...prev,
                images: { ...prev.images, [fieldId]: file }
            }));

            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImages(prev => ({ ...prev, [fieldId]: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate at least one photo
        const uploadedPhotosCount = Object.keys(formData.images).length;
        if (uploadedPhotosCount === 0) {
            alert('Por favor sube al menos una foto de tu vehículo para publicarlo.');
            return;
        }

        console.log('Submitting form:', formData);
        alert('¡Publicación simulada! Los datos se han guardado en consola.');
        // Here we would upload images and save to Firestore
    };

    return (
        <div className="vehicle-form-container">
            <div className="form-progress">
                <div className={`step-indicator ${step >= 1 ? 'active' : ''}`}>1. Datos Básicos</div>
                <div className={`step-line ${step >= 2 ? 'active' : ''}`}></div>
                <div className={`step-indicator ${step >= 2 ? 'active' : ''}`}>2. Detalles</div>
                <div className={`step-line ${step >= 3 ? 'active' : ''}`}></div>
                <div className={`step-indicator ${step >= 3 ? 'active' : ''}`}>3. Fotos</div>
            </div>

            <form onSubmit={handleSubmit} className="vehicle-form">
                {step === 1 && (
                    <div className="form-step">
                        <h2>Información del Vehículo</h2>

                        <div className="form-group type-selector">
                            <label>¿Qué vas a vender?</label>
                            <div className="type-options">
                                {vehicleTypes.map(type => (
                                    <div
                                        key={type.id}
                                        className={`type-option ${formData.type === type.id ? 'selected' : ''}`}
                                        onClick={() => setFormData(prev => ({ ...prev, type: type.id, brand: '' }))}
                                    >
                                        {type.label}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="form-grid">
                            <div className="form-group">
                                <label>Marca</label>
                                <select name="brand" value={formData.brand} onChange={handleChange} required>
                                    <option value="">Selecciona Marca</option>
                                    {brands.map(brand => (
                                        <option key={brand} value={brand}>{brand}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Modelo (Línea)</label>
                                <input
                                    type="text"
                                    name="model"
                                    placeholder="Ej. Aveo, Mazda 3"
                                    value={formData.model}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Año</label>
                                <select name="year" value={formData.year} onChange={handleChange} required>
                                    <option value="">Selecciona Año</option>
                                    {years.map(year => (
                                        <option key={year} value={year}>{year}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Kilometraje (km)</label>
                                <input
                                    type="number"
                                    name="mileage"
                                    placeholder="0"
                                    value={formData.mileage}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Último dígito placa</label>
                                <select name="plateLastDigit" value={formData.plateLastDigit} onChange={handleChange} required>
                                    <option value="">Selecciona</option>
                                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(d => (
                                        <option key={d} value={d}>{d}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="form-actions right">
                            <button type="button" className="btn-primary" onClick={nextStep}>
                                Siguiente <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="form-step">
                        <h2>Detalles y Estado</h2>

                        <div className="form-group">
                            <label>Estado del Vehículo</label>
                            <div className="condition-options">
                                {conditions.map(cond => (
                                    <div
                                        key={cond.id}
                                        className={`condition-option ${formData.condition === cond.id ? 'selected' : ''}`}
                                        onClick={() => setFormData(prev => ({ ...prev, condition: cond.id }))}
                                    >
                                        <div className="cond-header">
                                            <strong>{cond.label}</strong>
                                        </div>
                                        <p>{cond.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="form-grid">
                            <div className="form-group">
                                <label>Combustible</label>
                                <select name="fuel" value={formData.fuel} onChange={handleChange} required>
                                    <option value="">Selecciona</option>
                                    {fuels.map(f => <option key={f} value={f}>{f}</option>)}
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Transmisión</label>
                                <select name="transmission" value={formData.transmission} onChange={handleChange} required>
                                    <option value="">Selecciona</option>
                                    {transmissions.map(t => <option key={t} value={t}>{t}</option>)}
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Blindaje</label>
                                <select name="armor" value={formData.armor} onChange={handleChange}>
                                    {armor.map(a => <option key={a} value={a}>{a}</option>)}
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Ubicación</label>
                                <select name="location" value={formData.location} onChange={handleChange} required>
                                    <option value="">Selecciona Departamento</option>
                                    {departments.map(d => <option key={d} value={d}>{d}</option>)}
                                </select>
                            </div>
                        </div>

                        <div className="form-group" style={{ marginTop: '1rem' }}>
                            <label>Precio de Venta ($ COP)</label>
                            <input
                                type="number"
                                name="price"
                                placeholder="Ej. 45000000"
                                value={formData.price}
                                onChange={handleChange}
                                style={{ fontSize: '1.2rem', fontWeight: 'bold' }}
                                required
                            />
                        </div>

                        <div className="form-actions">
                            <button type="button" className="btn-secondary" onClick={prevStep}>
                                <ChevronLeft size={18} /> Atras
                            </button>
                            <button type="button" className="btn-primary" onClick={nextStep}>
                                Siguiente <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="form-step">
                        <h2>Fotos del Vehículo</h2>
                        <div className="info-box">
                            <AlertCircle size={20} />
                            <p>Te recomendamos subir estas fotos para vender más rápido. Al menos 1 es obligatoria.</p>
                        </div>

                        <div className="photo-grid">
                            {photoFields.map(field => (
                                <div key={field.id} className="photo-upload-card">
                                    <div className="photo-preview">
                                        {previewImages[field.id] ? (
                                            <img src={previewImages[field.id]} alt={field.label} />
                                        ) : (
                                            <div className="placeholder">
                                                <Upload size={24} />
                                            </div>
                                        )}
                                    </div>
                                    <div className="photo-info">
                                        <h4>{field.label}</h4>
                                        <p>{field.description}</p>
                                        <input
                                            type="file"
                                            id={`file-${field.id}`}
                                            accept="image/*"
                                            onChange={(e) => handleImageChange(field.id, e)}
                                            hidden
                                        />
                                        <label htmlFor={`file-${field.id}`} className="btn-upload">
                                            {previewImages[field.id] ? 'Cambiar Foto' : 'Subir Foto'}
                                        </label>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="form-actions">
                            <button type="button" className="btn-secondary" onClick={prevStep}>
                                <ChevronLeft size={18} /> Atras
                            </button>
                            <button type="submit" className="btn-primary btn-submit">
                                <Check size={18} /> Publicar Aviso
                            </button>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

export default VehicleForm;
