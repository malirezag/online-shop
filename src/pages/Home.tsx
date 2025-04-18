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
  return (
    <main className="bg-gray-100 flex flex-col">
      <div className="px-5">
        <h2 className="text-5xl font-bold pt-7 tracking-tight leading-10">
          FIND CLOTHES THAT MATCHES YOYR STYLE
        </h2>

        <p className="text-sm py-5 text-stroke text-white tracking-wider">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>

        <Button text="Shop Now" className="bg-black text-white" />
      </div>

      <Numbers />

      <img src="/images/man-girl.png" className=" " />

      <Brands />
      <NewArrival />
      <TopSelling />
      <ClothCategory />
      <HappyCustomers />
      <EmailForm />
      <Footer />
    </main>
  );
}

export default Home;
