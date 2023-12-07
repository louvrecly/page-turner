import { MouseEvent, useCallback } from 'react';
import BookItemContainer from './Container';
import BookInfo from './BookInfo';
import GenreList from '../../GenreList';
import { useAppDispatch } from '../../../hooks/redux';
import { toggleModal } from '../../../store/uiSlice';
import { setBookForm } from '../../../store/booksSlice';
import Book from '../../../types/book';

interface BookItemProps {
  book: Book;
}

const BookItem = ({ book }: BookItemProps) => {
  const dispatch = useAppDispatch();

  const handleBookOnClick = useCallback(() => {
    dispatch(toggleModal(true));
    dispatch(setBookForm({ type: 'save', bookId: book.id }));
  }, [book.id, dispatch]);

  const handleCloseButtonOnClick = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation();
      dispatch(toggleModal(true));
      dispatch(setBookForm({ type: 'remove', bookId: book.id }));
    },
    [book.id, dispatch],
  );

  return (
    <BookItemContainer onClick={handleBookOnClick}>
      <button
        className="u-absolute u-top-px u-right-2"
        onClick={handleCloseButtonOnClick}
      >
        ✕
      </button>

      <BookInfo
        title={book.title}
        author={book.author}
        price={book.price}
        description={book.description}
      />

      <GenreList genres={book.genres} />
    </BookItemContainer>
  );
};

export default BookItem;
