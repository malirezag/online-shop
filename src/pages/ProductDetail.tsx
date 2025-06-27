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
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import React, { useState } from "react";
import useOrder from "../components/orders/useOrder";
import useGetOrders from "../components/orders/useGetOrders";
import { FiShoppingCart } from "react-icons/fi";
import Spinner from "../ui/Spinner";
import useGetUser from "../components/auth/useGetUser";

type Inputs = { color: string; size: string; count: number };

export default function ProductDetails() {
  const { orders, isLoading } = useGetOrders();
  const [searchParams] = useSearchParams();
  const orderId: number = Number(searchParams.get("id"));
  const [counter, setCounter] = useState<number>(1);
  const {
    watch,
    handleSubmit,
    register,
    setValue,
    formState: { isValid },
  } = useForm<Inputs>({ mode: "onChange" });
  const formDtata = watch();
  const navigate = useNavigate();
  const { user } = useGetUser();
  const { products } = useGetProducts();
  const product = products?.products?.filter((item) => item?.id === orderId)[0];
  const colorArr: string[] | undefined = product?.color.split(",");
  const sizeArr: string[] | undefined = product?.size.split(",");
  const { setorder, isPending } = useOrder();
  const isInCart = orders?.some(
    (item) =>
      item.color === formDtata.color &&
      item.orderId?.id === orderId &&
      item.size === formDtata.size
  );
  const onsubmit: SubmitHandler<Inputs> = (data) => {
    if (user?.role === "authenticated") setorder({ order: data, orderId });
    if (user?.role !== "authenticated") navigate("/login");
  };
  const handleInc = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCounter((count) => (count <= 1 ? count : count - 1));
    setValue("count", counter - 1);
  };
  const handleDec = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCounter((count) => count + 1);
    setValue("count", counter + 1);
  };

  return (
    <div>
      <Header />
      <NavHistory />

      <div className="mx-5 lg:mt-5 ">
        {isLoading ? (
          <Spinner className="h-50 " />
        ) : (
          <form
            className="flex flex-col md:flex-row gap-5 max-w-330 mx-auto"
            onSubmit={handleSubmit(onsubmit)}
          >
            <ProductImages />
            <div className="md:w-[43%] lg:w-[60%]">
              <Title
                title={product?.name}
                className="text-left text-[1.8rem]"
              />
              {product && (
                <Price product={product} className="my-2 space-x-2" />
              )}
              <p className="text-gray-400 text-sm pt-3 pb-5 border-b border-gray-300 mb-5">
                {product?.exp}
              </p>

              <p className="text-gray-500">Select Colors</p>
              <ul className="flex flex-row mt-3 pb-5 mb-5 border-b border-gray-300  gap-4">
                {colorArr?.map((color) => (
                  <li key={color}>
                    <label className="cursor-pointer flex justify-center items-center">
                      <input
                        {...register("color", {
                          required: {
                            value: true,
                            message: "please select the color",
                          },
                        })}
                        type="radio"
                        name="color"
                        value={color}
                        className="peer sr-only"
                      />
                      <div
                        className="w-8 h-8 rounded-full border border-gray-300 transition-all duration-200
                 peer-checked:ring-2 peer-checked:ring-black peer-checked:border-2"
                        style={{ backgroundColor: color }}
                      ></div>
                    </label>
                  </li>
                ))}
              </ul>

              <p className="text-gray-500">Choose Size</p>
              <ul className="flex flex-row mt-3 pb-5 mb-5 border-b border-gray-300  gap-2 text-gray-800 items-center text-nowrap flex-wrap text-sm lg:text-base">
                {sizeArr?.map((size) => (
                  <li className="cursor-pointer">
                    <label className="cursor-pointer">
                      <input
                        {...register("size", {
                          required: {
                            value: true,
                            message: "please select the size",
                          },
                        })}
                        type="radio"
                        name="size"
                        value={size}
                        className="peer sr-only"
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

              <div className="flex flex-row gap-2 items-center mb-8">
                {/* counter */}
                {isInCart ? (
                  ""
                ) : (
                  <div
                    className={`flex flex-row gap-5 bg-gray-200 w-fit px-5 py-1 rounded-full font-semibold items-center `}
                  >
                    <button onClick={handleInc}>-</button>
                    <input
                      {...register("count", {
                        valueAsNumber: true,
                        min: 1,
                      })}
                      type="text"
                      className=" text-center w-5 outline-0"
                      value={Number(counter)}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setCounter(Number(e.target.value))
                      }
                    />
                    <button onClick={handleDec}>+</button>
                  </div>
                )}

                {isInCart ? (
                  <Link
                    to="/cart"
                    className="bg-green-700 text-white py-3 px-7 items-center  text-xl rounded-full w-full flex flex-row justify-between"
                  >
                    <span>
                      go to cart{" "}
                      <span className="text-sm mx-1">(you added it 😊)</span>
                    </span>
                    <span>
                      <FiShoppingCart />
                    </span>
                  </Link>
                ) : (
                  <button
                    type="submit"
                    disabled={isPending}
                    className={` ${!isValid ? "bg-gray-300 text-gray-600" : "bg-black text-white"}   text-xl py-2 rounded-full px-4 w-full`}
                  >
                    {isPending ? "Adding..." : "Add to Cart"}
                  </button>
                )}
              </div>
            </div>
          </form>
        )}

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
