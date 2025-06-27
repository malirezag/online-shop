import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserName } from "../../services/UserApi";

export function useUpdateUserName() {
  const queryClient = useQueryClient();
  const { mutate: updateName, isPending: isupdatingName } = useMutation({
    mutationKey: ["Name"],
    mutationFn: (name: string) => updateUserName(name),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey:['user'] });
    },
  });

  return { updateName, isupdatingName };
}
