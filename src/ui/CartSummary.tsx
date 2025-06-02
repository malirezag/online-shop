import useGetOrders from "../components/orders/useGetOrders";
import Button from "./Button";
import Title from "./Title";

export default function CartSummary() {
  const { orders } = useGetOrders();
  console.log(orders);
  const subtotal =
    orders?.reduce(
      (sum, order) => sum + order?.orderId.price * order?.count,
      0
    ) ?? 0;
  const total: number = Number(
    orders
      ?.reduce(
        (sum, order) =>
          order?.orderId?.price * order?.count -
          (order?.orderId?.price * order?.orderId?.off * order?.count) / 100 +
          sum,
        0
      )
      .toFixed(1) ?? 0
  );
  const totalDiscount: number = Number(Math.ceil(subtotal - total).toFixed(1));
  const dicountPercent: number = Math.ceil(
    ((subtotal - total) / subtotal) * 100
  );
  const delivery = orders && orders?.length > 0 ? 15 : 0;
  // if (orders?.length === 0) return;
  return (
    <div className="border border-gray-300 rounded-3xl mx-5 divide-gray-300 md:mt-15 px-5 pb-5 mb-15 md:w-[40%] ">
      <Title
        title="Order Summary"
        className="font-semibold pb-3 pt-7 text-xl text-left tracking-wider"
      />
      <p className="text-gray-400 tracking-wider font-light flex flex-row justify-between py-2">
        Subtotal{" "}
        <span className="text-black font-normal text-lg">${subtotal}</span>
      </p>
      <p className="text-gray-400 tracking-wider font-light flex flex-row justify-between py-2">
        {`Discount (-${isNaN(dicountPercent) ? 0 : dicountPercent}%)`}{" "}
        <span className="text-red-500 font-normal text-lg">
          -${totalDiscount}
        </span>
      </p>
      <p className="text-gray-400 tracking-wider font-light flex flex-row justify-between py-2 border-b border-gray-300">
        Delivery Fee{" "}
        <span className="text-black font-normal text-lg">${delivery}</span>
      </p>
      <p className="text-gray-600 tracking-wider font-light flex flex-row justify-between py-5 text-lg">
        Total
        <span className="text-black font-semibold text-xl">
          ${total + delivery}
        </span>
      </p>

      <div className="flex flex-col gap-5">
        <div className="flex flex-row gap-3">
          <input
            type="email"
            className="bg-gray-100 w-full py-4 px-6 rounded-full outline-0"
            placeholder="%   Add promo code"
          />
          <button className="text-white bg-black px-6 rounded-full">
            Apply
          </button>
        </div>
        <Button
          text="Go to Checkout"
          className=" bg-black text-white md:w-full"
        />
      </div>
    </div>
  );
}
