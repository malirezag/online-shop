import { useState } from "react";
import { getTrackBackground } from "react-range";
import { Range as Ranged } from "react-range";
import { useSearchParams } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";

export default function Range() {
  const [value, setValue] = useState<number[]>([0, 3000]);
  const [searchParams, setSearchParams] = useSearchParams();
  function handleClick() {
    searchParams.set("from", value[0].toString());
    setSearchParams(searchParams);
    searchParams.set("to", value[1].toString());
    setSearchParams(searchParams);
  }
  return (
    <div className="my-4 mx-3">
      <Ranged
        step={50}
        min={0}
        max={3000}
        values={value}
        onChange={(value) => setValue(value)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "4px",
              width: "100%",
              background: getTrackBackground({
                values: value,
                colors: ["#ccc", "#000", "#ccc"],
                min: 0,
                max: 3000,
              }),
              borderRadius: "4px",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "20px",
              width: "20px",
              backgroundColor: "#000",
              borderRadius: "50%",
              border: "2px solid white",
            }}
          />
        )}
      />
      <div className="flex flex-row justify-between my-7">
        {" "}
        <p className="text-center justify-around flex row items-center ">
          from <strong className="mx-2">{value[0]}$</strong> to{" "}
          <strong className="mx-2">{value[1]}$</strong>
        </p>
        {
          <button onClick={handleClick}>
            <FaCircleCheck
              className={`size-6 ${value[0] !== 0 || value[1] !== 3000 ? "text-black active:text-gray-500" : "text-gray-400"}`}
            />
          </button>
        }
      </div>
    </div>
  );
}
