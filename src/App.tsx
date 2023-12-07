import { useCallback, useEffect, useMemo, useState } from 'react';
import NavBar from './components/NavBar';
import BookShelf from './components/BookShelf';
import Modal from './components/Modal';
import BookForm from './components/BookForm';
import fetchBooks, { getEmptyBook } from './helpers/fetchBooks';
import {
  addBook,
  editBook,
  removeBook,
  selectActiveBookId,
  selectBookFormType,
  selectBooks,
  selectMaxBookId,
  setBooks,
} from './store/booksSlice';
import { selectIsModalOpened, toggleModal } from './store/uiSlice';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import Book from './types/book';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const books = useAppSelector(selectBooks);
  const maxBookId = useAppSelector(selectMaxBookId);
  const activeBookId = useAppSelector(selectActiveBookId);
  const bookFormType = useAppSelector(selectBookFormType);
  const isModalOpened = useAppSelector(selectIsModalOpened);
  const dispatch = useAppDispatch();

  const initialBookFormValues = useMemo(
    () =>
      books.find((book) => book.id === activeBookId) ?? getEmptyBook(maxBookId),
    [activeBookId, books, maxBookId],
  );

  const handleSubmitBook = useCallback(
    (book: Book) => {
      if (bookFormType === 'remove') {
        dispatch(removeBook(book.id));
      } else {
        if (book.id > maxBookId) dispatch(addBook(book));
        else dispatch(editBook(book));
      }

      dispatch(toggleModal(false));
    },
    [bookFormType, dispatch, maxBookId],
  );

  useEffect(() => {
    setIsLoading(true);
    fetchBooks()
      .then((books) => dispatch(setBooks(books)))
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [dispatch]);

  return (
    <div className="u-relative u-w-screen u-min-h-screen u-bg-gradient-to-b u-from-slate-950 u-to-slate-900 u-text-white">
      <NavBar />

      <div className="u-mx-auto u-p-4 u-container">
        {isLoading ? (
          <p className="u-text-center">Loading...</p>
        ) : error ? (
          <p className="u-text-center">Error: {error.message}</p>
        ) : (
          <BookShelf books={books} />
        )}
      </div>

      {isModalOpened && (
        <Modal>
          {bookFormType && (
            <BookForm
              type={bookFormType}
              book={initialBookFormValues}
              onSubmit={handleSubmitBook}
            />
          )}
        </Modal>
      )}
    </div>
  );
};

export default App;
