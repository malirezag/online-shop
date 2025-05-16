import { TbAdjustments } from "react-icons/tb";
import EmailForm from "../ui/EmailForm";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import NavHistory from "../ui/NavHistory";
import Title from "../ui/Title";
import Filter from "../ui/Filter";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Products from "../components/products/Products";
import { useEffect } from "react";

export default function Category() {
  const location = useLocation();
  const path: string[] = location.pathname.split("/");
  const category: string = path[2];
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    if (!searchParams.get("page")) navigate("?page=1");
  }, [navigate, searchParams]);

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
