import Pagination from "../../ui/Pagination";
import Product from "../../ui/Product";
import Spinner from "../../ui/Spinner";
import usegetProducts from "./useGetProducts";

export default function Products() {
  const { products, isLoading } = usegetProducts();
  console.log(products);

  if (isLoading) return <Spinner />;

  return (
    <div className="flex flex-col  ">
      <div className=" flex flex-row flex-wrap justify-around ">
        {products?.map((product) => <Product product={product} />)}
      </div>
      <Pagination length={products?.length} />
    </div>
  );
}
