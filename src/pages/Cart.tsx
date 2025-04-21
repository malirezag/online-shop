import Header from "../ui/Header";
import Order from "../ui/Order";
import Title from "../ui/Title";

export default function Cart() {
  return (
    <div className="">
      <Header />

      <div className=" flex flex-row gap-3 text-lg text-gray-500 mx-5 py-5 border-t border-gray-300">
        <button>Home</button>
        <span>{">"}</span>
        <button className="text-gray-900">Cart</button>
      </div>

      <Title title="YOUR CART" className=" text-left mx-5" />

      <div className="border border-gray-300 rounded-3xl mx-5 divide-y divide-gray-300 my-5">
        <Order />
        <Order />
        <Order />
        <Order />
      </div>
    </div>
  );
}
