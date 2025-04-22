import { BiTrash } from "react-icons/bi";
import Counter from "./Counter";

export default function Order() {
  return (
    <div className="flex flex-row gap-4 mx-5 py-5 ">
      <img src="/images/Frame 33.png" className="w-29 h-29" />

      <div className="w-full">
        <div className="flex flex-row justify-between items-center text-lg font-semibold">
          <h2 className="leading-4">Gradient Graphic T-shirt</h2>
          <BiTrash className="text-red-500" />
        </div>

        <div className="text-sm text-gray-500">
          <p>
            <span className="text-black">Size:</span> Large
          </p>
          <p>
            {" "}
            <span className="text-black">Color:</span> White
          </p>
        </div>

        <div className="flex flex-row justify-between">
          <p className="text-2xl">$124</p>
          <Counter />
        </div>
      </div>
    </div>
  );
}
