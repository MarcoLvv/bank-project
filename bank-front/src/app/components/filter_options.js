'use client';
import React from 'react';

const FilterOptions = ({ filter, setFilter }) => {
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setFilter({ ...filter, [name]: checked });
    };

    return (
        <div className="p-4 bg-gray-200 rounded shadow-md text-black">
            <h2 className="text-xl font-bold mb-4">Select Evaluation Criteria</h2>
            <div>
                <label className="block text-black">
                    <input
                        type="checkbox"
                        name="accountAge"
                        checked={filter.accountAge}
                        onChange={handleCheckboxChange}
                    />
                    Account Age (Account creation date before 2021-01-01)
                </label>
                <label className="block">
                    <input
                        type="checkbox"
                        name="daysSinceApplication"
                        checked={filter.daysSinceApplication}
                        onChange={handleCheckboxChange}
                    />
                    Days Since Application
                </label>
                <label className="block">
                    <input
                        type="checkbox"
                        name="maxDaysLate"
                        checked={filter.maxDaysLate}
                        onChange={handleCheckboxChange}
                    />
                    Maximum Days Late
                </label>
            </div>
        </div>
    );
};

export default FilterOptions;


