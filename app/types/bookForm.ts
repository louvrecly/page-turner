import Book from './book';
import Genre from './genre';

export type SelectOption<T> = {
  value: T;
  label: string;
};

type BookFormType = 'save' | 'remove';

export type BookFormValues = Omit<Book, 'genres'> & {
  genres: SelectOption<Genre>[];
};

export default BookFormType;
