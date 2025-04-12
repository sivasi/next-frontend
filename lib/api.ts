import axios from 'axios';

const api = axios.create({
  baseURL: `https://next-backend-q902.onrender.com/api`,
  withCredentials: true,
});

export default api;
