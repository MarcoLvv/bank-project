// src/app/components/FilterOptions.js
import React from 'react';

const FilterOptions = ({ filter, setFilter }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilter(prevFilter => ({
            ...prevFilter,
            [name]: value
        }));
    };

    return (
        <div className="w-1/3 p-4 bg-gray-200 rounded bg-amber-600">
            <h2 className="text-xl font-bold mb-4">Opciones de Filtro</h2>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Buscar por ID:</label>
                <input
                    type="text"
                    name="keyword"
                    value={filter.keyword}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded text-black"
                />
            </div>
            {/* Otros filtros según necesidad */}
        </div>
    );
};

export default FilterOptions;
