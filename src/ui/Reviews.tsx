import { TbAdjustments } from "react-icons/tb";
import Button from "./Button";
import CommentCard from "./CommentCard";

export default function Reviews() {
  return (
    <div>
      <div className="flex flex-row items-center justify-between mb-5">
        <p className="text-xl font-semibold">
          All Reviews
          <span className="text-sm text-gray-400 font-normal px-1">(451)</span>
        </p>

        <div className="flex flex-row gap-2 items-center">
          <button className="bg-gray-200 rounded-full p-2 text-xl ">
            <TbAdjustments />
          </button>
          <button className="bg-black text-white py-2 rounded-full px-4 w-full">
            Write a review
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4 pt-2 mb-5">
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <Button text="Load more..." className="border border-gray-500 " />
      </div>
    </div>
  );
}
