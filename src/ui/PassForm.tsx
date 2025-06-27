import { SubmitHandler, useForm } from "react-hook-form";
import useGetUser from "../components/auth/useGetUser";
import { useUpdateUserPassword } from "../components/auth/useUpdateUser";
import toast from "react-hot-toast";

type Inputs = {
  password: string;
  passwordRepeat: string;
};

export function PassForm() {
  const { update, isupdating } = useUpdateUserPassword();
  const {
    reset,
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<Inputs>();
  const { user } = useGetUser();
  console.log(user);

  const pass1 = watch("password");
  const pass2 = watch("passwordRepeat");

  const onPasswordSubmit: SubmitHandler<Inputs> = (data) => {
    if (pass1 !== pass2) {
      setError("passwordRepeat", {
        type: "manual",
        message: "Passwords do not match",
      });
      return;
    }
    update(data.password, {
      onSuccess: () => {
        reset();
        toast.success("Your password was updated ☺");
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onPasswordSubmit)}
      className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-xl space-y-5"
    >
      <h2 className="text-2xl font-semibold text-black mb-4">
        Change Password
      </h2>

      <div className="flex flex-col">
        <label htmlFor="password" className="mb-1 text-sm text-black">
          New Password
        </label>
        <input
          type="password"
          className={`border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition ${
            errors.password ? "border-red-500" : "border-black"
          }`}
          {...register("password", { required: true, minLength: 8 })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">
            {errors.password.type === "required"
              ? "Password is required"
              : "Password must be at least 8 characters"}
          </p>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="passwordRepeat" className="mb-1 text-sm text-black">
          Repeat Password
        </label>
        <input
          type="password"
          className={`border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition ${
            errors.passwordRepeat ? "border-red-500" : "border-black"
          }`}
          {...register("passwordRepeat", { required: true })}
        />
        {errors.passwordRepeat && (
          <p className="text-red-500 text-sm mt-1">
            {errors.passwordRepeat.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isupdating}
        className="w-full bg-black text-white font-semibold py-2 px-4 rounded-lg hover:bg-black disabled:opacity-50 transition"
      >
        {isupdating ? "Updating..." : "Update Password"}
      </button>
    </form>
  );
}
