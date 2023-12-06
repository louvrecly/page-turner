import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import BookShelf from './components/BookShelf';
import fetchBooks from './helpers/fetchBooks';
import { selectBooks, setBooks } from './store/booksSlice';
import { useAppDispatch, useAppSelector } from './hooks/redux';

const App = () => {
  const books = useAppSelector(selectBooks);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetchBooks()
      .then((books) => dispatch(setBooks(books)))
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [dispatch]);

  return (
    <div className="u-min-h-screen u-bg-gradient-to-b u-from-slate-950 u-to-slate-900">
      <NavBar />

      <div className="u-mx-auto u-py-2 u-px-4 u-container">
        {isLoading ? (
          <p className="u-text-center">Loading...</p>
        ) : error ? (
          <p className="u-text-center">Error: {error.message}</p>
        ) : (
          <BookShelf books={books} />
        )}
      </div>
    </div>
  );
};

export default App;
