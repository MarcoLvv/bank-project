// src/app/components/CreditApproval.js
import React from 'react';

const CreditApproval = ({ cliente }) => {
    const isEligible = () => {
        const accountCreationDate = new Date(cliente.acc_creation_datetime);
        const applicationDate = new Date(cliente.application_datetime);
        const daysDifference = Math.ceil((applicationDate - accountCreationDate) / (1000 * 3600 * 24));

        const maxDaysLate = cliente.max_days_late;

        console.log('Fecha de creación de cuenta:', accountCreationDate);
        console.log('Fecha de aplicación:', applicationDate);
        console.log('Diferencia en días:', daysDifference);
        console.log('Máximo días de retraso:', maxDaysLate);

        if (!isNaN(accountCreationDate.getTime()) && !isNaN(applicationDate.getTime())) {
            if (accountCreationDate > new Date('2020-05-01') &&
                daysDifference >= 180 &&
                maxDaysLate < 30) {
                return true; // Apto para crédito
            }
        }
        return false; // No apto para crédito
    };

    return (
        <td>
            {isEligible() ? 'Aprobado' : 'Rechazado'}
        </td>
    );
};

export default CreditApproval;
