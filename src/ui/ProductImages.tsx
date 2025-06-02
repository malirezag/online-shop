import { useSearchParams } from "react-router-dom";
import useGetProducts from "../components/products/useGetProducts";
import { useState } from "react";

export default function ProductImages() {
  const { products } = useGetProducts();
  const [searchParams] = useSearchParams();
  const currentProduct = products?.products.filter(
    (item) => item.id === Number(searchParams.get("id"))
  )?.[0];

  const imageArray: string[] = currentProduct?.image?.split("*") ?? [];

  const [selectedImage, setSelectedimage] = useState<string>(imageArray[0]);
  console.log(imageArray);

  return (
    <div className="flex flex-col gap-3 mb-5 md:w-[50%] lg:flex-row-reverse  ">
      <img
        src={selectedImage}
        alt=""
        className=" aspect-square md:h-100 xl:h-110 object-cover lg:w-full rounded-2xl "
      />
      <div className=" flex flex-row gap-5 lg:flex-col size-32">
        {imageArray.map((item) => (
          <button onClick={() => setSelectedimage(item)} className="">
            <img
              src={item}
              alt=""
              className={`size-25 rounded-2xl transition duration-300 ${item === selectedImage ? "ring-3 ring-offset-2" : ""}`}
            />{" "}
          </button>
        ))}
      </div>
    </div>
  );
}
