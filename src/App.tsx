import BookShelf from './components/BookShelf';
import fetchBooks from './helpers/fetchBooks';

const App = () => {
  const books = fetchBooks();

  return (
    <>
      <div className="u-py-2 u-px-4">
        <h1 className="u-text-2xl">📚 Page Turner</h1>
      </div>

      <BookShelf books={books} />
    </>
  );
};

export default App;
