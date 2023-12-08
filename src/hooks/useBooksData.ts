import { useEffect, useState } from 'react';
import { useAppSelector } from './useRedux';
import useBookShelfManager from './useBookShelfManager';
import { selectBooks } from '../store/booksSlice';
import fetchBooks from '../helpers/fetchBooks';

const useBooksData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const books = useAppSelector(selectBooks);
  const { populateBookShelf } = useBookShelfManager();

  useEffect(() => {
    setIsLoading(true);
    fetchBooks()
      .then(populateBookShelf)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [populateBookShelf]);

  return { books, isLoading, error };
};

export default useBooksData;
