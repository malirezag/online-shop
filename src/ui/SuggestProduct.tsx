import { useEffect, useRef } from "react";
// import Product from "./Product";
import Button from "./Button";

export default function SuggestProduct() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = ref.current;

    if (!container) return;

    const handleWeel = (e: WheelEvent) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener("wheel", handleWeel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWeel);
    };
  }, []);

  return (
    <>
      <div className="flex overflow-x-auto space-x-4 px-4" ref={ref}>
        {/* <Product /> */}
      </div>
      <div className="mx-4 text-center ">
        <Button
          text="View All"
          className="text-black border border-gray-400 mt-7 mb-10 md:w-70               "
        />
      </div>
    </>
  );
}
