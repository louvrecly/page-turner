import Book from '../types/book';
import { DEFAULT_BOOKS } from './book';

function fetchBooks(): Promise<Book[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(DEFAULT_BOOKS), 1000);
  });
}

export default fetchBooks;
