import BookItem from './BookItem';
import AddBookItem from './AddBookItem';
import Book from '~/types/book';

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
