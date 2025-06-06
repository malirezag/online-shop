import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutApi } from "../../services/UserApi";

export function useLogout() {
  const queryclient = useQueryClient();
  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryclient.invalidateQueries({ type: "active" });
    },
  });

  return { logout, isPending };
}
