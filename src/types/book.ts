import Genre from './genre';

type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  genres: Genre[];
  description: string;
};

export default Book;
