import { ChangeEvent, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosApi from "../config/axiosApi";
import useToast from "./useToast";
import { useParams } from "react-router-dom";
import { UseCreateReplyProps } from "../types/RepliesItemsProps";

export function useCreateReply() {
  const { id } = useParams();
  const toast = useToast();
  const queryClient = useQueryClient();
  const [form, setForm] = useState<UseCreateReplyProps>({
    content: "",
    user_id: 5,
    thread_id: Number(id),
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  const handleReply = useMutation({
    mutationFn:  (newReply: UseCreateReplyProps) => {

      return axiosApi.post("/replies", newReply);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["thread-reply", id]});
      toast("Success", "Reply posted successfully", "success");
      setForm({
        content: "",
        user_id: 5,
        thread_id: Number(id),
      });
    },
    onError: (err) => {
      console.log(err);

      toast("Error", err.message, "warning");
    },
  });
  return { form, handleChange, handleReply };
}
