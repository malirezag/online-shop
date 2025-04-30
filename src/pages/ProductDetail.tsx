import Counter from "../ui/Counter";
import EmailForm from "../ui/EmailForm";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import NavHistory from "../ui/NavHistory";
import Price from "../ui/Price";
import ProductImages from "../ui/ProductImages";
import Title from "../ui/Title";
import SuggestProduct from "../ui/SuggestProduct";
import Reviews from "../ui/Reviews";
import useGetProducts from "../components/products/useGetProducts";
import { useSearchParams } from "react-router-dom";

export default function ProductDetails() {
  const { products, isLoading } = useGetProducts();
  console.log(isLoading);

  const [searchparams] = useSearchParams();
  const product = products?.filter(
    (product) => product.id === Number(searchparams.get("id"))
  )[0];

  const colorArr: string[] | undefined = product?.color.split("-");
  console.log(colorArr);

  const sizeArr: string[] | undefined = product?.size.split("-");

  return (
    <div>
      <Header />
      <NavHistory />

      <div className="mx-5 lg:mt-5 ">
        <div className="flex flex-col md:flex-row gap-5 max-w-330 mx-auto">
          <ProductImages />
          <div className="md:w-[43%] ">
            <Title title={product?.name} className="text-left text-[1.8rem]" />
            {product && <Price product={product} className="my-2 space-x-2" />}
            <p className="text-gray-400 text-sm pt-3 pb-5 border-b border-gray-300 mb-5">
              {product?.exp}
            </p>

            <p className="text-gray-500">Select Colors</p>
            <ul className="flex flex-row mt-3 pb-5 mb-5 border-b border-gray-300  gap-4">
              {colorArr?.map((color) => (
                <li
                  key={color}
                  className={`w-8 h-8 rounded-full`}
                  style={{ backgroundColor: color }}
                ></li>
              ))}
            </ul>

            <p className="text-gray-500">Choose Size</p>
            <ul className="flex flex-row mt-3 pb-5 mb-5 border-b border-gray-300  gap-2 text-gray-800 items-center text-nowrap flex-wrap text-sm lg:text-base">
              {sizeArr?.map((size) => (
                <li className=" bg-gray-100 rounded-full px-4 py-2">{size}</li>
              ))}
            </ul>

            <div className="flex flex-row gap-2 items-center mb-8">
              <Counter className="text-xl" />
              <button className="bg-black text-white text-xl py-2 rounded-full px-4 w-full">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-300 mb-5 flex flex-row justify-around lg:justify-center lg:gap-70">
          <button className="text-gray-400 pb-3 border-b-2 border-black">
            Product Details
          </button>
          <button className="text-gray-400 pb-3">Reviewes</button>
          <button className="text-gray-400 pb-3">FAQs</button>
        </div>

        <Reviews />
        <Title title="YOU MIGHT ALSO LIKE" className="mx-10 my-10 leading-8" />
        <SuggestProduct />
      </div>

      <EmailForm />
      <Footer />
    </div>
  );
}
