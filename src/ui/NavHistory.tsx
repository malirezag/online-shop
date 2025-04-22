export default function NavHistory() {
  return (
    <div className=" flex flex-row gap-3 text-lg text-gray-500 mx-5 py-5 border-t border-gray-300">
      <button>Home</button>
      <span>{">"}</span>
      <button className="text-gray-900">Cart</button>
    </div>
  );
}
