interface Type {
  text: string;
  className?: string;
}

function Button({ text, className }: Type) {
  return (
    <button
      className={`${className}  rounded-full py-4 md:py-3 text-lg md:text-base  w-full md:w-40`}
    >
      {text}
    </button>
  );
}

export default Button;
