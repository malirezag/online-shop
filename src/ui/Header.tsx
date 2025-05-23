import { useState } from "react";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import MenuNavItems from "./MenuNavItems";
import useGetUser from "../components/auth/useGetUser";
import { useLogout } from "../components/auth/useLogout";

function Header() {
  const { logout } = useLogout();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { user } = useGetUser();
  console.log(user);

  return (
    <header className="flex flex-row justify-between items-center text-3xl py-4 px-3">
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
        <MenuNavItems setIsOpen={setIsOpen} />
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

        {user?.role === "authenticated" ? (
          <div className="flex flex-row gap-5">
            <Link to="/cart">
              <FiShoppingCart className="lg:text-3xl" />
            </Link>
            <Link to="">
              <IoPersonCircleOutline className="lg:text-3xl" />
            </Link>

            <p className="hidden md:block">{user?.user_metadata?.name}</p>

            <button
              onClick={() => logout()}
              className="text-base bg-gray-200 px-3 py-1 rounded-xl hidden lg:block"
            >
              logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-black text-lg text-white px-3 rounded-xl py-1"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
