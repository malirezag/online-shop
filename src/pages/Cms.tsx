import { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const items = ["dashboard", "add-Product", "update-Products", "customers"];

export default function Cms() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("dashboard");
  }, []);
  return (
    <div className="flex flex-col ">
      {/* header */}
      <div className="flex flex-row justify-between w-full border-b p-5 border-gray-300 col-span-5 text-2xl">
        <div>
          <p className="flex flex-row gap-2 items-center ">
            <span>
              <img src="/images/Vector.png" className="size-7" />
            </span>
            Shop.Co{" "}
          </p>
        </div>
        <div>account</div>
      </div>

      <div className="flex flex-row">
        {/* items */}
        <div className="flex flex-col gap-6 text-lg  py-5 border-r border-gray-300 h-screen w-50">
          {items.map((item) => (
            <NavLink
              to={item}
              className="nav p-2 transition-all duration-300"
              style={({ isActive }) => ({
                color: isActive ? "rgb(63, 41, 107)" : "",
                backgroundColor: isActive ? "rgba(230, 218, 254, 0.864)" : "",
                borderLeft: isActive
                  ? ".5rem solid rgba(137, 101, 209, 0.864)"
                  : "",
              })}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </NavLink>
          ))}
        </div>

        <div className="flex justify-center w-[85%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
