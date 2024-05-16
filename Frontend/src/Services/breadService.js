import axios from 'axios';

export const getAll = async () => {
    const { data } = await axios.get('/api/breads',);
    return data;
};

export const search = async searchTerm => {
    const { data } = await axios.get('/api/breads/search/' + searchTerm, { showLoadingForRequest: false });
    return data;
};

export const getAllTags = async () => {
    const { data } = await axios.get('/api/breads/tags', { showLoadingForRequest: false });
    return data;
};

export const getAllByTag = async tag => {
    if (tag === 'All') return getAll(); // Asegúrate de que getAll() también pase el parámetro si es necesario.
    const { data } = await axios.get('/api/breads/tag/' + tag, { showLoadingForRequest: false });
    return data;
};

export const getById = async breadId => {
    try {
        const { data } = await axios.get('/api/breads/' + breadId, );
        return data;
    } catch (error) {
        console.error('Error fetching bread:', error);
        return null;
    }
};
