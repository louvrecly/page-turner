import Genre, { ALL_GENRES } from '../types/genre';
import { SelectOption } from '../types/bookForm';

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
