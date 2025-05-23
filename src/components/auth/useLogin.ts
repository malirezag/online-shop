import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginApi } from "../../services/UserApi";

export function useLogin() {
  const queryClient = useQueryClient();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      loginApi({ email, password }),
    onSuccess: () => queryClient.invalidateQueries({ type: "active" }),
  });

  return { login, isPending };
}
