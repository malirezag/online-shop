import { TbAdjustments } from "react-icons/tb";
import Button from "./Button";
import CommentCard from "./CommentCard";

export default function Reviews() {
  return (
    <div className="">
      <div className="flex flex-row items-center justify-between mb-5 max-w-330 mx-auto ">
        <p className="text-xl font-semibold">
          All Reviews
          <span className="text-sm text-gray-400 font-normal px-1">(451)</span>
        </p>

        <div className="flex flex-row gap-2 items-center">
          <button className="bg-gray-200 rounded-full p-2 text-xl ">
            <TbAdjustments />
          </button>

          <select name="" className="hidden md:block">
            <option value="">latest</option>
            <option value="">oldest</option>
          </select>

          <button className="bg-black text-white py-2 rounded-full px-4 w-full">
            Write a review
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4 pt-2 mb-5 items-center md:flex-row md:flex-wrap justify-center ">
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </div>
      <div className="text-center">
        <Button text="Load more..." className="border border-gray-500" />
      </div>
    </div>
  );
}
