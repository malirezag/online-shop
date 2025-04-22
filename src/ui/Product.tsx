import Price from "./Price";

export default function Product() {
  return (
    <div className="mx-3 font-medium pb-4">
      <img src="/images/cloth.png" className="min-w-60 h-55" />

      <p>T-SHIRT WITH TAPE DETAILS</p>
      <Price />
    </div>
  );
}
