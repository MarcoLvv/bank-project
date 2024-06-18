'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreditApproval from "@/app/components/aprovaciones";

const TablaClientes = ({ filter }) => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = 'http://localhost:8000/api/clientes/';
                if (filter.keyword) {
                    url += `?id=${filter.keyword}`;
                }

                const response = await axios.get(url);
                setClients(response.data.results); // Asumiendo que 'results' contiene la lista de clientes
                setLoading(false); // Marca la carga como completa
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false); // Marca la carga como completa en caso de error
            }
        };

        fetchData();
    }, [filter]); // Ejecutar efecto cuando 'filter' cambie

    // Muestra un mensaje de carga mientras se obtienen los datos
    if (loading) {
        return <p>Cargando...</p>;
    }

    // Verifica que clients sea un array antes de intentar iterar sobre él
    if (!Array.isArray(clients)) {
        console.error('clients no es un array:', clients);
        return null; // O maneja este caso de acuerdo a tu lógica
    }

    // Muestra los datos cuando la carga está completa
    return (
        <div className="flex justify-center">
            <div className="w-screen">
                <h1 className="text-center mb-4 text-2xl font-bold">Lista de Clientes</h1>
                <table className="min-w-full bg-fuchsia-800 shadow-md rounded my-6">
                    <thead>
                    <tr className="bg-blue-600">
                        <th className="text-left py-2 px-4 text-black">Cliente</th>
                        <th className="text-left py-2 px-4 text-black">loan_id</th>
                        <th className="text-left py-2 px-4 text-black">max_days_late</th>
                        <th className="text-left py-2 px-4 text-black">loan_origination_datetime</th>
                        <th className="text-left py-2 px-4 text-black">Estado de Credito</th>
                    </tr>
                    </thead>
                    <tbody>
                    {clients.map(cliente => (
                            <tr key={cliente.customer_id} className="border-b hover:bg-gray-100">
                                <td className="py-2 px-4">{cliente.customer_id}</td>
                                <td className="py-2 px-4">{cliente.loan_id}</td>
                                <td className="py-2 px-4">{cliente.max_days_late}</td>
                                <td className="py-2 px-4">{cliente.loan_origination_datetime}</td>
                                <td><CreditApproval cliente={cliente}/></td>
                                {/* Agrega más columnas según sea necesario */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TablaClientes;
