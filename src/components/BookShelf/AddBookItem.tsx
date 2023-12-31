import BookItemContainer from './BookItem/BookItemContainer';
import useBookFormModal from '../../hooks/useBookFormModal';

const AddBookItem = () => {
  const { maxBookId, openBookFormModal } = useBookFormModal();

  return (
    <BookItemContainer className="u-from-sky-600/50 u-to-sky-400/50 u-transition-all hover:u-from-sky-600/70 hover:u-to-sky-400/70">
      <button
        className="u-absolute u-inset-0 u-text-3xl u-transition-transform hover:u-scale-150"
        onClick={() => openBookFormModal('save', maxBookId + 1)}
      >
        +
      </button>
    </BookItemContainer>
  );
};

export default AddBookItem;
