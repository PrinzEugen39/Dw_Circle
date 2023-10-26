import { useQuery } from "@tanstack/react-query";
import axiosApi from "../config/axiosApi";

export function useReplies() {
  const {
    data: replyData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["post-replies"],
    queryFn: async () => {
      const { data } = await axiosApi.get("/replies");
      return data;
    },
  });

  return { replyData, isLoading, error };
}
