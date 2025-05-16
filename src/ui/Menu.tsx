import { FiMenu } from "react-icons/fi";
import MenuNavItems from "./MenuNavItems";
import { createPortal } from "react-dom";
import { IoPersonCircleOutline } from "react-icons/io5";

export default function Menu({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return createPortal(
    <div
      className="flex flex-col justify-between fixed bg-zinc-800 top-0 left-0 text-gray-50 w-full px-5 py-5 text-base h-screen lg:hidden "
      data-aos="fade-right"
      data-aos-duration="200"
    >
      <div className="space-y-7">
        <div className="flex flex-row justify-between border-b border-gray-500 pb-5">
          <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
            <FiMenu className="lg:hidden cursor-pointer text-4xl" />
          </button>
          <p className="text-xl flex flex-row items-center gap-3">
            {" "}
            Alireza fallah
            <span>
              <IoPersonCircleOutline className="text-3xl" />
            </span>{" "}
          </p>
        </div>

        <MenuNavItems />
      </div>

      <button className="w-fit bg-gray-500 px-5 py-2 rounded-xl">
        Log out
      </button>
    </div>,
    document.body
  );
}
