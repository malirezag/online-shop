import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteOrderApi } from "../../services/OrderApi";
import toast from "react-hot-toast";

export default function useDeleteOrder() {
  const queryClient = useQueryClient();
  const { mutate: deleteOrder, isPending } = useMutation({
    mutationFn: (id: number) => deleteOrderApi(id),
    onSuccess: () => {
      toast.success("order deleted");
      queryClient.invalidateQueries({ type: "active" });
    },
  });

  return { deleteOrder, isPending };
}
