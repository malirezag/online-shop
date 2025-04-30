import { useLocation } from "react-router-dom";

export default function NavHistory() {
  const location = useLocation();
  const path = location.pathname.split("/");

  return (
    <div className=" flex flex-row gap-3 text-lg text-gray-500 py-5 border-t border-gray-300 max-w-330 mx-auto px-5">
      <p>Home</p>
      {path.map((urlItem) =>
        urlItem !== "" ? (
          <>
            <span>{">"}</span>
            <p>{urlItem}</p>
          </>
        ) : (
          ""
        )
      )}
    </div>
  );
}
