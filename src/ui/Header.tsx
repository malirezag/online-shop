import { useState } from "react";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import MenuNavItems from "./MenuNavItems";

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="flex flex-row justify-between lg:justify-around items-center text-3xl py-4 px-3">
      <div className="flex flex-row gap-4 items-center ">
        {isOpen ? (
          <Menu setIsOpen={setIsOpen} />
        ) : (
          <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
            <FiMenu className="lg:hidden cursor-pointer" />
          </button>
        )}
        <Link to="/" className=" font-bold">
          SHOP.CO
        </Link>
      </div>

      <div className="lg:flex text-xl gap-10 hidden items-center justify-around">
        <MenuNavItems />
        <div className="flex flex-row items-center bg-gray-100 py-2 px-4 gap-2 rounded-full ">
          <HiOutlineMagnifyingGlass />
          <input
            type="text"
            className=" outline-0 placeholder-gray-400"
            placeholder="Search Products"
          />
        </div>
      </div>

      <div className="text-2xl flex flex-row gap-3 items-center ">
        <button className="sm:hidden">
          <HiOutlineMagnifyingGlass />
        </button>
        <div className="flex-row items-center bg-gray-100 py-1 px-4 gap-2 rounded-full hidden sm:flex lg:hidden ">
          <HiOutlineMagnifyingGlass />
          <input
            type="text"
            className=" outline-0 placeholder-gray-400 text-lg"
            placeholder="Search Products"
          />
        </div>
        <Link to="/cart">
          <FiShoppingCart />
        </Link>
        <Link to="">
          <IoPersonCircleOutline />
        </Link>
      </div>
    </header>
  );
}

export default Header;
