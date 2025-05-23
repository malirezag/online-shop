import { useEffect, useRef } from "react";
import Button from "./Button";
import Title from "./Title";
import useGetProducts from "../components/products/useGetProducts";
import Product from "./Product";

type Type = {
  id: number;
  off: number;
  price: number;
  category: "casual" | "gym" | "party" | "formal";
  color: string;
  created_at: string;
  exp: string;
  size: string;
  name: string;
  image: string;
};

export default function NewArrival() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { products } = useGetProducts();
  const newArrival: Type[] = products ? products.products.slice(0, 10) : [];
  console.log(newArrival);

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
      <div className="flex overflow-x-auto space-x-4 px-4 md:gap-10" ref={ref}>
        {newArrival?.map((product) => <Product product={product} />)}
      </div>
      <div className="mx-4 text-center ">
        {/* <Button
          to=""
          text="View All"
          className="text-black border border-gray-400 mt-7 mb-10 md:w-70 px-10"
        /> */}
      </div>
    </div>
  );
}
