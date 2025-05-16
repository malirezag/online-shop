import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../services/OrderApi";

type Order = {
  size: string;
  color: string;
  count: number;
  orderId: {
    name: string;
    price: number;
    off: number;
    id: number;
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
