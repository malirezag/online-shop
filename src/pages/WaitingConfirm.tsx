import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

export default function WaitingConfirm() {
  return (
    <div className="flex justify-center h-screen items-center flex-col gap-5 bg-gray-100">
      <p className="text-xl">
        {" "}
        please check your email checkbox and click on the link sent for you 😊
      </p>
      <Link to="/" className="flex flex-row items-center text-blue-500">
        back to home{" "}
        <span>
          <IoIosArrowRoundForward />
        </span>
      </Link>
    </div>
  );
}
