import { useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";
import useUpdatecount from "../components/orders/useupdateCount";
import useDeleteOrder from "../components/orders/useDeleteOrder";
import Spinner from "./Spinner";

type Type = {
  order: {
    id: number;
    size: string;
    color: string;
    count: number;
    orderId: { image: string; name: string; price: number };
  };
};

export default function Order({ order }: Type) {
  const [value, setValue] = useState(order?.count);
  const { updateCount } = useUpdatecount();
  const { deleteOrder, isPending } = useDeleteOrder();

  //to update count
  useEffect(() => {
    updateCount({ count: value, id: order?.id });
  }, [order?.id, updateCount, value]);

  return (
    <>
      <div className="flex flex-row gap-4 mx-5 py-5 ">
        <div className="flex">
          <p
            style={{ backgroundColor: order?.color }}
            className="size-3 m-1 rounded-full absolute opacity-65"
          ></p>
          <img src={order?.orderId?.image} className="w-29 h-29" />
        </div>

        <div className="w-full">
          <div className="flex flex-row justify-between items-center text-lg font-semibold">
            <h2 className="leading-4">{order?.orderId?.name}</h2>
            <button onClick={() => deleteOrder(order?.id)}>
              {isPending ? (
                <Spinner className="size-5" />
              ) : (
                <BiTrash className="text-red-500" />
              )}
            </button>
          </div>

          <div className="text-sm text-gray-500">
            <p>
              <span className="text-black">Size:</span> {order?.size}
            </p>
            <p>
              {" "}
              <span className="text-black ">Color:</span> {order?.color}{" "}
            </p>
          </div>

          <div className="flex flex-row justify-between">
            <p className="text-2xl">${order?.orderId?.price}</p>
            {/* <Counter /> */}
            <div className="bg-gray-200 rounded-full font-bold text-lg flex gap-2 flex-row px-2 items-center">
              <button
                onClick={() => {
                  setValue((val) => (val > 0 ? val - 1 : 0));
                }}
              >
                -
              </button>
              <input
                value={value}
                type="text"
                className="text-center w-8 outline-0 font-normal"
              />
              <button
                onClick={() => {
                  setValue((val) => val + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
