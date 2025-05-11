import axiosClient from "./AxiosClient";
import { API_ROUTES } from "../Constants/ApiRoutes";

export const adminLogin = async (credentials) => {
    try {
        const res = await axiosClient(false).post(API_ROUTES.ADMIN.LOGIN, credentials);
        return res.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        } else {
            throw error;
        }
    }
};

export const adminLogout = async () => {
    try {
        const res = await axiosClient(true).post(API_ROUTES.ADMIN.LOGOUT);
        return res.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        } else {
            throw error;
        }
    }
}

