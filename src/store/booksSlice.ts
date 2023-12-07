import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import Book from '../types/book';

interface BooksState {
  maxBookId: number;
  books: Book[];
}

const initialState: BooksState = {
  maxBookId: 0,
  books: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks(state, action: PayloadAction<Book[]>) {
      state.books = action.payload;
      state.maxBookId = action.payload.reduce(
        (maxId, book) => Math.max(maxId, book.id),
        state.maxBookId,
      );
    },
    addBook(state, action: PayloadAction<Book>) {
      const bookToSave = action.payload;

      state.books.push(bookToSave);
      state.maxBookId = bookToSave.id;
    },
    editBook(state, action: PayloadAction<Book>) {
      const bookToSave = action.payload;

      const index = state.books.findIndex((book) => book.id === bookToSave.id);
      state.books.splice(index, 1, bookToSave);
    },
  },
});

export const { setBooks, addBook, editBook } = booksSlice.actions;
export const selectBooks = (state: RootState) => state.books.books;
export const selectMaxBookId = (state: RootState) => state.books.maxBookId;

const booksReducer = booksSlice.reducer;

export default booksReducer;
