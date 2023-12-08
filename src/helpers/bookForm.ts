import * as yup from 'yup';
import { BookFormValues } from '../types/bookForm';
import Genre, { ALL_GENRES } from '../types/genre';
import Book from '../types/book';
import { SelectOption } from '../types/bookForm';

export const bookFormValuesSchema: yup.ObjectSchema<BookFormValues> = yup
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

export function getGenreOption(genre: Genre): SelectOption<Genre> {
  return {
    value: genre,
    label: genre,
  };
}

export function parseGenreOption(genreOption: SelectOption<Genre>): Genre {
  return genreOption.value;
}

export const genreOptions: SelectOption<Genre>[] =
  ALL_GENRES.map(getGenreOption);

export function getBookFormValues(book: Book): BookFormValues {
  return { ...book, genres: book.genres.map(getGenreOption) };
}

export function parseBookFormValues(bookFormValues: BookFormValues): Book {
  return {
    ...bookFormValues,
    genres: bookFormValues.genres.map(parseGenreOption),
  };
}
