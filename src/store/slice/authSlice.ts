import { createSlice } from "@reduxjs/toolkit";
import { IReduxUser } from "../type/reduxType";
import { setAuthToken } from "../../config/axiosApi";

const initialState:IReduxUser ={
    id: 0,
    username: "",
    full_name: "",
    email: "",
    profile_picture: "",
    password: "",
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        AUTH_LOGIN: (_, action) => {
            const payload = action.payload;
            console.log(payload);
            setAuthToken(payload.token)
            localStorage.setItem("token", payload.token);

            const user: IReduxUser ={
                id: payload.id,
                username: payload.username,
                full_name: payload.full_name,
                email: payload.email,
                profile_picture: payload.profile_picture,
                password: payload.password
            }

            return user;
        },

        AUTH_CHECK: (_, action) => {
            const payload = action.payload;

            const user: IReduxUser ={
                id: payload.id,
                username: payload.username,
                full_name: payload.full_name,
                email: payload.email,
                profile_picture: payload.profile_picture,
                password: payload.password
            }

            return user;
        },

        AUTH_ERROR: () => {
            localStorage.removeItem("token")
        },
        AUTH_LOGOUT: () => {
            localStorage.removeItem("token")
        },
    },
})