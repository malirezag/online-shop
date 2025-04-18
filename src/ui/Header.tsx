import { FiMenu, FiShoppingCart } from "react-icons/fi";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { IoPersonCircleOutline } from "react-icons/io5";

function Header() {
  return (
    <header className="flex flex-row justify-between items-center text-3xl py-4 px-3">
      <div className="flex flex-row gap-4 items-center ">
        <FiMenu className="" />
        <h1 className=" font-bold">SHOP.CO</h1>
      </div>

      <div className="text-2xl flex flex-row gap-3 items-center ">
        <button>
          <HiOutlineMagnifyingGlass />
        </button>
        <button>
          <FiShoppingCart />
        </button>
        <button>
          <IoPersonCircleOutline />
        </button>
      </div>
    </header>
  );
}

export default Header;
