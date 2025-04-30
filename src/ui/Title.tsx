export default function Title({
  title,
  className,
}: {
  title: string | undefined;
  className?: string;
}) {
  return (
    <p
      className={`${className} text-4xl font-bold text-center `}
      // data-aos="fade-down"
    >
      {title}
    </p>
  );
}
