// src/usecases/GetAllClientes.js
import { ClienteRepository } from '@/app/repositories/repositorio_cliente';

export const GetAllClientes = {
    execute: async () => {
        try {
            return await ClienteRepository.getAll();
        } catch (error) {
            console.error('Error executing GetAllClientes:', error);
            throw error;
        }
    }
};
