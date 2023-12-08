import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { getEmptyBook } from '../helpers/fetchBooks';
import Book from '../types/book';
import BookFormType from '../types/bookForm';

interface BooksState {
  books: Book[];
  maxBookId: number;
  activeBookId: number;
  bookFormType: BookFormType;
}

const initialState: BooksState = {
  books: [],
  maxBookId: 0,
  activeBookId: 0,
  bookFormType: 'save',
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
    removeBook(state, action: PayloadAction<number>) {
      const bookIdToRemove = action.payload;

      const index = state.books.findIndex((book) => book.id === bookIdToRemove);
      state.books.splice(index, 1);
    },
    setBookForm(
      state,
      action: PayloadAction<{ type: BookFormType; bookId: number }>,
    ) {
      const { type, bookId } = action.payload;
      state.bookFormType = type;
      state.activeBookId = bookId;
    },
  },
});

export const { setBooks, addBook, editBook, removeBook, setBookForm } =
  booksSlice.actions;
export const selectBooks = (state: RootState) => state.books.books;
export const selectMaxBookId = (state: RootState) => state.books.maxBookId;
export const selectActiveBookId = (state: RootState) =>
  state.books.activeBookId;
export const selectBookFormType = (state: RootState) =>
  state.books.bookFormType;
export const selectActiveBook = (state: RootState) =>
  state.books.books.find((book) => book.id === state.books.activeBookId) ??
  getEmptyBook(state.books.maxBookId);

const booksReducer = booksSlice.reducer;

export default booksReducer;
