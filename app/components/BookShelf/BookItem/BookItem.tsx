import { MouseEvent, useCallback, useMemo } from 'react';
import BookItemContainer from './Container';
import BookInfo from './BookInfo';
import GenreList from '~/components/GenreList';
import { useAppDispatch } from '~/hooks/redux';
import { toggleModal } from '~/store/uiSlice';
import { setBookForm } from '~/store/booksSlice';
import Book from '~/types/book';

const GRADIENT_COLORS = [
  'u-from-rose-900 u-to-rose-600',
  'u-from-red-900 u-to-red-600',
  'u-from-orange-900 u-to-orange-600',
  'u-from-amber-900 u-to-amber-600',
  'u-from-yellow-900 u-to-yellow-600',
  'u-from-lime-900 u-to-lime-600',
  'u-from-green-900 u-to-green-600',
  'u-from-emerald-900 u-to-emerald-600',
  'u-from-teal-900 u-to-teal-600',
  'u-from-cyan-900 u-to-cyan-600',
  'u-from-blue-900 u-to-blue-600',
  'u-from-purple-900 u-to-purple-600',
  'u-from-fuchsia-900 u-to-fuchsia-600',
  'u-from-pink-900 u-to-pink-600',
];

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

  const gradientColor = useMemo(
    () => GRADIENT_COLORS[book.id % GRADIENT_COLORS.length],
    [book.id],
  );

  return (
    <BookItemContainer className={gradientColor} onClick={handleBookOnClick}>
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
