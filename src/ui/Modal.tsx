import React, {
  useContext,
  useState,
  createContext,
  cloneElement,
  isValidElement,
  ReactElement,
} from "react";
import { createPortal } from "react-dom";
import { useDeleteProduct } from "../components/cms/useDeleteProduct";
import Spinner from "./Spinner";
import { IoClose } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";

interface ModalcontextType {
  openName: string | null;
  setopenName: (name: string | null) => void;
}

const ModalContext = createContext<ModalcontextType | undefined>(undefined);
function useModalContex() {
  const context = useContext(ModalContext);
  if (!context) throw "used out of context";

  return context;
}

export default function Modal({ children }: { children: React.ReactNode }) {
  const [openName, setopenName] = useState<string | null>(null);

  return (
    <ModalContext.Provider value={{ openName, setopenName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Window({
  children,
  name,
  type,
  onconfirm,
}: {
  children: React.ReactNode;
  name: string;
  type?: string;
  onconfirm?: () => void;
}) {
  const { openName, setopenName } = useModalContex();
  const [searchParams, setSearchParams] = useSearchParams();
  const { isDeleting } = useDeleteProduct();
  if (name !== openName) return null;
  return createPortal(
    //default
    !type ? (
      <div className="fixed inset-0 flex flex-col sm:items-center sm:justify-center w-full h-full bg-neutral-50 sm:bg-transparent backdrop-brightness-60 backdrop-blur-xs ">
        <div className="hidden sm:flex justify-end w-190 pb-2">
          <button
            onClick={() => {
              setopenName(null);
              searchParams.delete("id");
              setSearchParams(searchParams);
            }}
            className=" text-2xl bg-gray-200 rounded-full"
          >
            <IoClose />
          </button>
        </div>

        <div className="overflow-y-auto sm:rounded-3xl bg-white px-5 sm:px-7 py-7 text-xl shadow-xl sm:space-y-6 sm:w-200 w-full  ">
          {isValidElement(children)
            ? cloneElement(
                children as ReactElement<{ setopenName: (val: null) => void }>,
                {
                  setopenName,
                }
              )
            : children}
        </div>
        <button
          onClick={() => setopenName(null)}
          className="bg-black w-full text-gray-200 py-2 text-xl sm:hidden"
        >
          OK
        </button>
      </div>
    ) : (
      //confirm
      <div className="fixed inset-0 flex justify-center items-center backdrop-brightness-60 backdrop-blur-xs">
        <div className="bg-white w-140 rounded-3xl px-10 py-7 text-xl  shadow-xl space-y-6">
          {" "}
          {children}
          <div className="space-x-2 ">
            <button
              className="px-3 py-2 rounded-xl bg-red-600 text-white"
              onClick={() => {
                onconfirm?.();
                setopenName(null);
              }}
            >
              {isDeleting ? <Spinner /> : "Delete"}
            </button>
            <button
              className="border px-3 py-2 rounded-xl"
              onClick={() => setopenName(null)}
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    ),
    document.body
  );
}

function Open({
  children,
  open,
}: {
  children: React.ReactElement;
  open: string;
}) {
  const { setopenName } = useModalContex();
  return cloneElement(children, { onClick: () => setopenName(open) });
}

Modal.Open = Open;
Modal.Window = Window;
