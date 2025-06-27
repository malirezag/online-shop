import { SubmitHandler, useForm } from "react-hook-form";
import useGetUser from "../components/auth/useGetUser";
import { useUpdateUserName } from "../components/auth/useUpdateUserName";
import toast from "react-hot-toast";

type ProfileInputs = {
  name: string;
};
export function UsernameForm() {
  const { updateName } = useUpdateUserName();
  const { user } = useGetUser();

  const {
    register: registerProfile,
    handleSubmit: handleSubmitProfile,
    formState: { errors: profileErrors, isSubmitting },
  } = useForm<ProfileInputs>();

  const onProfileSubmit: SubmitHandler<ProfileInputs> = (data) => {
    console.log("Profile data submitted:", data);
    toast.success("Profile updated ✅");
    updateName(data.name);
  };
  return (
    <form
      onSubmit={handleSubmitProfile(onProfileSubmit)}
      className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-xl space-y-5"
    >
      <h2 className="text-2xl font-semibold text-black mb-4">Update Profile</h2>

      <div className="flex flex-col">
        <label htmlFor="email" className="mb-1 text-sm text-black">
          Email Address
        </label>
        <input
          value={user?.email}
          type="email"
          disabled
          className={`border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 bg-gray-200 focus:ring-black transition "
            }`}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="name" className="mb-1 text-sm text-black">
          Full Name
        </label>
        <input
          defaultValue={user?.user_metadata.name}
          type="text"
          className={`border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition ${
            profileErrors.name ? "border-red-500" : "border-black"
          }`}
          {...registerProfile("name", { required: "Name is required" })}
        />
        {profileErrors.name && (
          <p className="text-red-500 text-sm mt-1">
            {profileErrors.name.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-black text-white font-semibold py-2 px-4 rounded-lg hover:bg-black disabled:opacity-50 transition"
      >
        {isSubmitting ? "Updating..." : "Update Profile"}
      </button>
    </form>
  );
}
