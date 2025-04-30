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
      className=" font-medium pb-4 w-35 sm:w-55 xl:w-65 flex flex-col items-center "
    >
      <img src={product?.image} className=" aspect-square" />

      <p className=" truncate max-w-44 text-lg">{product?.name}</p>
      <Price product={product} />
    </div>
  );
}
