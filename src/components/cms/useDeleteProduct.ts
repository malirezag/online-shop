import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteApi } from "../../services/ProductApi";
import toast from "react-hot-toast";
import { useGetAllOrders } from "../orders/useGetOrders";
export function useDeleteProduct() {
  const { orders } = useGetAllOrders();

  const queryclient = useQueryClient();
  const { mutate: deleteProduct, isPending: isDeleting } = useMutation({
    // @ts-ignore
    mutationFn: (id: number) => deleteApi(id, orders),
    onSuccess: () => {
      toast.success("item deleted sucessfully");
      queryclient.invalidateQueries({ type: "active" });
    },
  });

  return { deleteProduct, isDeleting };
}
