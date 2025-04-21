export default function Product() {
  return (
    <div className="mx-3 font-medium pb-4">
      <img src="/images/cloth.png" className="min-w-60 h-55" />

      <p>T-SHIRT WITH TAPE DETAILS</p>

      <p className="text-2xl flex flex-row gap-3 items-center pt-1">
        $120 <span className="text-gray-400 line-through text-lg">$260</span>
        <span className="text-sm bg-red-200 px-3 rounded-full text-red-400 py-1">
          -20%
        </span>
      </p>
    </div>
  );
}
