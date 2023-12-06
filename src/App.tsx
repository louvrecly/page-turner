import fetchBooks from './helpers/fetchBooks';

const App = () => {
  const books = fetchBooks();

  return (
    <>
      <div className="u-py-2 u-px-4">
        <h1 className="u-text-2xl">📚 Page Turner</h1>
      </div>

      <div className="u-py-2 u-px-4">
        <div className="u-flex u-gap-4 u-flex-wrap u-justify-center">
          {books.map((book) => (
            <div
              key={book.id}
              className="u-py-4 u-px-6 u-w-full u-aspect-[2/3] u-bg-gradient-to-b u-from-emerald-900 u-to-emerald-600 u-rounded u-shadow u-flex u-flex-col u-items-stretch u-gap-2 sm:u-flex-grow sm:u-basis-1/3 md:u-basis-1/5 lg:u-flex-grow-0"
            >
              <h2 className=" u-font-bold">{book.title}</h2>

              <p className="u-text-sm u-flex u-justify-between u-gap-2">
                <p>
                  <span>By </span>
                  <span className="u-font-bold">{book.author}</span>
                </p>

                <span className="u-font-bold">$&nbsp;{book.price}</span>
              </p>

              <div className="u-flex-grow">
                <p className="u-text-xs u-italic u-line-clamp-4">
                  {book.description}
                </p>
              </div>

              <p className="u-text-xs u-flex u-gap-2 u-flex-wrap">
                {book.genres.map((genre) => (
                  <span
                    key={genre}
                    className="u-py-1 u-px-3 u-bg-indigo-600 u-rounded-full"
                  >
                    {genre}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
