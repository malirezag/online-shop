interface Type {
  text: string;
  className?: string;
}

function Button({ text, className }: Type) {
  return (
    <button className={`${className}  rounded-full py-4 text-lg w-full`}>
      {text}
    </button>
  );
}

export default Button;
