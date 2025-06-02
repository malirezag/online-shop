import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProductApi } from "../../services/ProductApi";
import { ProductType } from "../../helpers/types";
import toast from "react-hot-toast";

export default function useUpdateProduct() {
  const queryClient = useQueryClient();
  const { mutate: updateProduct, isPending: isUpdating } = useMutation({
    mutationFn: (product: ProductType) => updateProductApi(product),
    onSuccess: () => {
      toast.success("updated sucessfully");
      queryClient.invalidateQueries();
    },
    onError: (err) => toast.error(err.message),
  });
  return { isUpdating, updateProduct };
}
