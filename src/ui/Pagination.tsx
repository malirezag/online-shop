import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { pagNum } from "../helpers/PagNum";
import { useSearchParams } from "react-router-dom";

export default function Pagination({ length }: { length: number | 0 }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleClick = (page: string) => {
    searchParams.set("page", page);
    setSearchParams(searchParams);
  };
  const totalPages: number = Math.ceil(length / pagNum);
  const urlpage: number = Number(searchParams.get("page"));
  function handleNext() {
    if (urlpage === totalPages) return;
    searchParams.set("page", (urlpage + 1).toString());
    setSearchParams(searchParams);
  }
  function handlePrev() {
    if (urlpage <= 1) return;
    searchParams.set("page", (urlpage - 1).toString());
    setSearchParams(searchParams);
  }

  if (length === 0 || length < pagNum) return null;
  return (
    <div className="flex flex-row items-center justify-around my-5 border-t border-gray-300 pt-5 w-full">
      <button
        onClick={handlePrev}
        className="flex flex-row border p-2 rounded-xl border-gray-300 text-sm sm:text-lg items-center "
      >
        <span>
          <GrFormPreviousLink className="text-xl md:text-2xl" />
        </span>
        Prev
      </button>

      <div className="text-gray-500 flex flex-row justify-around w-full max-w-120 items-center text-sm sm:text-lg">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            onClick={() => handleClick((i + 1).toString())}
            key={i + 1}
            className={
              Number(searchParams.get("page")) === i + 1
                ? "bg-gray-100 px-3 py-2 md:px-5 text-black rounded-xl"
                : "px-3 py-2 md:px-5 text-black rounded-xl"
            }
          >
            {i + 1}
          </button>
        ))}
      </div>

      <button
        onClick={handleNext}
        className="flex flex-row border p-2 rounded-xl border-gray-300 items-center text-sm sm:text-lg"
      >
        Next <GrFormNextLink className="text-xl md:text-2xl " />
      </button>
    </div>
  );
}
