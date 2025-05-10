const BASE = '/api'; // or empty string if already handled in axiosClient

export const API_ROUTES = {
  ADMIN: {
    LOGIN: `${BASE}/login`,
    REGISTER: `${BASE}/register`,
    USER: `${BASE}/user`,
    LOGOUT: `${BASE}/logout`
  },
  PUBLIC: {
    PRODUCTS: `${BASE}/products`,
    CATEGORIES: `${BASE}/categories`,
  },
};
