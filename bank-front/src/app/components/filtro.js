import React from 'react';

const FilterOptions = ({ filter, setFilter }) => {
    const handleKeywordChange = (event) => {
        setFilter({ ...filter, keyword: event.target.value });
    };

    // Agregar más funciones para manejar otros tipos de filtros y operaciones

    return (
        <div className="w-1/3 border border-gray-400 p-4">
            <h2 className="text-xl font-bold mb-4">Opciones de Filtro</h2>
            <div className="mb-4">
                <label className="block mb-2">Palabra Clave:</label>
                <input type="text" className="border border-gray-300 px-2 py-1 w-full text-black" value={filter.keyword} onChange={handleKeywordChange} />
            </div>
            {/* Agregar más opciones de filtro según necesidad */}
        </div>
    );
};

export default FilterOptions;
