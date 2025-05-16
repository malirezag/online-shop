import Pagination from "../../ui/Pagination";
import Product from "../../ui/Product";
import Spinner from "../../ui/Spinner";
import usegetProducts from "./useGetProducts";

export default function Products() {
  const { products, isLoading } = usegetProducts();
  const category = window.location.pathname.split("/")[2];
  const filteredProduct = products?.products?.filter(
    (product) => product?.category === category
  );
  if (isLoading) return <Spinner className="" />;

  return (
    <div className="flex flex-col  ">
      <div className=" flex flex-row flex-wrap md:justify-center md:gap-7 justify-around gap-10 ">
        {category !== "All-products"
          ? filteredProduct?.map((product) => <Product product={product} />)
          : products?.products?.map((product) => <Product product={product} />)}
      </div>
      {category !== "All-products" ? (
        <Pagination length={filteredProduct?.length ?? 0} />
      ) : (
        <Pagination length={products?.count ?? 0} />
      )}
    </div>
  );
}
