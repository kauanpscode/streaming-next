import { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { X } from 'lucide-react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div
        className="relative w-full max-w-[800px] max-h-[95vh] overflow-y-auto rounded-lg bg-[#181818] text-white shadow-xl custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-1 right-1 z-[1010] flex h-10 w-10 items-center justify-center rounded-full bg-black/80 text-white hover:bg-zinc-800 transition-colors"
          onClick={onClose}
          aria-label="Fechar"
        >
          <X size={20} strokeWidth={2.5} />
        </button>
        <div className="p-6">{children}</div>
      </div>
    </div>,
    document.body,
  );
};
