import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: [
    { id: 1, title: '12 Rules For Life', author: 'Jordan B. Peterson' },
    { id: 2, title: 'The Power of Habit', author: 'Charles Duhigg' },
    { id: 3, title: 'How to Win Friends and Influence People', author: 'Dale Carnegie' },
  ],
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => state.filter((book) => book.id !== action.payload),
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
