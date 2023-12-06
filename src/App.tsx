import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import BookShelf from './components/BookShelf';
import Modal from './components/Modal';
import BookForm from './components/BookForm';
import fetchBooks from './helpers/fetchBooks';
import { selectBooks, setBooks } from './store/booksSlice';
import { selectIsModalOpened } from './store/uiSlice';
import { useAppDispatch, useAppSelector } from './hooks/redux';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const books = useAppSelector(selectBooks);
  const isModalOpened = useAppSelector(selectIsModalOpened);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsLoading(true);
    fetchBooks()
      .then((books) => dispatch(setBooks(books)))
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [dispatch]);

  return (
    <div className="u-relative u-w-screen u-min-h-screen u-bg-gradient-to-b u-from-slate-950 u-to-slate-900">
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
          <BookForm />
        </Modal>
      )}
    </div>
  );
};

export default App;
