import { ChangeEvent, useState } from "react";
import { UseThreadProps } from "../types/ThreadItemsProps";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosApi from "../config/axiosApi";
import useToast from "./useToast";

export function useCreateThread() {
  const toast = useToast();
  const queryClient = useQueryClient();
  const [form, setForm] = useState<UseThreadProps>({
    content: "",
    user_id: 6,
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }
  
  const handlePost = useMutation({
    mutationFn: async (newThread: UseThreadProps) => {
      console.log(newThread);
      
      return await axiosApi.post("/thread", newThread);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["thread-posts"] });
      toast("Success", "New Thread successfully posted 😀", "success");
      setForm({
        content: "",
        user_id: 6,
      });
    },
    onError: (err) => {
      console.log(err);
      
      toast("Error", err.message, "warning")
    },
  });
  return { form, handleChange, handlePost };
}
