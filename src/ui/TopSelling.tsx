import Button from "./Button";
import Product from "./Product";
import Title from "./Title";

export default function TopSelling() {
  return (
    <div className="border-t border-gray-300">
      <Title title="TOP SELLING" className="pb-7 pt-10" />
      <div className="flex flex-row overflow-scroll ">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div className="mx-4">
        <Button
          text="View All"
          className="text-black border border-gray-400 my-7 "
        />
      </div>
    </div>
  );
}
