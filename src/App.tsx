import NavBar from './components/NavBar';
import BookShelf from './components/BookShelf';
import Modal from './components/Modal';
import BookForm from './components/BookForm';
import useBooksData from './hooks/useBooksData';
import useBookFormModal from './hooks/useBookFormModal';

const App = () => {
  const { books, isLoading, error } = useBooksData();
  const { isModalOpened } = useBookFormModal();

  return (
    <div className="u-relative u-w-screen u-min-h-screen u-bg-gradient-to-b u-from-slate-950 u-to-slate-900 u-text-white">
      <NavBar />

      <div className="u-mx-auto u-p-4 u-container">
        {isLoading ? (
          <p className="u-text-center">Loading...</p>
        ) : error ? (
          <p className="u-text-center">Error: {error.message}</p>
        ) : (
          <BookShelf books={books} />
        )}
      </div>

      {isModalOpened && (
        <Modal>
          <BookForm />
        </Modal>
      )}
    </div>
  );
};

export default App;
