import Header from "../ui/Header";
import { PassForm } from "../ui/PassForm";
import { UsernameForm } from "../ui/UsernameForm";

export function Account() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-10 ">
        <h1 className="text-3xl p-3 text-center w-full mb-10">
          update your account easily 🚀
        </h1>
        <div className="flex flex-col md:gap-10 lg:flex-row lg:items-start lg:justify-center">
          <div className="w-full max-w-md">
            <PassForm />
          </div>
          <div className="w-full max-w-md">
            <UsernameForm />
          </div>
        </div>
      </div>
    </>
  );
}
