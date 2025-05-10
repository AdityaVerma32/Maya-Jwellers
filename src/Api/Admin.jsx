import axios from "axios";
const base_url = import.meta.env.VITE_APP_BASE_URL


export const adminLogin = async (credentials) => {
    try {
        const res = await axios.post(
            base_url+"/login",
            credentials,
        );
        console.log("Login Response: ",res.data);
        return res.data;
    } catch (error) {
        throw error;
    }
};


