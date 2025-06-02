interface Type {
  text: string;
  className?: string;
  onClick?: () => void;
}

function Button({ text, className, onClick }: Type) {
  return (
    <button
      onClick={onClick}
      className={`${className}  rounded-full py-4 md:py-3 text-lg md:text-base  w-full md:w-40`}
    >
      {text}
    </button>
  );
}

export default Button;
