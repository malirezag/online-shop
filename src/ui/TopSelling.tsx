import { useRef, useEffect } from "react";
import Button from "./Button";
import Product from "./Product";
import Title from "./Title";

export default function TopSelling() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="border-t border-gray-300">
      <Title title="TOP SELLING" className="pb-7 pt-10" />

      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 px-4 overflow-x-hidden "
      >
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>

      <div className="mx-4 text-center">
        <Button
          text="View All"
          className="text-black border border-gray-400 my-7 md:w-70"
        />
      </div>
    </div>
  );
}
