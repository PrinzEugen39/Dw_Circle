import { useQuery } from "@tanstack/react-query";
import axiosApi from "../config/axiosApi";
import { useParams } from "react-router-dom";

export function useReplies() {
  const {id} = useParams()
  const {
    data: replyData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["post-replies", id],
    queryFn: async () => {
      const { data } = await axiosApi.get(`/replies`);
      return data;
    },
  });

  return { replyData, isLoading, error };
}
