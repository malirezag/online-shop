import { TbAdjustments } from "react-icons/tb";
import Title from "./Title";
import { GrNext } from "react-icons/gr";
import Range from "./Range";
import { useState } from "react";
import { colors } from "../helpers/colors";
import { useSearchParams } from "react-router-dom";
import { sizes } from "../helpers/sizes";

export default function Filter() {
  const [sizee, setSize] = useState("");
  const [color, setColor] = useState("");
  // const [price, setPrice] = useState([0, 3000]);
  // const [category, setCategory] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const handleColor = (item: string) => {
    setColor(item);
    searchParams.set("color", color);
    setSearchParams(searchParams);
  };
  const handleSize = (size: string) => {
    setSize(size);
    searchParams.set("size", sizee);
    setSearchParams(searchParams);
  };

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
        <div className="flex flex-wrap justify-center gap-3 flex-row">
          {colors.map((item) => (
            <label
              onClick={() => handleColor(item)}
              key={item}
              className="cursor-pointer"
            >
              <input type="radio" value={item} className="sr-only peer" />
              <div
                className={`w-8 h-8 rounded-full border-1 transition-all duration-200 ${
                  item === color
                    ? "ring-1 ring-offset-2 ring-gray-800"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: item }}
              />
            </label>
          ))}
        </div>
      </div>

      <div>
        {" "}
        <Title title="Sizes" className="text-lg text-left font-semibold mb-2" />
        <ul className="flex flex-row pb-5 border-b border-gray-300  gap-2 text-gray-800 items-center text-nowrap flex-wrap text-sm ">
          {sizes.map((size) => (
            <li key={size} onClick={() => handleSize(size)}>
              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="size"
                  value={size}
                  className="sr-only peer"
                />
                <div
                  className="bg-gray-100 rounded-full px-4 py-2 text-center transition-all duration-200
                          peer-checked:bg-black peer-checked:text-white"
                >
                  {size}
                </div>
              </label>
            </li>
          ))}
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
        {/* <button className="text-white bg-black text-balance w-full px-5 py-2 rounded-full">
          Apply Filter
        </button> */}
      </div>
    </div>
  );
}
