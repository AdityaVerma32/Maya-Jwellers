import axiosClient from "./AxiosClient";
import { API_ROUTES } from "../Constants/ApiRoutes";

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
        console.log("res", res);
        return res.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        } else {
            throw error;
        }
    }
};
