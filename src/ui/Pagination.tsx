import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

export default function Pagination({ length }: { length: number | undefined }) {
  if (length === undefined || length < 13) return null;

  return (
    <div className="flex flex-row items-center justify-around my-5 border-t border-gray-300">
      <button className="flex flex-row border p-2 rounded-xl border-gray-300 text-sm sm:text-lg items-center">
        <span>
          <GrFormPreviousLink className="text-xl md:text-2xl" />
        </span>
        Prev
      </button>

      <div className="text-gray-500 flex flex-row justify-around w-full max-w-120 items-center text-sm sm:text-lg">
        <button className="bg-gray-100 px-3 py-2 md:px-5 text-black rounded-xl">
          1
        </button>
        <button>2</button>
        <p>...</p>
        <button>9</button>
        <button>10</button>
      </div>

      <button className="flex flex-row border p-2 rounded-xl border-gray-300 items-center text-sm sm:text-lg">
        Next <GrFormNextLink className="text-xl md:text-2xl " />
      </button>
    </div>
  );
}
