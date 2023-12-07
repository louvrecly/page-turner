import { SelectOption } from './bookForm';

export const ALL_GENRES = [
  'Art',
  'Biography',
  'Business',
  `Children's`,
  'Christian',
  'Classics',
  'Comics',
  'Cookbooks',
  'Ebooks',
  'Fantasy',
  'Fiction',
  'Graphic Novels',
  'Historical Fiction',
  'History',
  'Horror',
  'Memoir',
  'Music',
  'Mystery',
  'Nonfiction',
  'Poetry',
  'Psychology',
  'Romance',
  'Science',
  'Science Fiction',
  'Self Help',
  'Sports',
  'Thriller',
  'Travel',
  'Young Adult',
] as const;

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

type Genre = (typeof ALL_GENRES)[number];

export default Genre;
