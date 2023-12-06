import BookItemContainer from './Container';
import BookInfo from './BookInfo';
import GenreList from '../../GenreList';
import Book from '../../../types/book';

interface BookItemProps {
  book: Book;
}

const BookItem = ({ book }: BookItemProps) => {
  return (
    <BookItemContainer>
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
