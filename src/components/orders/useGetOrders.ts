import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../services/OrderApi";

type Order = {
  size: string;
  color: string;
  order: {
    name: string;
  };
};

export default function useGetOrders(): {
  orders: Order[] | undefined;
  isLoading: boolean;
} {
  const { data: orders, isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });
  return { orders, isLoading };
}
