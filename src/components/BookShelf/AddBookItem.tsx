import { useCallback } from 'react';
import BookItemContainer from './BookItem/Container';
import { useAppDispatch } from '../../hooks/redux';
import { setActiveBookId } from '../../store/booksSlice';
import { toggleModal } from '../../store/uiSlice';

const AddBookItem = () => {
  const dispatch = useAppDispatch();

  const handleClick = useCallback(() => {
    dispatch(setActiveBookId(0));
    dispatch(toggleModal(true));
  }, [dispatch]);

  return (
    <BookItemContainer className="u-from-sky-600/50 u-to-sky-400/50 u-transition-colors hover:u-from-sky-600/70 hover:u-to-sky-400/70">
      <button
        className="u-absolute u-inset-0 u-text-3xl u-transition-transform hover:u-scale-150"
        onClick={handleClick}
      >
        +
      </button>
    </BookItemContainer>
  );
};

export default AddBookItem;
