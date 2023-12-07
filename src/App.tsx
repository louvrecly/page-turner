import { useCallback, useEffect, useMemo, useState } from 'react';
import NavBar from './components/NavBar';
import BookShelf from './components/BookShelf';
import Modal from './components/Modal';
import BookForm from './components/BookForm';
import fetchBooks from './helpers/fetchBooks';
import {
  addBook,
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
  const isModalOpened = useAppSelector(selectIsModalOpened);
  const dispatch = useAppDispatch();

  const defaultBookFormValues = useMemo(
    () => ({
      id: maxBookId + 1,
      title: '',
      author: '',
      price: 0,
      description: '',
      genres: [],
    }),
    [maxBookId],
  );

  const handleSubmitBook = useCallback(
    (book: Book) => {
      dispatch(addBook(book));
      dispatch(toggleModal(false));
    },
    [dispatch],
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
          <BookForm book={defaultBookFormValues} onSubmit={handleSubmitBook} />
        </Modal>
      )}
    </div>
  );
};

export default App;
