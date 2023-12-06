import { FormEvent } from 'react';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import LabelledField from './LabelledField';

const BookForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      className="u-flex u-flex-col u-items-stretch u-gap-2"
      onSubmit={handleSubmit}
    >
      <h2>Book Form</h2>

      <LabelledField label="Title:" htmlFor="title">
        <FormInput type="text" name="title" required />
      </LabelledField>

      <LabelledField label="Author:" htmlFor="author">
        <FormInput type="text" name="author" required />
      </LabelledField>

      <LabelledField label="Price:" htmlFor="price">
        <FormInput type="number" name="price" step=".01" required />
      </LabelledField>

      <LabelledField
        className="u-flex-col u-items-stretch"
        label="Description:"
        htmlFor="description"
      >
        <FormTextArea name="description" />
      </LabelledField>

      <button type="submit">Save</button>
    </form>
  );
};

export default BookForm;
