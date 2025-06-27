import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../../services/UserApi";

export function useUpdateUserPassword() {
  const queryClient = useQueryClient();
  const { mutate: update, isPending: isupdating } = useMutation({
    mutationKey: ["pass"],
    mutationFn: (password: string) => updateUser(password),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  return { update, isupdating };
}
