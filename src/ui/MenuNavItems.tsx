import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function MenuNavItems({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-start items-start gap-10 lg:gap-8 text-xl lg:text-xl lg:flex-row ">
      <select
        className="w-20"
        onChange={(e) => {
          navigate(`/category/${e.target.value}`);
          setIsOpen(false);
        }}
      >
        <option value="All-products" className="text-sm bg-gray-500">
          Shop
        </option>
        <option value="All-products" className="text-sm bg-gray-500">
          <NavLink to="products">All products</NavLink>
        </option>
        <option value="gym" className="text-sm bg-gray-500">
          <Link to="/category/gym">Gym</Link>
        </option>
        <option value="casual" className="text-sm bg-gray-500">
          <Link to="/category/casual">Casual</Link>
        </option>
        <option value="formal" className="text-sm bg-gray-500">
          <Link to="/category/formal">Formal</Link>
        </option>
        <option value="party" className="text-sm bg-gray-500">
          <Link to="/category/party">Party</Link>
        </option>
      </select>
      <NavLink to="">On Sale</NavLink>
      <NavLink to="">New Arriavals</NavLink>
      {/* <NavLink to="">Brands</NavLink> */}
    </div>
  );
}
