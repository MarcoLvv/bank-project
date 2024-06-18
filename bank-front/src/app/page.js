'use client';
import React, { useState } from 'react';
import TablaClientes from './components/clientes';
import FilterOptions from './components/filter_options';

const ClientesPage = () => {
    const [filter, setFilter] = useState({
        keyword: '',
        dateRange: {
            startDate: '',
            endDate: ''
        }
    });

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-center my-8">Lista de Clientes</h1>
            <div className="flex flex-col items-center space-y-4">
                <FilterOptions filter={filter} setFilter={setFilter} />
                <TablaClientes filter={filter} />
            </div>
        </div>
    );
};

export default ClientesPage;
