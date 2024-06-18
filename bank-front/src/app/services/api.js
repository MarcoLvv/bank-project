import axios from 'axios';

const API_URL= 'http://localhost:8000/api/clientes/';

export const getClientes = async () => {
    return await axios.get(`${API_URL}/clientes/`);
}

export const createCliente = async (cliente) => {
    return await axios.post (`${API_URL}/cliente/`, cliente);
}