import { useCallback } from 'react';
import { useAppDispatch } from './useRedux';
import { toggleModal } from '../store/uiSlice';
import { setBookForm } from '../store/booksSlice';
import BookFormType from '../types/bookForm';

const useBookFormModal = () => {
  const dispatch = useAppDispatch();

  const openBookFormModal = useCallback(
    (type: BookFormType, bookId: number) => {
      dispatch(toggleModal(true));
      dispatch(setBookForm({ type, bookId }));
    },
    [dispatch],
  );

  const closeBookFormModal = useCallback(
    () => dispatch(dispatch(toggleModal(false))),
    [dispatch],
  );

  return { openBookFormModal, closeBookFormModal };
};

export default useBookFormModal;
