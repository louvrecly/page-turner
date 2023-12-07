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
  },
});

export const { setBooks } = booksSlice.actions;
export const selectBooks = (state: RootState) => state.books.books;
export const selectMaxBookId = (state: RootState) => state.books.maxBookId;

const booksReducer = booksSlice.reducer;

export default booksReducer;
