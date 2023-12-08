import { useCallback } from 'react';
import { useAppDispatch } from './useRedux';
import { addBook, editBook, removeBook, setBooks } from '../store/booksSlice';
import Book from '../types/book';

const useBookShelfManager = () => {
  const dispatch = useAppDispatch();

  const addBookToShelf = useCallback(
    (book: Book) => dispatch(addBook(book)),
    [dispatch],
  );

  const editBookOnShelf = useCallback(
    (book: Book) => dispatch(editBook(book)),
    [dispatch],
  );

  const removeBookFromShelf = useCallback(
    (bookId: number) => dispatch(removeBook(bookId)),
    [dispatch],
  );

  const populateBookShelf = useCallback(
    (books: Book[]) => dispatch(setBooks(books)),
    [dispatch],
  );

  return {
    addBookToShelf,
    editBookOnShelf,
    removeBookFromShelf,
    populateBookShelf,
  };
};

export default useBookShelfManager;
