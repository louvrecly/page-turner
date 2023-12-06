import BookItemContainer from './BookItem/Container';

const AddBookItem = () => {
  return (
    <BookItemContainer className="u-from-sky-600/50 u-to-sky-400/50 u-transition-colors hover:u-from-sky-600/70 hover:u-to-sky-400/70">
      <button className="u-absolute u-inset-0 u-bg-transparent u-text-3xl u-transition-transform hover:u-scale-150">
        +
      </button>
    </BookItemContainer>
  );
};

export default AddBookItem;
