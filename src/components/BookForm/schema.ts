import * as yup from 'yup';
import { getGenreOption, parseGenreOption } from '../../helpers/genre';
import Book from '../../types/book';
import Genre, { ALL_GENRES } from '../../types/genre';
import { SelectOption } from '../../types/bookForm';

export type BookFormValues = Omit<Book, 'genres'> & {
  genres: SelectOption<Genre>[];
};

export function getBookFormValues(book: Book): BookFormValues {
  return { ...book, genres: book.genres.map(getGenreOption) };
}

export function parseBookFormValues(bookFormValues: BookFormValues): Book {
  return {
    ...bookFormValues,
    genres: bookFormValues.genres.map(parseGenreOption),
  };
}

const bookFormValuesSchema: yup.ObjectSchema<BookFormValues> = yup
  .object({
    id: yup.number().positive().integer().required(),
    title: yup.string().required(),
    author: yup.string().required(),
    price: yup.number().positive().required(),
    description: yup.string().defined(),
    genres: yup
      .array(
        yup.object({
          value: yup.string().defined().oneOf(ALL_GENRES),
          label: yup.string().defined().oneOf(ALL_GENRES),
        }),
      )
      .ensure()
      .required(),
  })
  .required();

export default bookFormValuesSchema;
