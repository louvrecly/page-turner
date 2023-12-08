import { useEffect, useState } from 'react';
import useBookShelfManager from './useBookShelfManager';
import fetchBooks from '../helpers/fetchBooks';

const useBooksData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { books, populateBookShelf } = useBookShelfManager();

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
