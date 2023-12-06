import { useAppDispatch } from '../../hooks/redux';
import { toggleModal } from '../../store/uiSlice';
import BookItemContainer from './BookItem/Container';

const AddBookItem = () => {
  const dispatch = useAppDispatch();

  return (
    <BookItemContainer className="u-from-sky-600/50 u-to-sky-400/50 u-transition-colors hover:u-from-sky-600/70 hover:u-to-sky-400/70">
      <button
        className="u-absolute u-inset-0 u-text-3xl u-transition-transform hover:u-scale-150"
        onClick={() => dispatch(toggleModal(true))}
      >
        +
      </button>
    </BookItemContainer>
  );
};

export default AddBookItem;
