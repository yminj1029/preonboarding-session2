import axios from 'axios';

// const defaultOptions = {
//   baseURL: process.env.REACT_APP_API_URL,
//   headers: {
//     withCredentials: true,
//   },
// };
const api = axios.create();

export default api;
