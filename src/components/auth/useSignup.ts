import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signUpApi } from "../../services/UserApi";

export function useSignup() {
  const queryClient = useQueryClient();
  const { mutate: signup, isPending } = useMutation({
    mutationFn: ({
      email,
      password,
      name,
    }: {
      email: string;
      password: string;
      name: string;
    }) => signUpApi({ email, password, name }),
    onSuccess: () => {
      queryClient.invalidateQueries({ type: "active" });
    },
  });
  return { signup, isPending };
}
