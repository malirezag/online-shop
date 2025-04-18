export default function Title({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <p className={`${className} text-4xl font-bold text-center `}>{title}</p>
  );
}
