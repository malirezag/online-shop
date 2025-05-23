import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../services/OrderApi";
import useGetUser from "../auth/useGetUser";

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
  const { user } = useGetUser();
  const userId = user?.user_metadata.sub;
  const { data: orders, isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: () => getOrders(userId),
  });

  return { orders, isLoading };
}
