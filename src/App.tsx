import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ThreadReplies from "./features/threads/thread_replies/ThreadReplies";
import AppLayout from "./layout/AppLayout";
import Thread from "./pages/Thread";
import Login from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import { useEffect, useState } from "react";
import axiosApi, { setAuthToken } from "./config/axiosApi";
import { useDispatch } from "react-redux";
import { AUTH_CHECK, AUTH_ERROR } from "./store/RootReducer";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

export default function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function authCheck() {
    try {
      setAuthToken(localStorage.token);
      const response = await axiosApi.get("/auth/check");
      dispatch(AUTH_CHECK(response?.data.user));
      setIsLoading(false);
    } catch (error) {
      dispatch(AUTH_ERROR());
      console.log("auth check", error);
      navigate("/auth/login");
    }
  }
  
  useEffect(() => {
    if (localStorage.token) {
      authCheck();
    } else {
      setIsLoading(false);
    }
  }, []);
  
  function IsNotLogin() {
    if (!localStorage.token) {
      return <Navigate replace to="auth/login" />;
    } else return <AppLayout />;
  }

  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={false} />

      <Routes>
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/signup" element={<SignUp />} />
        <Route element={<IsNotLogin />}>
          <Route index element={<Navigate replace to="threads" />} />
          <Route path="threads" element={<Thread />} />
          <Route path="threads/:id" element={<ThreadReplies />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}
