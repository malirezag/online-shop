export default function Counter({ className }: { className?: string }) {
  return (
    <div
      className={`flex flex-row gap-5 bg-gray-200 w-fit px-5 py-1 rounded-full font-semibold items-center ${className}`}
    >
      <button>-</button>
      <p>1</p>
      <button>+</button>
    </div>
  );
}
