import { TbAdjustments } from "react-icons/tb";
import EmailForm from "../ui/EmailForm";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import NavHistory from "../ui/NavHistory";
import Title from "../ui/Title";
// import Product from "../ui/Product";
// import Pagination from "../ui/Pagination";
import Filter from "../ui/Filter";
import { useLocation } from "react-router-dom";
import Products from "../components/products/Products";

export default function Category() {
  const location = useLocation();
  const path: string[] = location.pathname.split("/");
  const category: string = path[2];

  return (
    <div>
      <Header />
      <NavHistory />

      <div className="px-5 flex flex-col gap-5 mb-5 max-w-330 mx-auto ">
        <div className="flex flex-row justify-between items-center ">
          <Title title={category} className="" />
          <button className=" rounded-full text-2xl ">
            <TbAdjustments />
          </button>
        </div>

        <div className="md:flex md:flex-row ">
          <Filter />
          <Products />
        </div>
      </div>

      <EmailForm />
      <Footer />
    </div>
  );
}
