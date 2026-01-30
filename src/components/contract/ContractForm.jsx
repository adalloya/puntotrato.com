import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ContractDocument from './ContractDocument';
import { FileText, Download, User, Car, Calendar, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import './ContractForm.css';

const InputField = ({ label, name, value, onChange, type = "text", placeholder, icon: Icon, fullWidth = false }) => (
    <div className={`input-group ${fullWidth ? 'col-full' : ''}`}>
        <label className="input-label">{label}</label>
        <div className="input-wrapper">
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="input-field"
            />
            {Icon && <Icon size={18} className="input-icon" />}
        </div>
    </div>
);

const ContractForm = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        sellerName: '', sellerId: '', sellerAddress: '', sellerPhone: '',
        buyerName: '', buyerId: '', buyerAddress: '', buyerPhone: '',
        vehicleClass: '', vehicleBrand: '', vehicleModel: '',
        vehicleBodyWork: '', vehicleColor: '',
        vehicleMotor: '', vehicleChassis: '', vehicleSerial: '',
        vehicleDoors: '', vehicleCapacity: '', vehicleService: '',
        vehiclePlate: '', vehiclePrice: '',
        clauses: '',
        dateDay: new Date().getDate().toString(),
        dateMonth: new Date().toLocaleString('es-ES', { month: 'long' }),
        dateYear: new Date().getFullYear().toString()
    });

    const steps = [
        { id: 0, title: 'Vendedor', icon: User },
        { id: 1, title: 'Comprador', icon: User },
        { id: 2, title: 'Vehículo', icon: Car },
        { id: 3, title: 'Finalizar', icon: Calendar },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

    return (
        <div className="contract-container">
            {/* Header */}
            <div className="contract-header">
                <h1 className="contract-title">Generador de Contrato</h1>
                <p className="contract-subtitle">Crea un contrato de compraventa profesional en minutos.</p>
            </div>

            {/* Main Card */}
            <div className="glass-panel">

                {/* Progress Stepper */}
                <div className="stepper-container">
                    <div className="stepper-wrapper">
                        {/* Connecting Lines */}
                        <div className="stepper-line-bg"></div>
                        <div
                            className="stepper-line-progress"
                            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                        ></div>

                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isActive = index === currentStep;
                            const isCompleted = index < currentStep;

                            return (
                                <div
                                    key={step.id}
                                    className={`step-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                                    onClick={() => setCurrentStep(index)}
                                >
                                    <div className="step-circle">
                                        {isCompleted ? <CheckCircle size={20} /> : <Icon size={20} />}
                                    </div>
                                    <span className="step-label">{step.title}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Form Content */}
                <div className="form-content">

                    {/* Step 1: Vendedor */}
                    {currentStep === 0 && (
                        <div className="step-content">
                            <h2 className="step-title">
                                <span className="step-icon-wrapper"><User size={24} /></span>
                                Datos del Vendedor
                            </h2>
                            <div className="form-grid">
                                <InputField
                                    label="Nombre Completo"
                                    name="sellerName"
                                    value={formData.sellerName}
                                    onChange={handleChange}
                                    placeholder="Ej. Juan Pérez"
                                    icon={User}
                                />
                                <InputField
                                    label="Documento de Identidad (C.C.)"
                                    name="sellerId"
                                    value={formData.sellerId}
                                    onChange={handleChange}
                                    placeholder="Ej. 123456789"
                                    icon={FileText}
                                />
                                <InputField
                                    label="Dirección / Domicilio"
                                    name="sellerAddress"
                                    value={formData.sellerAddress}
                                    onChange={handleChange}
                                    placeholder="Ej. Calle 123 #45-67"
                                    icon={FileText}
                                />
                                <InputField
                                    label="Teléfono"
                                    name="sellerPhone"
                                    value={formData.sellerPhone}
                                    onChange={handleChange}
                                    type="tel"
                                    placeholder="Ej. 300 123 4567"
                                    icon={FileText}
                                />
                            </div>
                        </div>
                    )}

                    {/* Step 2: Comprador */}
                    {currentStep === 1 && (
                        <div className="step-content">
                            <h2 className="step-title">
                                <span className="step-icon-wrapper"><User size={24} /></span>
                                Datos del Comprador
                            </h2>
                            <div className="form-grid">
                                <InputField
                                    label="Nombre Completo"
                                    name="buyerName"
                                    value={formData.buyerName}
                                    onChange={handleChange}
                                    placeholder="Ej. María López"
                                    icon={User}
                                />
                                <InputField
                                    label="Documento de Identidad (C.C.)"
                                    name="buyerId"
                                    value={formData.buyerId}
                                    onChange={handleChange}
                                    placeholder="Ej. 987654321"
                                    icon={FileText}
                                />
                                <InputField
                                    label="Dirección / Domicilio"
                                    name="buyerAddress"
                                    value={formData.buyerAddress}
                                    onChange={handleChange}
                                    placeholder="Ej. Carrera 80 #10-20"
                                    icon={FileText}
                                />
                                <InputField
                                    label="Teléfono"
                                    name="buyerPhone"
                                    value={formData.buyerPhone}
                                    onChange={handleChange}
                                    type="tel"
                                    placeholder="Ej. 310 987 6543"
                                    icon={FileText}
                                />
                            </div>
                        </div>
                    )}

                    {/* Step 3: Vehiculo */}
                    {currentStep === 2 && (
                        <div className="step-content">
                            <h2 className="step-title">
                                <span className="step-icon-wrapper"><Car size={24} /></span>
                                Características del Vehículo
                            </h2>
                            <div className="form-grid thirds">
                                <InputField
                                    label="Clase"
                                    name="vehicleClass"
                                    value={formData.vehicleClass}
                                    onChange={handleChange}
                                    placeholder="Automóvil"
                                    icon={Car}
                                />
                                <InputField
                                    label="Marca"
                                    name="vehicleBrand"
                                    value={formData.vehicleBrand}
                                    onChange={handleChange}
                                    placeholder="Mazda"
                                    icon={Car}
                                />
                                <InputField
                                    label="Modelo"
                                    name="vehicleModel"
                                    value={formData.vehicleModel}
                                    onChange={handleChange}
                                    placeholder="3 Touring"
                                    icon={Car}
                                />
                                <InputField
                                    label="Carrocería"
                                    name="vehicleBodyWork"
                                    value={formData.vehicleBodyWork}
                                    onChange={handleChange}
                                    placeholder="Sedán"
                                    icon={Car}
                                />
                                <InputField
                                    label="Color"
                                    name="vehicleColor"
                                    value={formData.vehicleColor}
                                    onChange={handleChange}
                                    placeholder="Rojo"
                                    icon={Car}
                                />
                                <InputField
                                    label="Nº Motor"
                                    name="vehicleMotor"
                                    value={formData.vehicleMotor}
                                    onChange={handleChange}
                                    placeholder="M123..."
                                    icon={FileText}
                                />
                                <InputField
                                    label="Nº Chasis"
                                    name="vehicleChassis"
                                    value={formData.vehicleChassis}
                                    onChange={handleChange}
                                    placeholder="C987..."
                                    icon={FileText}
                                />
                                <InputField
                                    label="Nº Serie"
                                    name="vehicleSerial"
                                    value={formData.vehicleSerial}
                                    onChange={handleChange}
                                    placeholder="S554..."
                                    icon={FileText}
                                />
                                <InputField
                                    label="Puertas"
                                    name="vehicleDoors"
                                    value={formData.vehicleDoors}
                                    onChange={handleChange}
                                    placeholder="4"
                                    icon={Car}
                                />
                                <InputField
                                    label="Capacidad"
                                    name="vehicleCapacity"
                                    value={formData.vehicleCapacity}
                                    onChange={handleChange}
                                    placeholder="5"
                                    icon={Car}
                                />
                                <InputField
                                    label="Servicio"
                                    name="vehicleService"
                                    value={formData.vehicleService}
                                    onChange={handleChange}
                                    placeholder="Particular"
                                    icon={Car}
                                />
                                <InputField
                                    label="Placa"
                                    name="vehiclePlate"
                                    value={formData.vehiclePlate}
                                    onChange={handleChange}
                                    placeholder="ABC-123"
                                    icon={FileText}
                                    fullWidth
                                />
                                <InputField
                                    label="Precio ($)"
                                    name="vehiclePrice"
                                    value={formData.vehiclePrice}
                                    onChange={handleChange}
                                    type="number"
                                    placeholder="50000000"
                                    icon={FileText}
                                    fullWidth
                                />
                            </div>
                        </div>
                    )}

                    {/* Step 4: Finalizar */}
                    {currentStep === 3 && (
                        <div className="step-content">
                            <h2 className="step-title">
                                <span className="step-icon-wrapper"><Calendar size={24} /></span>
                                Finalizar y Descargar
                            </h2>

                            <div className="form-grid thirds">
                                <InputField
                                    label="Día"
                                    name="dateDay"
                                    value={formData.dateDay}
                                    onChange={handleChange}
                                    placeholder="DD"
                                    icon={Calendar}
                                />
                                <InputField
                                    label="Mes"
                                    name="dateMonth"
                                    value={formData.dateMonth}
                                    onChange={handleChange}
                                    placeholder="MM"
                                    icon={Calendar}
                                />
                                <InputField
                                    label="Año"
                                    name="dateYear"
                                    value={formData.dateYear}
                                    onChange={handleChange}
                                    placeholder="AAAA"
                                    icon={Calendar}
                                />
                            </div>

                            <div className="input-group" style={{ marginTop: '1.5rem' }}>
                                <label className="input-label">Cláusulas Adicionales</label>
                                <textarea
                                    name="clauses"
                                    value={formData.clauses}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="Escribe aquí cualquier cláusula extra o déjalo en blanco..."
                                    className="textarea-field"
                                />
                            </div>

                            <div className="download-section">
                                <PDFDownloadLink
                                    document={<ContractDocument data={formData} />}
                                    fileName={`Contrato_Venta_${formData.vehiclePlate || 'Vehiculo'}.pdf`}
                                    className="btn-download"
                                >
                                    {({ blob, url, loading, error }) => (
                                        <>
                                            {loading ? 'Generando PDF...' : (
                                                <>
                                                    <Download size={24} />
                                                    Descargar Contrato PDF
                                                </>
                                            )}
                                        </>
                                    )}
                                </PDFDownloadLink>
                                <p className="privacy-note">
                                    * Tus datos no se guardan en nuestros servidores.
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer Controls */}
                <div className="form-footer">
                    <button
                        onClick={prevStep}
                        disabled={currentStep === 0}
                        className="btn-prev"
                    >
                        <ArrowLeft size={18} /> Anterior
                    </button>

                    {currentStep < steps.length - 1 && (
                        <button
                            onClick={nextStep}
                            className="btn-next"
                        >
                            Siguiente <ArrowRight size={18} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContractForm;
