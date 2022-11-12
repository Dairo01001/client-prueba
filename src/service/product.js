import axios from 'axios';

export const getAllProducts = async () => (await axios.get('/product')).data;
export const getProductById = async (id) => (await axios.get(`/product/${id}`)).data;

export default { getAllProducts, getProductById };
