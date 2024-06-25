// src/components/TablaClientes.jsx

import React, { useEffect, useState } from 'react';
import {AprobarCliente} from '@/app/components/aprovaciones'
import {useFetchClientes} from '@/app/services/api'

const TablaClientes = ({ filter, setSelectedCliente, criterio }) => {
    const { clients, loading } = useFetchClientes(filter);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (!Array.isArray(clients)) {
        console.error('clients no es un array:', clients);
        return null;
    }

    return (
        <div className="w-full text-black bg-gray-100">
            <table className="min-w-full  shadow-md rounded my-6 text-black">
                <thead>
                    <tr className="bg-blue-400">
                        <th className="text-left py-2 px-4 text-black">Cliente</th>
                        <th className="text-left py-2 px-4 text-black">loan_id</th>
                        <th className="text-left py-2 px-4 text-black">max_days_late</th>
                        <th className="text-left py-2 px-4 text-black">loan_origination_datetime</th>
                        <th className="text-left py-2 px-4 text-black">Estado del Crédito</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map((cliente) => (
                        <tr
                            key={`${cliente.customer_id}`}
                            className="border-b hover:bg-green-50 text-black"
                            onClick={() => setSelectedCliente(cliente)}
                        >
                            <td className="py-2 px-4">{cliente.customer_id}</td>
                            <td className="py-2 px-4">{cliente.loan_id}</td>
                            <td className="py-2 px-4">{cliente.max_days_late}</td>
                            <td className="py-2 px-4">{cliente.loan_origination_datetime}</td>
                            <td className="py-2 px-4">
                                <AprobarCliente cliente={cliente} criterio={criterio} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TablaClientes;

