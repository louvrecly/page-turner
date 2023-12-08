import { getGenreOption, parseGenreOption } from './genre';
import Book from '../types/book';
import { BookFormValues } from '../types/bookForm';

export function getBookFormValues(book: Book): BookFormValues {
  return { ...book, genres: book.genres.map(getGenreOption) };
}

export function parseBookFormValues(bookFormValues: BookFormValues): Book {
  return {
    ...bookFormValues,
    genres: bookFormValues.genres.map(parseGenreOption),
  };
}
