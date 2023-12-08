import * as yup from 'yup';
import { ALL_GENRES } from '~/types/genre';
import { BookFormValues } from '~/types/bookForm';

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
