import Button from "./Button";
import Title from "./Title";

export default function EmailForm() {
  return (
    <div className="bg-black mx-5 sm:mx-8 rounded-3xl flex flex-col lg:flex-row lg:px-5 lg:gap-10 gap-7 py-7 items-center lg:justify-around ">
      <Title
        title="STAY UPTO DATE ABOUT OUR LATEST OFFERS"
        className="text-left  text-4xl leading-9 tracking-wide text-white max-w-130 lg:max-w-110 mx-5  "
      />
      <div className="  text-xl space-y-4 max-w-120 mx-5 ">
        <input
          type="email"
          className="bg-gray-100 w-full p-4 rounded-full outline-0"
          placeholder="✉   Enter your email address"
        />
        <Button
          text="Subscribe to Newsletter"
          className=" bg-gray-100 md:w-full"
        />
      </div>
    </div>
  );
}
