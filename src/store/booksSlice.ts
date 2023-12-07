import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import Book from '../types/book';

interface BooksState {
  maxBookId: number;
  activeBookId: number;
  books: Book[];
}

const initialState: BooksState = {
  maxBookId: 0,
  activeBookId: 0,
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
    setActiveBookId(state, action: PayloadAction<number>) {
      const bookId = action.payload;

      state.activeBookId = bookId;
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
    removeBook(state, action: PayloadAction<number>) {
      const bookIdToRemove = action.payload;

      const index = state.books.findIndex((book) => book.id === bookIdToRemove);
      state.books.splice(index, 1);
    },
  },
});

export const { setBooks, setActiveBookId, addBook, editBook, removeBook } =
  booksSlice.actions;
export const selectBooks = (state: RootState) => state.books.books;
export const selectMaxBookId = (state: RootState) => state.books.maxBookId;
export const selectActiveBookId = (state: RootState) =>
  state.books.activeBookId;

const booksReducer = booksSlice.reducer;

export default booksReducer;
