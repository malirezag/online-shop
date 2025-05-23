import { useQuery } from "@tanstack/react-query";
import { getUserApi } from "../../services/UserApi";

export default function useGetUser() {
  const { data: user } = useQuery({
    queryFn: getUserApi,
    queryKey: ["user"],
  });

  return { user };
}
