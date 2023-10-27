import { ChangeEvent, FormEvent, useRef, useState } from "react";
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
    user_id: 6,
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value, files } = event.target;

    if (files) {
      setForm({
        ...form,
        [name]: files[0],
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
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
        image: "",
        user_id: 6,
      });
    },
    onError: (err) => {
      console.log(err);

      toast("Error", err.message, "warning");
    },
  });

  // async function handlePost2(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();

  //   const formData = new FormData();
  //   formData.append("content", form.content);
  //   formData.append("image", form.image as File);

  //   const response = await API.post("/thread", form);
  // }

  // const useFileRef = useRef<HTMLInputElement>(null)


  return { form, handleChange, handlePost };
}
