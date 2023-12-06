import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import Book from '../types/book';

interface BooksState {
  books: Book[];
}

const initialState: BooksState = {
  books: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks(state, action: PayloadAction<Book[]>) {
      state.books = action.payload;
    },
  },
});

export const { setBooks } = booksSlice.actions;
export const selectBooks = (state: RootState) => state.books.books;

const booksReducer = booksSlice.reducer;

export default booksReducer;
