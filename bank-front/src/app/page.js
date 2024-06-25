'use client';
import React, { useState, useEffect } from 'react';
import TablaClientes from '@/app/components/clientes';
import FilterOptions from '@/app/components/filter_options';
import Statistics from '@/app/components/conteo';
import {ClienteRepository} from '@/app/repositories/repositorio_cliente'
//import { GetAllClientes } from '@/app/usecases/getclientes';
import {PruebaClientes} from '@/app/test/prueba'
import {AprobarCliente} from "@/app/components/aprovaciones";

const ClientesPage = () => {
    const [clientes, setClientes] = useState([]);
    const [filter, setFilter] = useState({
        keyword: '',
        dateRange: {
            startDate: '',
            endDate: ''
        }
    });

    const [selectedCliente, setSelectedCliente] = useState(null);
    const [criterio, setCriterio] = useState({
        accountAge: true,
        daysSinceApplication: true,
        maxDaysLate: true
    });

    return (
        <div className="container mx-auto p-4 bg-black bg-opacity-35">
            <h1 className="text-3xl font-bold text-center my-8">Lista de Clientes</h1>
            <div className="flex justify-between mb-4">
                <input
                    type="text"
                    placeholder="Buscar por ID"
                    className="border p-2 rounded w-1/3 text-black"
                    value={filter.keyword}
                    onChange={(e) => setFilter({ ...filter, keyword: e.target.value })}
                />
            </div>
            <div className="flex justify-between">
                <TablaClientes
                    filter={filter}
                    setSelectedCliente={setSelectedCliente}
                    criterio={criterio}
                />
                <div className="ml-4 w-1/3 text-black">
                    <FilterOptions filter={criterio} setFilter={setCriterio} />
                    {selectedCliente && <Statistics cliente={selectedCliente} />}
                </div>
            </div>
        </div>
    );
};

export default ClientesPage;

