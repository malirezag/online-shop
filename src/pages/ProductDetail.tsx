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

export default function ProductDetails() {
  return (
    <div>
      <Header />
      <NavHistory />

      <div className="mx-5">
        <ProductImages />
        <Title
          title="One Life Graphic T-shirt"
          className="text-left text-[1.8rem]"
        />
        <Price className="my-2 space-x-2" />
        <p className="text-gray-400 text-sm pt-3 pb-5 border-b border-gray-300 mb-5">
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </p>

        <p className="text-gray-500">Select Colors</p>
        <ul className="flex flex-row mt-3 pb-5 mb-5 border-b border-gray-300  gap-4">
          <li className="w-8 h-8 bg-stone-800 rounded-full"></li>
          <li className="w-8 h-8 bg-stone-700 rounded-full"></li>
          <li className="w-8 h-8 bg-green-800 rounded-full"></li>
        </ul>

        <p className="text-gray-500">Choose Size</p>
        <ul className="flex flex-row mt-3 pb-5 mb-5 border-b border-gray-300  gap-2 justify-around text-gray-800 ">
          <li className=" bg-gray-100 rounded-full px-4 py-2">Small</li>
          <li className=" bg-gray-100 rounded-full px-4 py-2">Medium</li>
          <li className=" bg-gray-100 rounded-full px-4 py-2">Large</li>
          <li className=" bg-gray-100 rounded-full px-4 py-2">X-Large</li>
        </ul>

        <div className="flex flex-row gap-2 items-center mb-8">
          <Counter className="text-xl" />
          <button className="bg-black text-white text-xl py-2 rounded-full px-4 w-full">
            Add to Cart
          </button>
        </div>

        <div className="border-b border-gray-300 mb-5 flex flex-row justify-around">
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
