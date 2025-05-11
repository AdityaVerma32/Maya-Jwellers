import axiosClient from "./AxiosClient";
import { API_ROUTES } from "../Constants/ApiRoutes";

const ITEMS_PER_PAGE = import.meta.env.VITE_ITEM_PER_PAGE || 10; // Default to 10 if not set in .env


export const addCategory = async (values) => {
    console.log("values", values);
    try {
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('image', values.image);
        const res = await axiosClient(true).post(
            API_ROUTES.PUBLIC.CATEGORIES,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        return res.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        } else {
            throw error;
        }
    }
};

export const getCategories = async (searchTerm, currentPage) => {
    try {
        const res = await axiosClient(true).get(
            API_ROUTES.PUBLIC.CATEGORIES,
            {
                params: {
                    search: searchTerm,
                    page: currentPage,
                    limit: ITEMS_PER_PAGE
                }
            });
        return res.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        } else {
            throw error;
        }
    }
};

export const getCategoryById = async (categoryId) => {
    try {
        const res = await axiosClient(true).get(
            `${API_ROUTES.PUBLIC.CATEGORIES}/${categoryId}`
        );
        return res.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        } else {
            throw error;
        }
    }
};

export const updateCategory = async (categoryId, values) => {
    try {
        const formData = new FormData();
        formData.append('name', values.name);
        if (values.image) {
            formData.append('image', values.image);
        }
        const res = await axiosClient(true).put(
            `${API_ROUTES.PUBLIC.CATEGORIES}/${categoryId}`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        return res.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        } else {
            throw error;
        }
    }
};