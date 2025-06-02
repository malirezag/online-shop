import { SubmitHandler, useForm } from "react-hook-form";
import { colors } from "../../helpers/colors";
import { sizes } from "../../helpers/sizes";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAddProduct } from "./useAddProduct";
import Spinner from "../../ui/Spinner";

type Inputs = {
  name: string;
  exp: string;
  category: string;
  price: number;
  off: number;
  file: FileList;
};
export default function AddProduct() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [colorArr, setColorArr] = useState<string[]>([]);
  const [sizeArr, setSizeArr] = useState<string[]>([]);
  const { addProduct, isPending } = useAddProduct();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (colorArr.length !== 0 && sizeArr.length !== 0) {
      const product = {
        ...data,
        size: sizeArr.join(","),
        color: colorArr.join(","),
      };
      addProduct(product, {
        onSuccess: () => {
          toast.success("successfully added 😎");
          reset();
        },
      });
    } else {
      toast.error("plese insert color and size", {
        style: { backgroundColor: "rgb(255, 103, 103)", color: "white" },
      });
    }
  };

  function handleColor(color: string) {
    setColorArr((prev) =>
      prev.includes(color)
        ? prev.filter((item) => item !== color)
        : [...prev, color]
    );
  }
  function handleSize(size: string) {
    setSizeArr((prev) =>
      prev.includes(size)
        ? prev.filter((item) => item !== size)
        : [...prev, size]
    );
  }

  return (
    <div>
      <form
        className="my-10 flex flex-col gap-5 justify-center items-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-3xl font-bold -translate-y-24">Add Product </h1>
        <select
          className="border border-gray-400 rounded-xl px-2 py-2 w-120 "
          {...register("category", {
            required: {
              value: true,
              message: 'plese select "category"',
            },
            validate: {
              value: (value) =>
                value !== "Choose Category" || "please select the category",
            },
          })}
        >
          <option>Choose Category</option>
          <option value="casual">Casual</option>
          <option value="gym">Gym</option>
          <option value="party">Party</option>
          <option value="formal">Formal</option>
        </select>
        {errors.category?.type === "value" && (
          <p role="alert" className="text-red-400 w-full text-sm">
            {errors.category.message}
          </p>
        )}

        <input
          {...register("name", { required: true })}
          aria-invalid={errors.name ? "true" : "false"}
          type="text"
          className="border border-gray-400 rounded-xl px-2 py-2 w-120 placeholder:text-gray-400"
          placeholder="product name"
        />
        {errors.name?.type === "required" && (
          <p role="alert" className="text-red-400 w-full text-sm">
            Product name is requiered
          </p>
        )}

        <input
          {...register("exp", { required: true })}
          aria-invalid={errors.exp ? "true" : "false"}
          type="text"
          className="border border-gray-400 rounded-xl px-2 py-2 w-120 placeholder:text-gray-400"
          placeholder="product explanation"
        />
        {errors.exp?.type === "required" && (
          <p role="alert" className="text-red-400 w-full text-sm">
            Explain about yor product
          </p>
        )}

        <input
          {...register("price", {
            required: true,
            min: { value: 1, message: "enter a numer more than 1" },
          })}
          aria-invalid={errors.price ? "true" : "false"}
          type="number"
          className="border border-gray-400 rounded-xl px-2 py-2 w-120 placeholder:text-gray-400 "
          placeholder="Price $"
        />
        {errors.price?.type === "required" && (
          <p role="alert" className="text-red-400 w-full text-sm">
            Price is requiered
          </p>
        )}

        <input
          {...register("off")}
          type="text"
          className="border border-gray-400 rounded-xl px-2 py-2 w-120 placeholder:text-gray-400"
          placeholder="OFF %"
        />

        <label className="w-120 border border-gray-400 rounded-xl  pl-2 py-2 placeholder:text-gray-400 cursor-pointer">
          <input
            type="file"
            multiple
            {...register("file", { required: true })}
            aria-invalid={errors.file ? "true" : "false"}
          />

          <span className="bg-black text-white py-2 px-3.5 tracking-wider rounded-xl">
            upload file
          </span>
        </label>
        {errors.file?.type === "required" && (
          <p className="text-red-400 w-full text-sm">
            Import at least one image
          </p>
        )}

        {/* colors */}
        <div className="flex flex-row flex-wrap gap-5 max-w-120 border rounded-xl border-gray-400 p-3">
          <p className="w-full">Colors:</p>
          {colors.map((item) => (
            <label className="flex gap-1 text-gray-500 text-lg cursor-pointer">
              <input
                onClick={() => handleColor(item)}
                type="checkbox"
                name={item}
                className="peer hidden"
              />
              <div
                style={{ backgroundColor: item }}
                className="rounded-full w-8 h-8 peer-checked:ring-slate-900 peer-checked:ring-offset-1 peer-checked:ring-2 border"
              />
            </label>
          ))}
        </div>

        {/* sizes */}
        <div className="flex flex-row flex-wrap gap-5 max-w-120 border rounded-xl border-gray-400 p-3">
          <p className="w-full">Sizes:</p>
          {sizes.map((item) => (
            <label className="flex gap-1 text-gray-500 text-lg cursor-pointer">
              <input
                onClick={() => handleSize(item)}
                type="checkbox"
                name={item}
                className="peer hidden "
              />
              <div className="rounded-full px-2 py-1 peer-checked:bg-black peer-checked:text-white border">
                {item}
              </div>
            </label>
          ))}
        </div>
        <button className="w-120 bg-black text-white py-2 rounded-2xl text-xl">
          {isPending ? <Spinner /> : "ok"}
        </button>
      </form>
    </div>
  );
}
