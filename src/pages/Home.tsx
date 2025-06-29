import { useNavigate } from "react-router-dom";
import Brands from "../ui/Brands";
import Button from "../ui/Button";
import ClothCategory from "../ui/ClothCategory";
import EmailForm from "../ui/EmailForm";
import Footer from "../ui/Footer";
import HappyCustomers from "../ui/HappyCustomers";
import NewArrival from "../ui/NewArrival";
import Numbers from "../ui/Numbers";
import TopSelling from "../ui/TopSelling";

function Home() {
  const navigate = useNavigate();
  return (
    <main className="bg-gray-100 flex flex-col">
      <div className="flex flex-col md:flex-row lg:justify-around items-center">
        {" "}
        <div className="px-5 flex flex-col justify-center sm:w-140 lg:w-115 xl:gap-2 ">
          <h2
            data-aos="fade-down"
            className="text-5xl md:text-4xl lg:text-5xl xl:text-6xl xl:leading-13 font-bold pt-7 tracking-tight leading-10"
          >
            FIND CLOTHES THAT MATCHES YOYR STYLE
          </h2>

          <p className="text-sm py-5 text-stroke text-white tracking-wider ">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <Button
            text="Shop Now"
            className="bg-black text-white"
            onClick={() => navigate("category/All-products")}
          />
          <Numbers />
        </div>
        <img
          src="/images/man-girl.png"
          className="md:w-112 lg:w-120 xl:w-150 sm:w-[80%]  sm:h-110 md:h-full "
        />
      </div>

      <Brands />
      <NewArrival />
      <ClothCategory />
      <TopSelling />
      <HappyCustomers />
      <EmailForm />
      <Footer />
    </main>
  );
}

export default Home;
