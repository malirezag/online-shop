import React, { useState } from "react";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Menu from "./Menu";
import MenuNavItems from "./MenuNavItems";
import useGetUser from "../components/auth/useGetUser";
import { useLogout } from "../components/auth/useLogout";
import { AiOutlineClose } from "react-icons/ai";
import { useSearchProducts } from "../components/products/useSearchProducts";
import Spinner from "./Spinner";

function Header() {
  const navigate = useNavigate();
  const { logout, isPending } = useLogout();
  const [search, setSearch] = useState<string>("");
  const { isLoading, data } = useSearchProducts(search);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const { user } = useGetUser();

  const handleClickSearch = (id: number) => {
    navigate(`/product?id=${id}`);

    setSearch("");
    setIsSearching(false);
  };

  return (
    <>
      <header className="flex flex-row xl:justify-around justify-between px-3 items-center text-3xl py-4 mx-auto  border-b  border-gray-200  ">
        {
          <div className="flex flex-row gap-4 items-center ">
            {isOpen ? (
              <Menu setIsOpen={setIsOpen} />
            ) : (
              <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
                <FiMenu className="lg:hidden cursor-pointer" />
              </button>
            )}
            {!isSearching && (
              <Link to="/" className=" font-bold">
                SHOP.CO
              </Link>
            )}
          </div>
        }

        <div className="lg:flex text-xl gap-10 hidden items-center justify-around">
          <MenuNavItems setIsOpen={setIsOpen} />
          {/* searcg bar in big displays */}
          <div className="xl:flex hidden flex-row items-center bg-gray-100 py-2 px-4 gap-2 rounded-full ">
            <HiOutlineMagnifyingGlass />
            <input
              value={search}
              type="text"
              className=" outline-0 placeholder-gray-400"
              placeholder="Search Products"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearch(e.target.value)
              }
            />
          </div>
        </div>

        <div className="text-2xl flex flex-row space-x-2 items-center ">
          {/* search bar small display */}
          <div
            className={`flex flex-row items-center bg-gray-100 py-1 px-1 sm:px-4 gap-2 rounded-full
              overflow-hidden transition-all duration-300 xl:hidden
              ${isSearching ? "w-50 sm:w-80 opacity-100" : "w-0 opacity-0 pointer-events-none"}`}
          >
            <button>
              <HiOutlineMagnifyingGlass />
            </button>
            <input
              value={search}
              type="text"
              className="outline-0 placeholder-gray-400 text-lg bg-transparent flex-1"
              placeholder="Search Products"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearch(e.target.value)
              }
            />
          </div>

          <button
            className="xl:hidden "
            onClick={() => setIsSearching((prev) => !prev)}
          >
            {isSearching ? (
              <AiOutlineClose className="text-gray-700" />
            ) : (
              <HiOutlineMagnifyingGlass className="" />
            )}
          </button>

          {user?.role === "authenticated" ? (
            <div className="flex flex-row gap-5 items-center">
              <Link to="/cart">
                <FiShoppingCart className="lg:text-3xl" />
              </Link>
              <Link to="/account">
                <IoPersonCircleOutline className="lg:text-3xl" />
              </Link>

              {user?.role === "authenticated" ? (
                <p className="hidden md:block">{user?.user_metadata?.name}</p>
              ) : (
                ""
              )}

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
              className="bg-black text-lg text-white px-3 rounded-xl py-1 sm:block hidden"
            >
              {isPending ? "wait..." : "Login"}
            </Link>
          )}
        </div>
      </header>

      {/* search result in small display mode */}
      <div className=" w-full flex justify-center items-center absolute flex-col  ">
        {!isLoading ? (
          data?.map((product) => (
            <div
              className=" border-b border-gray-200  shadow-xl w-[88%] md:w-170 flex flex-row justify-between px-5 items-center bg-white py-2"
              onClick={() => handleClickSearch(product.id)}
            >
              <img
                src={product.image.split("*")[0]}
                className="size-13 md:size-15 rounded-xl"
              />
              <p className="md:text-lg">{product.name}</p>
            </div>
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
}

export default Header;
