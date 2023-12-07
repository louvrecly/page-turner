import * as yup from 'yup';
import Book from '../../types/book';
import { ALL_GENRES } from '../../types/genre';

const bookFormValuesSchema: yup.ObjectSchema<Book> = yup
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

export default bookFormValuesSchema;
