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
  const { openName } = useModalContex();

  if (name !== openName) return null;
  return createPortal(
    <div className="fixed inset-0 flex justify-center w-full py-10  bg-neutral-50 overflow-y-auto">
      {children}
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
