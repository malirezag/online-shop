import Order from "./Order";
import Title from "./Title";

export default function CartOrders() {
  return (
    <div className="md:w-[60%]">
      <Title title="YOUR CART" className=" text-left mx-5" />
      <div className="border border-gray-300 rounded-3xl mx-5 divide-y divide-gray-300 my-5 ">
        <Order />
        <Order />
        <Order />
        <Order />
      </div>
    </div>
  );
}
