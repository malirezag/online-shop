import { useMutation, useQueryClient } from "@tanstack/react-query";
import updateCountApi from "../../services/OrderApi";
import toast from "react-hot-toast";

export default function useUpdatecount() {
  const queryClient = useQueryClient();
  const { mutate: updateCount } = useMutation({
    mutationFn: ({ count, id }: { count: number; id: number }) =>
      updateCountApi({ count, id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ type: "active" });
      console.log("added");
    },
    onError: (err) => {
      toast.error("an error occured:");
      console.log(err.message);
    },
  });

  return { updateCount };
}
