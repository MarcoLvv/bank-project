import React, {useState, useEffect} from 'react'

export const AprobarCliente = ({ cliente, criterio }) => {
    const [aprobado, setAprobado] = useState(false);

    useEffect(() => {
        const evaluarCliente = () => {
            const accountCreationDate = new Date(cliente.acc_creation_datetime);
            const applicationDate = new Date(cliente.application_datetime);
            const daysDifference = (applicationDate - accountCreationDate) / (1000 * 60 * 60 * 24);
            const maxDaysLate = cliente.max_days_late;

            const esAprobado =
                (criterio.accountAge && daysDifference >= 365) &&
                (criterio.daysSinceApplication && daysDifference <= 730) &&
                (criterio.maxDaysLate && maxDaysLate <= 30);

            setAprobado(esAprobado);
        };

        evaluarCliente();
    }, [cliente, criterio]);

    return (
        <span className={`px-2 py-1 rounded ${aprobado ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
            {aprobado ? 'Aprobado' : 'Rechazado'}
        </span>
    );
};

