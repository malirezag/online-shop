import Button from "../ui/Button";
import Header from "../ui/Header";
import Order from "../ui/Order";
import Title from "../ui/Title";
import EmailForm from "../ui/EmailForm";
import Footer from "../ui/Footer";
import NavHistory from "../ui/NavHistory";

export default function Cart() {
  return (
    <div className="">
      <Header />
      <NavHistory />

      <div className="flex flex-col md:flex-row md:items-start max-w-340 mx-auto  ">
        {/* orders */}
        <div className="md:w-[60%]">
          <Title title="YOUR CART" className=" text-left mx-5" />
          <div className="border border-gray-300 rounded-3xl mx-5 divide-y divide-gray-300 my-5 ">
            <Order />
            <Order />
            <Order />
            <Order />
          </div>
        </div>

        {/* order summary */}
        <div className="border border-gray-300 rounded-3xl mx-5 divide-gray-300 md:mt-15 px-5 pb-5 mb-15 md:w-[4 0%] ">
          <Title
            title="Order Summary"
            className="font-semibold pb-3 pt-7 text-xl text-left tracking-wider"
          />
          <p className="text-gray-400 tracking-wider font-light flex flex-row justify-between py-2">
            Subtotal{" "}
            <span className="text-black font-normal text-lg">$565</span>
          </p>
          <p className="text-gray-400 tracking-wider font-light flex flex-row justify-between py-2">
            Discount (-20%){" "}
            <span className="text-red-500 font-normal text-lg">-$113</span>
          </p>
          <p className="text-gray-400 tracking-wider font-light flex flex-row justify-between py-2 border-b border-gray-300">
            Delivery Fee{" "}
            <span className="text-black font-normal text-lg">$15</span>
          </p>
          <p className="text-gray-600 tracking-wider font-light flex flex-row justify-between py-5 text-lg">
            Total
            <span className="text-black font-semibold text-xl">$467</span>
          </p>

          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-3">
              <input
                type="email"
                className="bg-gray-100 w-full py-4 px-6 rounded-full outline-0"
                placeholder="%   Add promo code"
              />
              <button className="text-white bg-black px-6 rounded-full">
                Apply
              </button>
            </div>
            <Button
              text="Go to Checkout"
              className=" bg-black text-white md:w-full"
            />
          </div>
        </div>
      </div>
      <EmailForm />
      <Footer />
    </div>
  );
}
