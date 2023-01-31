import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './book/book';
import categoriesReducer from './categories/categories';

const Store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default Store;
