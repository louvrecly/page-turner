import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import LabelledField from './LabelledField';
import Book from '../../types/book';
import { ALL_GENRES } from '../../types/genre';

const BookFormValuesSchema: yup.ObjectSchema<Book> = yup
  .object({
    id: yup.number().positive().integer().required(),
    title: yup.string().required(),
    author: yup.string().required(),
    price: yup.number().positive().required(),
    description: yup.string().defined(),
    genres: yup
      .array(yup.string().defined().oneOf(ALL_GENRES))
      .ensure()
      .required(),
  })
  .required();

interface BookFormProps {
  book: Book;
  onSubmit: (book: Book) => void;
}

const BookForm = ({ book, onSubmit }: BookFormProps) => {
  const defaultValues = useMemo(() => structuredClone(book), [book]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Book>({
    defaultValues,
    resolver: yupResolver(BookFormValuesSchema),
  });

  return (
    <form
      className="u-flex u-flex-col u-items-stretch u-gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2>Book Form</h2>

      <FormInput {...register('id')} value={book.id} disabled hidden />

      <LabelledField
        label="Title"
        htmlFor="title"
        errorMessage={errors.title?.message}
      >
        <FormInput id="title" {...register('title')} />
      </LabelledField>

      <LabelledField
        label="Author"
        htmlFor="author"
        errorMessage={errors.author?.message}
      >
        <FormInput id="author" {...register('author')} />
      </LabelledField>

      <LabelledField
        label="Price"
        htmlFor="price"
        errorMessage={errors.price?.message}
      >
        <FormInput id="price" type="number" step=".01" {...register('price')} />
      </LabelledField>

      <LabelledField
        className="u-flex-col u-items-stretch"
        label="Description"
        htmlFor="description"
        errorMessage={errors.description?.message}
      >
        <FormTextArea id="description" {...register('description')} />
      </LabelledField>

      <button type="submit">Save</button>
    </form>
  );
};

export default BookForm;
