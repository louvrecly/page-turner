import BookItemContainer from './Container';
import BookInfo from './BookInfo';
import GenreList from '../../GenreList';
import { useAppDispatch } from '../../../hooks/redux';
import { removeBook } from '../../../store/booksSlice';
import Book from '../../../types/book';

interface BookItemProps {
  book: Book;
}

const BookItem = ({ book }: BookItemProps) => {
  const dispatch = useAppDispatch();

  return (
    <BookItemContainer>
      <button
        className="u-absolute u-top-px u-right-2"
        onClick={() => dispatch(removeBook(book.id))}
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
