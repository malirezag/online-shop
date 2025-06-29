import { useForm } from "react-hook-form";
import { useLogin } from "./useLogin";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import Spinner from "../../ui/Spinner";

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const navigate = useNavigate();
  const { login, isPending } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    login(data, {
      onSuccess: () => {
        navigate(-1);
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white border border-black rounded-2xl shadow-lg p-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-black">Login</h2>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-black mb-1 font-medium">
            Email
          </label>
          <input
            defaultValue="malirezag@gmail.com"
            id="email"
            type="email"
            autoComplete="email"
            {...register("email", { required: "Email is required" })}
            className="w-full px-4 py-2 border border-black rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block text-black mb-1 font-medium"
          >
            Password
          </label>
          <input
            defaultValue="123123123"
            id="password"
            type="password"
            autoComplete="current-password"
            {...register("password", { required: "Password is required" })}
            className="w-full px-4 py-2 border border-black rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 bg-black text-white rounded-lg hover:bg-white hover:text-black hover:border hover:border-black transition-all font-medium"
        >
          {isPending ? <Spinner /> : "Login"}
        </button>
        <Link
          to="/signup"
          className="text-sm text-blue-600 flex flex-row items-center gap-1"
        >
          you dont have account? create account{" "}
          <span>
            <IoIosArrowRoundForward className="text-xl" />
          </span>
        </Link>
      </form>
    </div>
  );
}
