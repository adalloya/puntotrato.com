import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        padding: 40,
        fontFamily: 'Helvetica',
        fontSize: 10,
        lineHeight: 1.5,
    },
    header: {
        backgroundColor: '#003366', // Navy Blue
        color: 'white',
        padding: 15,
        textAlign: 'center',
        marginBottom: 25,
    },
    headerTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    headerSub: {
        fontSize: 8,
        marginTop: 4,
    },
    section: {
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 8, // Reduced slightly
        gap: 20,
    },
    col: {
        flex: 1,
    },
    label: {
        fontSize: 9, // Slightly smaller label
        fontWeight: 'bold',
        marginBottom: 2,
        fontFamily: 'Helvetica-Bold',
        color: '#003366', // Navy Blue
    },
    value: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        paddingBottom: 2,
        marginBottom: 6, // Reduced margin
        minHeight: 14,
        fontSize: 10,
    },
    textBlock: {
        marginTop: 10,
        marginBottom: 15,
        textAlign: 'justify',
        fontSize: 10,
    },
    subHeader: {
        fontSize: 11,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
        fontFamily: 'Helvetica-Bold',
        color: '#003366', // Navy Blue
        textTransform: 'uppercase',
        borderBottomWidth: 1,
        borderBottomColor: '#003366',
        paddingBottom: 4,
    },
    bulletPoint: {
        marginLeft: 10,
        marginBottom: 4,
        fontSize: 9,
        textAlign: 'justify',
    },
    signatureRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30, // Reduced from 60 to fit better
    },
    signatureBlock: {
        width: '45%',
    },
    fingerprintBox: {
        width: 50, // Slightly smaller
        height: 70,
        borderWidth: 1,
        borderColor: '#000',
        alignSelf: 'center',
        marginTop: 5,
    },
    fingerprintContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 9,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
    legalNote: {
        fontSize: 8,
        color: 'grey',
        marginTop: 4,
        fontStyle: 'italic',
    }
});

const ContractDocument = ({ data }) => {
    const {
        sellerName = '', sellerId = '', sellerAddress = '', sellerPhone = '',
        buyerName = '', buyerId = '', buyerAddress = '', buyerPhone = '',
        vehicleClass = '', vehicleBrand = '', vehicleModel = '',
        vehicleBodyWork = '', vehicleColor = '',
        vehicleMotor = '', vehicleChassis = '', vehicleSerial = '',
        vehicleDoors = '', vehicleCapacity = '', vehicleService = '',
        vehiclePlate = '', vehiclePrice = '',
        clauses = '', dateDay = '', dateMonth = '', dateYear = ''
    } = data || {};

    return (
        <Document>
            {/* PAGE 1 */}
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>CONTRATO DE COMPRAVENTA DE VEHÍCULO</Text>
                    <Text style={styles.headerSub}>Esta Factura se asemeja en sus efectos a la letra de cambio (Articulo 774 del Código de Comercio).</Text>
                </View>

                {/* Personal Info */}
                <View style={styles.row}>
                    <View style={styles.col}>
                        <Text style={styles.label}>VENDEDOR</Text>
                        <Text style={styles.value}>{sellerName}</Text>

                        <Text style={styles.label}>DOCUMENTO DE IDENTIDAD</Text>
                        <Text style={styles.value}>{sellerId}</Text>

                        <Text style={styles.label}>DIRECCIÓN</Text>
                        <Text style={styles.value}>{sellerAddress}</Text>

                        <Text style={styles.label}>TELÉFONO</Text>
                        <Text style={styles.value}>{sellerPhone}</Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.label}>COMPRADOR</Text>
                        <Text style={styles.value}>{buyerName}</Text>

                        <Text style={styles.label}>DOCUMENTO DE IDENTIDAD</Text>
                        <Text style={styles.value}>{buyerId}</Text>

                        <Text style={styles.label}>DIRECCIÓN</Text>
                        <Text style={styles.value}>{buyerAddress}</Text>

                        <Text style={styles.label}>TELÉFONO</Text>
                        <Text style={styles.value}>{buyerPhone}</Text>
                    </View>
                </View>

                <Text style={styles.textBlock}>
                    La mercancía a que se refiere la presente factura cambiaria de compraventa, corresponde a una venta efectiva, la cual ha sido entregada real y materialmente al comprador, quien la recibe a entera satisfacción, al momento de la expedición de este documento.
                </Text>

                {/* Vehicle Characteristics */}
                <Text style={styles.subHeader}>CARACTERÍSTICAS DEL VEHÍCULO</Text>

                <View style={styles.row}>
                    <View style={styles.col}>
                        <Text style={styles.label}>CLASE</Text>
                        <Text style={styles.value}>{vehicleClass}</Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.label}>MARCA</Text>
                        <Text style={styles.value}>{vehicleBrand}</Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.label}>MODELO (AÑO)</Text>
                        <Text style={styles.value}>{vehicleModel}</Text>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={{ flex: 2 }}>
                        <Text style={styles.label}>TIPO DE CARROCERÍA</Text>
                        <Text style={styles.value}>{vehicleBodyWork}</Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.label}>COLOR</Text>
                        <Text style={styles.value}>{vehicleColor}</Text>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.col}>
                        <Text style={styles.label}>Nº MOTOR</Text>
                        <Text style={styles.value}>{vehicleMotor}</Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.label}>Nº CHASIS</Text>
                        <Text style={styles.value}>{vehicleChassis}</Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.label}>Nº SERIE</Text>
                        <Text style={styles.value}>{vehicleSerial}</Text>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.col}>
                        <Text style={styles.label}>PUERTAS</Text>
                        <Text style={styles.value}>{vehicleDoors}</Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.label}>CAPACIDAD</Text>
                        <Text style={styles.value}>{vehicleCapacity}</Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.label}>SERVICIO</Text>
                        <Text style={styles.value}>{vehicleService}</Text>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={{ flex: 2 }}>
                        <Text style={styles.label}>PLACA Nº</Text>
                        <Text style={[styles.value, { fontSize: 12, fontWeight: 'bold' }]}>{vehiclePlate}</Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.label}>PRECIO DE VENTA</Text>
                        <Text style={[styles.value, { fontSize: 12, fontWeight: 'bold' }]}>$ {vehiclePrice}</Text>
                    </View>
                </View>

                <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `Página ${pageNumber} de ${totalPages}`} fixed />
            </Page>

            {/* PAGE 2 */}
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>CONDICIONES Y FIRMAS</Text>
                </View>

                <Text style={styles.subHeader}>CONDICIONES DE LA VENTA</Text>

                <View style={styles.section}>
                    <Text style={styles.bulletPoint}>• El VENDEDOR garantiza que posee el vehículo desde su adquisición y declara que está libre de gravámenes, embargos, multas o litigios pendientes. Asimismo, se compromete al saneamiento por evicción y vicios redhibitorios según la ley.</Text>
                    <Text style={styles.bulletPoint}>• El COMPRADOR declara haber recibido el vehículo a satisfacción en el estado en que se encuentra, asumiendo desde ahora la responsabilidad civil y penal derivada de su uso.</Text>
                    <Text style={styles.bulletPoint}>• El VENDEDOR se reserva el dominio del vehículo hasta el pago total del precio pactado. El COMPRADOR no podrá enajenarlo hasta cancelar la totalidad de la deuda, bajo pena de las sanciones legales correspondientes.</Text>
                    <Text style={styles.bulletPoint}>• Por tratarse de vehículo usado, la venta se realiza en el estado en que se encuentra y no se otorgan garantías mecánicas adicionales a las de ley.</Text>
                    <Text style={styles.bulletPoint}>• Las partes acuerdan realizar los trámites de traspaso de propiedad a la mayor brevedad posible ante el organismo de tránsito competente.</Text>
                </View>

                <View style={{ marginTop: 10 }}>
                    <Text style={styles.label}>CLÁUSULAS ADICIONALES:</Text>
                    <Text style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginTop: 5, minHeight: 40, fontSize: 10, fontStyle: 'italic' }}>{clauses || 'Ninguna cláusula adicional.'}</Text>
                </View>

                <Text style={{ marginTop: 30, marginBottom: 15, fontSize: 10 }}>
                    En constancia de aceptación, se firma el presente documento el día:
                </Text>

                <View style={[styles.row, { width: '60%', gap: 10, marginBottom: 30 }]}>
                    <View style={{ borderBottomWidth: 1, flex: 1, alignItems: 'center' }}><Text>{dateDay}</Text></View>
                    <Text>de</Text>
                    <View style={{ borderBottomWidth: 1, flex: 2, alignItems: 'center' }}><Text>{dateMonth}</Text></View>
                    <Text>de</Text>
                    <View style={{ borderBottomWidth: 1, flex: 1, alignItems: 'center' }}><Text>{dateYear}</Text></View>
                </View>

                {/* SIGNATURE SECTION */}
                <View style={styles.signatureRow}>
                    {/* Vendedor */}
                    <View style={styles.signatureBlock}>
                        <Text style={{ marginBottom: 40, fontSize: 12, fontWeight: 'bold' }}>X ______________________</Text>
                        <Text style={styles.label}>VENDEDOR</Text>
                        <Text style={{ fontSize: 9 }}>C.C. {sellerId}</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <View style={styles.fingerprintBox}></View>
                        <Text style={{ fontSize: 8 }}>Huella</Text>
                    </View>

                    {/* Comprador */}
                    <View style={styles.signatureBlock}>
                        <Text style={{ marginBottom: 40, fontSize: 12, fontWeight: 'bold' }}>X ______________________</Text>
                        <Text style={styles.label}>COMPRADOR</Text>
                        <Text style={{ fontSize: 9 }}>C.C. {buyerId}</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <View style={styles.fingerprintBox}></View>
                        <Text style={{ fontSize: 8 }}>Huella</Text>
                    </View>
                </View>

                <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `Página ${pageNumber} de ${totalPages}`} fixed />
            </Page>
        </Document>
    );
};

export default ContractDocument;
