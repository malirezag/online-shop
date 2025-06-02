import { useNavigate } from "react-router-dom";
import Price from "./Price";

type productType = {
  image: string;
  exp: string;
  name: string;
  off: number;
  price: number;
  id: number;
};

export default function Product({ product }: { product: productType }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product?id=${product.id}`)}
      className=" font-medium pb-4 flex flex-col items-center justify-center min-w-40 md:min-w-52 "
    >
      <img
        src={product?.image.split("*")?.[0]}
        className=" size-55 sm:size-45 rounded-xl"
      />

      <p className=" truncate max-w-30 text-lg">{product?.name}</p>
      <Price product={product} />
    </div>
  );
}
