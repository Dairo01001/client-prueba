import axios from 'axios';

export const getAllProducts = async () => (await axios.get('/product')).data;
export const getProductById = async (id) => (await axios.get(`/product/${id}`)).data;
export const createProduct = async (produc) => (await axios.post('/product', produc)).data;
export const updateProduct = async (produc, token) => (
  await axios.put('/product', produc, {
    headers: { Authorization: `Bearer ${token}` },
  })
).data;
export const deleteProduct = async (id, token) => (await axios.delete(`/product/${id}`, {
  headers: { Authorization: `Bearer ${token}` },
})).data;

export default {
  getAllProducts, getProductById, createProduct, updateProduct, deleteProduct,
};
