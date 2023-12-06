import NavBar from './components/NavBar';
import BookShelf from './components/BookShelf';
import fetchBooks from './helpers/fetchBooks';

const App = () => {
  const books = fetchBooks();

  return (
    <>
      <NavBar />

      <BookShelf books={books} />
    </>
  );
};

export default App;
