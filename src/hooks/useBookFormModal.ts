import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from './useRedux';
import { selectIsModalOpened, toggleModal } from '../store/uiSlice';
import { setBookForm } from '../store/booksSlice';
import BookFormType from '../types/bookForm';

const useBookFormModal = () => {
  const isModalOpened = useAppSelector(selectIsModalOpened);
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

  return { isModalOpened, openBookFormModal, closeBookFormModal };
};

export default useBookFormModal;
