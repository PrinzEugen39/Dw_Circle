import axios from "axios";

const axiosApi = axios.create({
    baseURL: "http://103.253.145.125:5069/api/v1"
})

export default axiosApi

export const setAuthToken = (token:string) => {
    if (token) {
        axiosApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete axiosApi.defaults.headers.common["Authorization"];
    }
}