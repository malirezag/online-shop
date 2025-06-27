type Type = {
  off: number;
  price: number;
  exp: string;
};

export default function Price({
  className,
  product,
}: {
  className?: string;
  product: Type;
}) {
  return (
    <p
      className={`sm:text-xl flex flex-row sm:gap-2 gap-1.5 items-center pt-1 text-lg ${className}`}
    >
      ${(product?.price - (product?.price * product?.off) / 100).toFixed(1)}
      {product?.off ? (
        <>
          <span className="text-gray-400 line-through text-base ">
            ${product.price.toFixed(1)}
          </span>
          <span className=" hidden sm:block sm:text-xs text-xs px-2 bg-red-200 sm:px-3 rounded-full text-red-400 py-1">
            -{product?.off}%
          </span>
        </>
      ) : (
        ""
      )}
    </p>
  );
}
