import Title from "./Title";

export default function ClothCategory() {
  return (
    <div className="mx-5 rounded-3xl bg-zinc-200 flex flex-col justify-center items-center gap-5 pb-12 mt-6">
      <Title
        title="BROWSE BY DRESS STYLE"
        className="mx-10 mb-4 mt-9 xl:text-5xl xl:mt-12 "
      />
      <div className="grid grid-cols-1 gap-4 md:gap-7 sm:grid-cols-3 px-5 max-w-250">
        <button className="col-span-1">
          <img
            src="/images/style (1).png "
            className="w-full sm:h-50 rounded-4xl md:h-55 "
          />
        </button>
        <button className="col-span-2 ">
          <img
            src="/images/style (2).png"
            className="w-full sm:h-50 rounded-4xl md:h-55 object-cover object-top-left contrast-120"
          />
        </button>
        <button className="col-span-2">
          <img
            src="/images/style (3).png"
            className="w-full sm:h-50 rounded-4xl md:h-55 object-cover object-top-left contrast-110"
          />
        </button>
        <button className="col-span-1">
          <img
            src="/images/style (4).png"
            className="w-full sm:h-50 rounded-4xl md:h-55 "
          />
        </button>
      </div>
    </div>
  );
}
