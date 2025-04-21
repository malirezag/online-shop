import { useEffect, useRef } from "react";
import Button from "./Button";
import Product from "./Product";
import Title from "./Title";

export default function NewArrival() {
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
    <div className="">
      <Title title="NEW ARRIVALS" className="pb-7 pt-10" data-aos="fade-down" />
      <div
        className="flex overflow-x-auto space-x-4 px-4 overflow-x-hidden "
        ref={ref}
      >
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div className="mx-4 text-center ">
        <Button
          text="View All"
          className="text-black border border-gray-400 mt-7 mb-10 md:w-70               "
        />
      </div>
    </div>
  );
}
