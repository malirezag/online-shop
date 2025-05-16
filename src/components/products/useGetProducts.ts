import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/ProductApi";
import { pagNum } from "../../helpers/PagNum";
import { useSearchParams } from "react-router-dom";

type Product = {
  id: number;
  created_at: string;
  category: "casual" | "formal" | "gym" | "party";
  color: string;
  size: string;
  name: string;
  price: number;
  off: number;
  exp: string;
  image: string;
};

type ProductsResponse = {
  count: number | null;
  products: Product[];
};

export default function useGetProducts(): {
  products: ProductsResponse | undefined;
  isLoading: boolean;
} {
  const url = window.location.pathname.split("/")[2];
  console.log(url);

  const [searchParams] = useSearchParams();
  const page: number =
    url !== "All-products" ? 0 : Number(searchParams.get("page")) || 1;
  const { data: products, isLoading } = useQuery({
    queryKey: ["products", page],
    queryFn: () => getProducts(from, to),
  });

  const to: number = page > 0 ? page * pagNum : (products?.count ?? 1000);
  const from: number = page > 1 ? (page - 1) * pagNum : 0;

  return { products, isLoading };
}
