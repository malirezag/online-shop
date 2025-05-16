import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import Order from "../../ui/Order";
import Spinner from "../../ui/Spinner";
import Title from "../../ui/Title";
import useGetOrders from "./useGetOrders";
import { BiCart } from "react-icons/bi";

export default function CartOrders() {
  const { orders, isLoading } = useGetOrders();
  console.log(orders);

  if (isLoading) return <Spinner />;

  return (
    <div className="md:w-[60%]">
      <Title title="YOUR CART" className=" text-left mx-5" />

      {orders?.length === 0 ? (
        <div className="md:h-[45vh] my-15 flex items-center justify-center mx-5 md:mx-10 flex-col gap-5 md:gap-10">
          <p className=" text-gray-500 text-xl md:text-2xl text-center leading-10 tracking-wide">
            your cart is still empty lets order some fantasric new arrival
            clothes 😎
          </p>
          <Link
            to={"/category/casual"}
            className="text-white bg-green-500 text-2xl w-90 py-2 rounded-full flex justify-between px-5 items-center"
          >
            Lets Shop{" "}
            <span>
              <BiCart className="text-3xl" />
            </span>
          </Link>
        </div>
      ) : (
        <div className="border border-gray-300 rounded-3xl mx-5 divide-y divide-gray-300 my-5 ">
          {/* @ts-expect-error */}
          {orders?.map((order) => <Order order={order} />)}
        </div>
      )}
    </div>
  );
}
