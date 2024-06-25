import React,{useState,useEffect} from 'react'
import axios from 'axios'

const API_URL = 'http://localhost:8000/api/clientes/';

export const useFetchClientes = (filter) => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = API_URL;
                if (filter.keyword) {
                    url += `?id=${filter.keyword}`;
                }
                const response = await axios.get(url);
                const data = response.data.results;

                // Eliminar duplicados (si es necesario)
                const uniqueClients = Array.from(new Set(data.map(a => a.loan_id)))
                    .map(id => {
                        return data.find(a => a.loan_id === id)
                    });

                setClients(uniqueClients);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [filter]);

    return { clients, loading };
};


export const fetchClientes = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Error fetching clientes: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data.results);
        return data.results; // Devolvemos solo la lista de clientes
    } catch (error) {
        console.error('Error fetching clientes:', error);
        throw error; // Propagar el error para manejarlo en el componente que llama a fetchClientes
    }
};

// export const ClienteRepository = {
//     getAll: async () => {
//         try {
//             return await fetchClientes();
//         } catch (error) {
//             console.error('Error fetching clients:', error);
//             throw error;
//         }
//     }
// };