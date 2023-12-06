import { ReactNode } from 'react';
import { useAppDispatch } from '../hooks/redux';
import { toggleModal } from '../store/uiSlice';

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const dispatch = useAppDispatch();

  return (
    <div
      className="u-fixed u-top-0 u-inset-x-0 u-bg-zinc-950/70 u-flex u-h-screen u-justify-center u-items-center"
      onClick={() => dispatch(toggleModal(false))}
    >
      <div
        className="u-relative u-p-4 u-bg-zinc-950/70 u-min-w-[480px] u-min-h-[240px] u-rounded u-z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="u-absolute u-top-2 u-right-4"
          onClick={() => dispatch(toggleModal(false))}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
