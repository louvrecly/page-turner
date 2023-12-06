import Book from '../../../types/book';
import GenreList from '../../GenreList';
import BookInfo from './BookInfo';

interface BookItemProps {
  book: Book;
}

const BookItem = ({ book }: BookItemProps) => {
  return (
    <div className="u-py-4 u-px-6 u-flex-grow u-aspect-[2/3] u-bg-gradient-to-b u-from-emerald-900 u-to-emerald-600 u-rounded u-shadow u-flex u-flex-col u-items-stretch u-gap-2 sm:u-flex-grow-0 sm:u-basis-1/3 md:u-basis-1/5">
      <BookInfo
        title={book.title}
        author={book.author}
        price={book.price}
        description={book.description}
      />

      <GenreList genres={book.genres} />
    </div>
  );
};

export default BookItem;
