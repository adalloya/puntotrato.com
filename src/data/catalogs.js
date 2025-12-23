export const vehicleTypes = [
    { id: 'car', label: 'Carro' },
    { id: 'moto', label: 'Moto' }
];

export const carBrands = [
    "Chevrolet", "Renault", "Mazda", "Kia", "Toyota", "Nissan", "Suzuki", "Ford", "Volkswagen", "Hyundai",
    "BMW", "Mercedes-Benz", "Audi", "Jeep", "Honda", "Fiat", "Citroën", "Peugeot", "Volvo", "Land Rover", "Mitsubishi"
].sort();

export const motoBrands = [
    "Yamaha", "Bajaj", "AKT", "Honda", "Suzuki", "TVS", "Victory", "KTM", "Hero", "Kawasaki",
    "Royal Enfield", "BMW", "Ducati", "Harley-Davidson", "Husqvarna", "Benelli"
].sort();

export const years = Array.from({ length: 36 }, (_, i) => 2025 - i); // 2025 to 1990

export const conditions = [
    { id: 'malo', label: 'Malo', description: 'Requiere reparaciones, tiene fallas mecánicas o estéticas graves.' },
    { id: 'regular', label: 'Regular', description: 'Funciona pero tiene desgaste visible o necesita mantenimiento pronto.' },
    { id: 'bueno', label: 'Bueno', description: 'Buen estado general, desgaste normal por uso, sin fallas graves.' },
    { id: 'excelente', label: 'Excelente', description: 'Como nuevo, sin detalles, mantenimiento al día, muy poco uso.' }
];

export const fuels = ["Gasolina", "Diesel", "Híbrido", "Eléctrico", "Gas / Gasolina"];

export const transmissions = ["Mecánica", "Automática", "Tiptronic"];

export const armor = ["Ninguno", "Nivel 2", "Nivel 3", "Nivel 4", "Nivel 5"];

export const departments = [
    "Antioquia", "Atlántico", "Bogotá D.C.", "Bolívar", "Boyacá", "Caldas", "Caquetá", "Casanare", "Cauca",
    "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Huila", "La Guajira", "Magdalena", "Meta", "Nariño",
    "Norte de Santander", "Quindío", "Risaralda", "Santander", "Sucre", "Tolima", "Valle del Cauca"
].sort();

export const photoFields = [
    { id: 'front', label: 'Frente', description: 'Foto frontal completa del vehículo.' },
    { id: 'left', label: 'Lado Izquierdo', description: 'Vista lateral completa del lado del conductor.' },
    { id: 'right', label: 'Lado Derecho', description: 'Vista lateral completa del lado del pasajero.' },
    { id: 'rear', label: 'Atrás', description: 'Foto trasera completa.' },
    { id: 'interior', label: 'Interior', description: 'Vista general de los asientos y el espacio interior.' },
    { id: 'cluster', label: 'Tablero/Instrumentos', description: 'Foto clara del kilometraje y testigos encendidos.' },
    { id: 'engine', label: 'Motor', description: 'Foto del compartimiento del motor limpio.' }
];
