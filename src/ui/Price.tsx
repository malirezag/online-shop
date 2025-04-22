export default function Price({ className }: { className?: string }) {
  return (
    <p
      className={`text-2xl flex flex-row gap-3 items-center pt-1 ${className}`}
    >
      $120 <span className="text-gray-400 line-through text-lg">$260</span>
      <span className="text-sm bg-red-200 px-3 rounded-full text-red-400 py-1">
        -20%
      </span>
    </p>
  );
}
