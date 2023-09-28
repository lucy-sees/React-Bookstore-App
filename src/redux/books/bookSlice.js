import { createSlice } from '@reduxjs/toolkit';

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
  },
  reducers: {
    addBook: (state, action) => {
      const newBook = action.payload;
      state.books.push(newBook);
    },

    removeBook: (state, action) => {
      const newState = { ...state };
      const bookIdToRemove = action.payload;
      newState.books = state.books.filter((book) => book.id !== bookIdToRemove);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
