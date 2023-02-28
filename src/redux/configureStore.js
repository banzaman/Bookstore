import { createStore, combineReducers } from '@reduxjs/toolkit';
import books from './books/books';
import categories from './categories/categories';

const reducer = combineReducers({
  books,
  categories,
});

const store = createStore(reducer);

export default store;
