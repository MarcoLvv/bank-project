// src/repositories/ClienteRepository.js
import {fetchClientes} from '@/app/services/api'

export const ClienteRepository = {
    getAll: async () => {
        try {
            return await fetchClientes();
        } catch (error) {
            console.error('Error fetching clients:', error);
            throw error;
        }
    }
};


