import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from './useRedux';
import { selectIsModalOpened, toggleModal } from '../store/uiSlice';
import {
  selectActiveBook,
  selectBookFormType,
  selectMaxBookId,
  setBookForm,
} from '../store/booksSlice';
import BookFormType from '../types/bookForm';

const useBookFormModal = () => {
  const isModalOpened = useAppSelector(selectIsModalOpened);
  const maxBookId = useAppSelector(selectMaxBookId);
  const activeBook = useAppSelector(selectActiveBook);
  const bookFormType = useAppSelector(selectBookFormType);
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

  return {
    isModalOpened,
    maxBookId,
    activeBook,
    bookFormType,
    openBookFormModal,
    closeBookFormModal,
  };
};

export default useBookFormModal;
