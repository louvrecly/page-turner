import { useCallback, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { twMerge } from 'tailwind-merge';
import Select from 'react-select';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import LabelledField from './LabelledField';
import useBookFormModal from '../../hooks/useBookFormModal';
import useBookShelfManager from '../../hooks/useBookShelfManager';
import {
  bookFormValuesSchema,
  genreOptions,
  getBookFormValues,
  parseBookFormValues,
} from '../../helpers/bookForm';
import { BookFormValues } from '../../types/bookForm';

const BookForm = () => {
  const { maxBookId, activeBook, bookFormType, closeBookFormModal } =
    useBookFormModal();
  const { addBookToShelf, editBookOnShelf, removeBookFromShelf } =
    useBookShelfManager();

  const defaultValues = useMemo<BookFormValues>(
    () => getBookFormValues(activeBook),
    [activeBook],
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
    () =>
      bookFormType === 'save' ? 'Book Details' : 'Confirm to remove this book?',
    [bookFormType],
  );
  const formAction = useMemo(
    () => (bookFormType === 'save' ? 'Save' : 'Confirm'),
    [bookFormType],
  );

  const onSubmit = useCallback(
    (bookFormValues: BookFormValues) => {
      const book = parseBookFormValues(bookFormValues);

      if (bookFormType === 'remove') {
        removeBookFromShelf(book.id);
      } else if (activeBook.id > maxBookId) {
        addBookToShelf(book);
      } else {
        editBookOnShelf(book);
      }

      closeBookFormModal();
    },
    [
      activeBook.id,
      bookFormType,
      maxBookId,
      addBookToShelf,
      editBookOnShelf,
      removeBookFromShelf,
      closeBookFormModal,
    ],
  );

  return (
    <form
      className="u-flex u-flex-col u-items-stretch u-gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="u-text-xl u-font-bold">{formTitle}</h2>

      <FormInput {...register('id')} value={defaultValues.id} disabled hidden />

      <LabelledField
        label="Title"
        htmlFor="title"
        errorMessage={errors.title?.message}
      >
        <FormInput
          id="title"
          placeholder="Enter the book title..."
          {...register('title')}
          disabled={bookFormType === 'remove'}
        />
      </LabelledField>

      <LabelledField
        label="Author"
        htmlFor="author"
        errorMessage={errors.author?.message}
      >
        <FormInput
          id="author"
          placeholder="Enter the author's name..."
          {...register('author')}
          disabled={bookFormType === 'remove'}
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
          disabled={bookFormType === 'remove'}
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
          placeholder="The book is about..."
          {...register('description')}
          disabled={bookFormType === 'remove'}
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
              classNames={{
                control: () => '!u-bg-zinc-800/70',
                menu: () => '!u-bg-zinc-800/70',
                menuList: () => 'u-text-indigo-600',
              }}
              inputId="genres"
              options={genreOptions}
              {...field}
              isMulti
              isDisabled={bookFormType === 'remove'}
            />
          )}
        />
      </LabelledField>

      <button
        type="submit"
        className={twMerge(
          'u-py-1 u-px-2 u-rounded',
          bookFormType === 'save' ? 'u-bg-emerald-600' : 'u-bg-rose-600',
        )}
      >
        {formAction}
      </button>
    </form>
  );
};

export default BookForm;
