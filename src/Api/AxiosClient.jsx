import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const axiosClient = (auth = false) => {
    const instance = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (auth) {
      const token = localStorage.getItem('auth_token'); // or sessionStorage / cookie
      if (token) {
        instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      }
    }
  
    return instance;
  };
  
  export default axiosClient;