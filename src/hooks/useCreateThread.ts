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
    image: "",
    user_id: 5,
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  const handlePost = useMutation({
    mutationFn: async () => await axiosApi.post("/threads", form),
    onSuccess: () => {
      toast("Success", "New Thread successfully posted 😀", "success");
      queryClient.invalidateQueries({ queryKey: ["thread-posts"] });
    },
    onError: (err) => toast("Error", err.message, "warning"),
  });
  return { handleChange, handlePost };
}
