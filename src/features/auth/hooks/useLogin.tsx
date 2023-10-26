import { ChangeEvent, useState } from "react";
import { IUserLogin } from "../../../types/UserProps";
import axiosApi from "../../../config/axiosApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AUTH_LOGIN } from "../../../store/RootReducer";
import useToast from "../../../hooks/useToast";

export function useLogin() {
  const [form, setForm] = useState<IUserLogin>({
    email: "",
    password: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const toast = useToast();
  async function handleLogin() {
    try {
      const response = await axiosApi.post("/auth/login", form);
      console.log(response?.data);
      dispatch(AUTH_LOGIN(response?.data))

      if (response) toast("Success", "Login success", "success")
      
      navigate("/threads");
    } catch (error) {
      console.log(error);
    }
  }

  return { form, handleChange, handleLogin };
}
