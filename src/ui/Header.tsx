import { FiMenu, FiShoppingCart } from "react-icons/fi";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { IoPersonCircleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-row justify-between lg:justify-around items-center text-3xl py-4 px-3">
      <div className="flex flex-row gap-4 items-center ">
        <FiMenu className="lg:hidden" />
        <h1 className=" font-bold">SHOP.CO</h1>
      </div>

      <div className="lg:flex text-xl gap-10 hidden items-center justify-around">
        <select>
          <option value="">Shop</option>
        </select>
        <NavLink to="">On Sale</NavLink>
        <NavLink to="">New Arriavals</NavLink>
        <NavLink to="">Brands</NavLink>

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
        <button className="lg:hidden">
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
