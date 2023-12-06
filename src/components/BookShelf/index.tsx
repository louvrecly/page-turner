import Book from '../../types/book';
import BookItem from './BookItem';

interface BookShelfProps {
  books: Book[];
}

const BookShelf = ({ books }: BookShelfProps) => {
  return (
    <div className="u-py-2 u-px-4">
      <div className="u-flex u-gap-4 u-flex-wrap u-justify-center">
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookShelf;
