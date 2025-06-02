import { useEffect } from "react";
import Pagination from "../../ui/Pagination";
import Product from "../../ui/Product";
import Spinner from "../../ui/Spinner";
import usegetProducts from "./useGetProducts";
import { useSearchParams } from "react-router-dom";
import { pagNum } from "../../helpers/PagNum";

export default function Products() {
  const [searchParams] = useSearchParams();
  const page: number = Number(searchParams.get("page"));
  const { products, isLoading } = usegetProducts();
  const category = window.location.pathname.split("/")[2];
  const allFiltered = products?.products?.filter(
    (product) => product?.category === category
  );
  const slicedFilter = products?.products
    ?.filter((product) => product?.category === category)
    .slice((page - 1) * (pagNum + 2), page * (pagNum + 2) - 1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [products]);

  if (isLoading) return <Spinner className="h-90 size-8 mt-20 " />;

  if (products?.products.length === 0)
    return (
      <p className="flex justify-center items-center w-full text-xl text-gray-500 h-90 tracking-widest">
        nothing found 😥
      </p>
    );

  return (
    <div className="flex flex-col justify-between w-full ">
      <div className=" flex flex-row flex-wrap md:justify-center justify-around gap-7 ">
        {category !== "All-products"
          ? slicedFilter?.map((product) => <Product product={product} />)
          : products?.products?.map((product) => (
              <Product key={product.id} product={product} />
            ))}
      </div>
      {category !== "All-products" ? (
        <Pagination length={allFiltered?.length ?? 0} />
      ) : (
        <Pagination length={products?.count ?? 0} />
      )}
    </div>
  );
}
