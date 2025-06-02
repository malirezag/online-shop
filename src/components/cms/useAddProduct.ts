import { useMutation } from "@tanstack/react-query";
import { AddProductApi } from "../../services/ProductApi";

type AddType = {
  size: string;
  color: string;
  name: string;
  exp: string;
  category: string;
  price: number;
  off: number;
  file: FileList;
};

export function useAddProduct() {
  const { mutate: addProduct, isPending } = useMutation({
    mutationFn: (product: AddType) => AddProductApi(product),
  });

  return { addProduct ,isPending};
}
