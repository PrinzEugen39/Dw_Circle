import { useQuery } from "@tanstack/react-query";
import axiosApi from "../../config/axiosApi";
import { useSelector } from "react-redux";
import { RootState } from "../../store/type/RootState";

export function useGetLike() {
  const user = useSelector((state: RootState) => state?.auth);

  const {
    data: LikeData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["Like"],
    queryFn: async () => {
      const { data } = await axiosApi.get(`like/${user.id}`);
      return data;
    },
  });
  return {
    LikeData,
    isLoading,
    error,
  };
}
