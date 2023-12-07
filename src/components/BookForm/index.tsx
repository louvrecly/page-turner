import { useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Select from 'react-select';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import LabelledField from './LabelledField';
import bookFormValuesSchema, {
  BookFormValues,
  getBookFormValues,
  parseBookFormValues,
} from './schema';
import Book from '../../types/book';
import BookFormType from '../../types/bookForm';
import { genreOptions } from '../../types/genre';
export interface BookFormProps {
  type: BookFormType;
  book: Book;
  onSubmit: (book: Book) => void;
}

const BookForm = ({ type, book, onSubmit }: BookFormProps) => {
  const defaultValues = useMemo<BookFormValues>(
    () => getBookFormValues(book),
    [book],
  );

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BookFormValues>({
    defaultValues,
    resolver: yupResolver(bookFormValuesSchema),
  });

  const formTitle = useMemo(
    () => (type === 'save' ? 'Save the Book' : 'Confirm to remove this book?'),
    [type],
  );
  const formAction = useMemo(
    () => (type === 'save' ? 'Save' : 'Confirm'),
    [type],
  );

  return (
    <form
      className="u-flex u-flex-col u-items-stretch u-gap-2"
      onSubmit={handleSubmit((bookFormValues: BookFormValues) => {
        const parsedBook = parseBookFormValues(bookFormValues);
        onSubmit(parsedBook);
      })}
    >
      <h2>{formTitle}</h2>

      <FormInput {...register('id')} value={book.id} disabled hidden />

      <LabelledField
        label="Title"
        htmlFor="title"
        errorMessage={errors.title?.message}
      >
        <FormInput
          id="title"
          {...register('title')}
          disabled={type === 'remove'}
        />
      </LabelledField>

      <LabelledField
        label="Author"
        htmlFor="author"
        errorMessage={errors.author?.message}
      >
        <FormInput
          id="author"
          {...register('author')}
          disabled={type === 'remove'}
        />
      </LabelledField>

      <LabelledField
        label="Price"
        htmlFor="price"
        errorMessage={errors.price?.message}
      >
        <FormInput
          id="price"
          type="number"
          step=".01"
          {...register('price')}
          disabled={type === 'remove'}
        />
      </LabelledField>

      <LabelledField
        className="u-flex-col u-items-stretch"
        label="Description"
        htmlFor="description"
        errorMessage={errors.description?.message}
      >
        <FormTextArea
          id="description"
          {...register('description')}
          disabled={type === 'remove'}
        />
      </LabelledField>

      <LabelledField
        className="u-flex-col u-items-stretch"
        label="Genres"
        htmlFor="genres"
        errorMessage={errors.genres?.message}
      >
        <Controller
          name="genres"
          control={control}
          render={({ field }) => (
            <Select
              inputId="genres"
              options={genreOptions}
              {...field}
              isMulti
              isDisabled={type === 'remove'}
            />
          )}
        />
      </LabelledField>

      <button type="submit">{formAction}</button>
    </form>
  );
};

export default BookForm;
