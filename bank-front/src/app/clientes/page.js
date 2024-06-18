import React, { useState } from 'react';
import TablaClientes from '../components/clientes';
import FilterOptions from '../components/filtro';

const ClientesPage = () => {
    const [filter, setFilter] = useState({
        keyword: '',
        dateRange: {
            startDate: '',
            endDate: ''
        }
        // Otros campos de filtro según necesidad
    });

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-center my-8">Lista de Clientes</h1>
            <div className="flex justify-between">
                <TablaClientes filter={filter} />
                <FilterOptions filter={filter} setFilter={setFilter} />
            </div>
        </div>
    );
};

export default ClientesPage;
