import BookItem from './BookItem';
import Book from '../../types/book';
import AddBookItem from './AddBookItem';

interface BookShelfProps {
  books: Book[];
}

const BookShelf = ({ books }: BookShelfProps) => {
  return (
    <div className="u-flex u-gap-4 u-flex-wrap u-justify-center">
      <AddBookItem />

      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookShelf;
