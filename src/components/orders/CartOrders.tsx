import Order from "../../ui/Order";
import Title from "../../ui/Title";
import useGetOrders from "./useGetOrders";

export default function CartOrders() {
  const { orders, isLoading } = useGetOrders();
  console.log(isLoading);

  console.log(orders);

  return (
    <div className="md:w-[60%]">
      <Title title="YOUR CART" className=" text-left mx-5" />
      <div className="border border-gray-300 rounded-3xl mx-5 divide-y divide-gray-300 my-5 ">
        {orders?.map((order) => <Order order={order} />)}
      </div>
    </div>
  );
}
