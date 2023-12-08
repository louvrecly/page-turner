import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './redux';
import { selectBooks, setBooks } from '../store/booksSlice';
import fetchBooks from '../helpers/fetchBooks';

const useBooksData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const books = useAppSelector(selectBooks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsLoading(true);
    fetchBooks()
      .then((books) => dispatch(setBooks(books)))
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [dispatch]);

  return { books, isLoading, error };
};

export default useBooksData;
