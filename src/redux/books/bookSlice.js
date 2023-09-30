import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    loadBooks: (state, action) => {
      const newBooks = Object.entries(action.payload).map(([key, value]) => ({
        item_id: key,
        title: value[0].title,
        category: '',
        author: value[0].author,
      }));
      return newBooks;
    },
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => state.filter((book) => book.item_id !== action.payload),
  },
});

export const { loadBooks, addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
