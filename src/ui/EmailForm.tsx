import Button from "./Button";
import Title from "./Title";

export default function EmailForm() {
  return (
    <div className="bg-black mx-5 pt-9 pb-5 rounded-3xl">
      <Title
        title="STAY UPTO DATE ABOUT OUR LATEST OFFERS"
        className="text-left mx-6 text-4xl leading-9 tracking-wide text-white "
      />
      <div className="mx-5 my-7 text-xl space-y-4">
        <input
          type="email"
          className="bg-gray-100 w-full p-4 rounded-full outline-0"
          placeholder="✉   Enter your email address"
        />
        <Button text="Subscribe to Newsletter" className=" bg-gray-100" />
      </div>
    </div>
  );
}
