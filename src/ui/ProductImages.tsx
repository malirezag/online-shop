export default function ProductImages() {
  return (
    <div className="flex flex-col gap-3 mb-5 md:w-[50%] lg:flex-row-reverse md:justify-around ">
      <img
        src="/images/Tshirt (4).png"
        alt=""
        className="lg:w-[80%] md:h-100 xl:h-110 "
      />
      <div>
        <button className="flex flex-row gap-5 lg:flex-col ">
          <img
            src="/images/Tshirt (2).png"
            alt=""
            className="w-25 h-25 rounded-2xl"
          />
          <img
            src="/images/Tshirt (1).png"
            alt=""
            className="w-25 h-25 rounded-2xl"
          />
          <img
            src="/images/Tshirt (4).png"
            alt=""
            className="w-25 h-25 rounded-2xl"
          />
        </button>
      </div>
    </div>
  );
}
