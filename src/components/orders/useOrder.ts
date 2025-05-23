import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setOrder } from "../../services/OrderApi";
import toast from "react-hot-toast";
import useGetUser from "../auth/useGetUser";

type Type = {
  color: string;
  size: string;
  count: number;
};
export default function useOrder() {
  const { user } = useGetUser();
  const userId: string = user?.user_metadata.sub;

  const queryClient = useQueryClient();
  const { mutate: setorder, isPending } = useMutation({
    mutationFn: ({ order, orderId }: { order: Type; orderId: number }) =>
      setOrder({ order, orderId, userId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ type: "active" });
      toast.success("product added successfully!");
    },
  });

  return { setorder, isPending };
}
