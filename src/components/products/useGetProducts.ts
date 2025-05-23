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
  const [searchParams] = useSearchParams();
  const size: string = searchParams.get("size") ?? "";
  const color: string = searchParams.get("color") ?? "";
  const priceFrom: number = Number(searchParams.get("from"));
  const priceTo: number = Number(searchParams.get("to"));
  const page: number =
    url !== "All-products" ? 0 : Number(searchParams.get("page")) || 1;
  const { data: products, isLoading } = useQuery({
    queryKey: ["products", page, color, size, priceFrom, priceTo],
    queryFn: () => getProducts({ from, to, priceFrom, priceTo, color, size }),
  });

  const to: number = page > 0 ? page * pagNum : (products?.count ?? 1000);
  const from: number = page > 1 ? (page - 1) * pagNum : 0;

  return { products, isLoading };
}
