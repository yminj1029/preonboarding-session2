import axios from 'axios';

const defaultOptions = {
  baseURL: '/api/v1/search-conditions/',
  headers: {
    withCredentials: true,
  },
};
const api = axios.create(defaultOptions);

export default api;
