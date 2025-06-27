import { useSearchParams } from "react-router-dom";
import useGetProducts from "../components/products/useGetProducts";
import { useEffect, useState } from "react";

export default function ProductImages() {
  const { products } = useGetProducts();
  const [searchParams] = useSearchParams();
  const currentProduct = products?.products.filter(
    (item) => item.id === Number(searchParams.get("id"))
  )?.[0];
  useEffect(() => {}, [currentProduct]);

  const imageArray: string[] = currentProduct?.image?.split("*") ?? [];
  const [selectedImage, setSelectedimage] = useState<string>(imageArray[0]);
  useEffect(() => {
    if (imageArray.length > 0) {
      setSelectedimage(imageArray[0]);
    }
  }, [currentProduct]);

  return (
    <div className="flex flex-col gap-3 mb-5 md:w-[50%] lg:flex-row-reverse  ">
      <img
        src={selectedImage}
        alt=""
        className=" aspect-square md:h-100 xl:h-110 object-cover lg:w-full rounded-2xl "
      />
      <div className=" flex flex-row gap-5 lg:flex-col sm:size-30 sm:min-w-full lg:min-w-10  ">
        {imageArray.map((item) => (
          <button onClick={() => setSelectedimage(item)} type="button">
            <img
              src={item}
              alt=""
              className={`size-20  rounded-2xl transition duration-300 ${item === selectedImage ? "ring-3 ring-offset-2" : ""}`}
            />{" "}
          </button>
        ))}
      </div>
    </div>
  );
}
