import { useContext, useState, createContext, cloneElement } from "react";
import { createPortal } from "react-dom";

interface ModalcontextType {
  openName: string | null;
  setopenName: (name: string) => void;
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
}: {
  children: React.ReactNode;
  name: string;
}) {
  const { openName, setopenName } = useModalContex();

  if (name !== openName) return null;
  return createPortal(
    <div className="fixed inset-0 flex flex-col items-center justify-center w-full h-full   bg-neutral-50  ">
      <div className="overflow-y-auto py-5">{children}</div>
      <button
        onClick={() => setopenName(null)}
        className="bg-black w-full text-gray-200 py-2 text-xl"
      >
        OK
      </button>
    </div>,
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
  const { setopenName, openName } = useModalContex();
  console.log(openName);

  return cloneElement(children, { onClick: () => setopenName(open) });
}

Modal.Open = Open;
Modal.Window = Window;
