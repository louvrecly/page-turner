import { ReactNode } from 'react';
import useBookFormModal from '../hooks/useBookFormModal';

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const { closeBookFormModal } = useBookFormModal();

  return (
    <div
      className="u-fixed u-top-0 u-inset-x-0 u-bg-zinc-950/70 u-flex u-h-screen u-justify-center u-items-center"
      onClick={() => closeBookFormModal()}
    >
      <div
        className="u-relative u-p-4 u-bg-zinc-950/70 u-w-1/2 u-min-w-[280px] u-rounded u-z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="u-absolute u-top-2 u-right-4"
          onClick={() => closeBookFormModal()}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
