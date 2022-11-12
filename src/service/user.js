import axios from 'axios';

export const login = async (credentials) => (await axios.post('/login', credentials)).data;
export const singup = async (credentials) => (await axios.post('/singup', credentials)).data;

export default { login, singup };
