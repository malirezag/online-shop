import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type LoginFormInputs = {
  name: string;
  email: string;
  password: string;
};

export default function SignupForm() {
  const navigate = useNavigate();
  const { signup } = useSignup();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    signup(data, {
      onSuccess: () => {
        toast.success("check you email to complete signup...", {
          style: { backgroundColor: "black", color: "white" },
        });
        navigate("/wait");
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white border border-black rounded-2xl shadow-lg p-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-black">
          Create Account
        </h2>

        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block mb-1 font-medium text-black">
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full px-4 py-2 border border-black rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block mb-1 font-medium text-black">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full px-4 py-2 border border-black rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label
            htmlFor="password"
            className="block mb-1 font-medium text-black"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password", { required: "Password is required" })}
            className="w-full px-4 py-2 border border-black rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 bg-black text-white rounded-lg hover:bg-white hover:text-black hover:border hover:border-black transition-all font-medium"
        >
          {isSubmitting ? "Creating account..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}
