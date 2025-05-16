import { useEffect, useState } from "react";
import { getTrackBackground } from "react-range";
import { Range as Ranged } from "react-range";
import { useSearchParams } from "react-router-dom";

export default function Range() {
  const [value, setValue] = useState<number[]>([0, 3000]);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    searchParams.set("from", value[0].toString());
    setSearchParams(searchParams);
    searchParams.set("to", value[1].toString());
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams, value]);
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
      <p className="text-center my-5">
        from <strong className="mx-2">{value[0]}$</strong> to{" "}
        <strong className="mx-2">{value[1]}$</strong>
      </p>
    </div>
  );
}
