import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/ProductApi";
type ProductType = {
  image: string;
  id: number;
  availibility: number;
  off: number;
  price: number;
  size: string;
  exp: string;
  name: string;
  color: string;
};
export default function useGetProducts(): {
  products: ProductType[] | undefined;
  isLoading: boolean;
} {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return { products, isLoading };
}
