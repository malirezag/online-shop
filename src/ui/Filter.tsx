import { TbAdjustments } from "react-icons/tb";
import Title from "./Title";
import { GrNext } from "react-icons/gr";
import Range from "./Range";

export default function Filter() {
  return (
    <div className="md:min-w-60 md:max-w-75 hidden md:flex border border-gray-300 rounded-2xl md:flex-col h-fit px-3 py-4 divide-y divide-gray-300 gap-3">
      <div className="flex flex-row justify-between items-center">
        <Title title="Filter" className="text-lg" />
        <button className=" rounded-full text-xl ">
          <TbAdjustments />
        </button>
      </div>

      <div className="text-sm text-gray-600 flex flex-col items-start gap-3 pb-5 ">
        <button className="flex justify-between items-center w-full">
          T-shirts{" "}
          <span>
            <GrNext />
          </span>
        </button>
        <button className="flex justify-between items-center w-full">
          Shorts{" "}
          <span>
            <GrNext />
          </span>
        </button>
        <button className="flex justify-between items-center w-full">
          Shirts{" "}
          <span>
            <GrNext />
          </span>
        </button>
        <button className="flex justify-between items-center w-full">
          Hoodies{" "}
          <span>
            <GrNext />
          </span>
        </button>
        <button className="flex justify-between items-center w-full">
          Jeans{" "}
          <span>
            <GrNext />
          </span>
        </button>
      </div>

      <div>
        <Title title="Price" className="text-lg text-left font-semibold" />
        <Range />
      </div>

      <div className="pb-5">
        <Title
          title="Colors"
          className="text-lg text-left font-semibold mb-2"
        />
        <ul className="flex flex-wrap justify-center gap-3 flex-row">
          <li className="bg-blue-600 w-7 h-7 rounded-full "></li>
          <li className="bg-green-600 w-7 h-7 rounded-full "></li>
          <li className="bg-purple-600 w-7 h-7 rounded-full "></li>
          <li className="bg-red-600 w-7 h-7 rounded-full "></li>
          <li className="bg-pink-600 w-7 h-7 rounded-full "></li>
          <li className="bg-slate-900 w-7 h-7 rounded-full "></li>
          <li className="bg-gray-600 w-7 h-7 rounded-full "></li>
          <li className="bg-orange-600 w-7 h-7 rounded-full "></li>
          <li className="bg-gray-600 w-7 h-7 rounded-full "></li>
          <li className="bg-yellow-600 w-7 h-7 rounded-full "></li>
        </ul>
      </div>

      <div>
        {" "}
        <Title title="Sizes" className="text-lg text-left font-semibold mb-2" />
        <ul className="flex flex-row pb-5 border-b border-gray-300  gap-2 text-gray-800 items-center text-nowrap flex-wrap text-sm ">
          <li className=" bg-gray-100 rounded-full px-4 py-2">Small</li>
          <li className=" bg-gray-100 rounded-full px-4 py-2">X-Small</li>
          <li className=" bg-gray-100 rounded-full px-4 py-2">XX-Small</li>
          <li className=" bg-gray-100 rounded-full px-4 py-2">Medium</li>
          <li className=" bg-gray-100 rounded-full px-4 py-2">Large</li>
          <li className=" bg-gray-100 rounded-full px-4 py-2">X-Large</li>
        </ul>
      </div>

      <div className="text-sm text-gray-600 flex flex-col items-start gap-3 pb-5 ">
        <p className="text-lg text-black font-semibold">Dress Style</p>
        <button className="flex justify-between items-center w-full">
          Casual{" "}
          <span>
            <GrNext />
          </span>
        </button>
        <button className="flex justify-between items-center w-full">
          Formal{" "}
          <span>
            <GrNext />
          </span>
        </button>
        <button className="flex justify-between items-center w-full">
          Party{" "}
          <span>
            <GrNext />
          </span>
        </button>
        <button className="flex justify-between items-center w-full">
          Gym{" "}
          <span>
            <GrNext />
          </span>
        </button>
        <button className="flex justify-between items-center w-full">
          Jeans{" "}
          <span>
            <GrNext />
          </span>
        </button>
        <button className="text-white bg-black text-balance w-full px-5 py-2 rounded-full">
          Apply Filter
        </button>
      </div>
    </div>
  );
}
