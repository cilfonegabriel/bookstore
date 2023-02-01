const ADD_A_BOOK = 'bookStore/book/ADD_A_BOOK';
const REMOVE_A_BOOK = 'bookStore/book/REMOVE_A_BOOK';
const LIST_BOOKS = 'bookStore/book/LIST_BOOKS';

const initialState = [];

const booksReducer = (state = initialState, action) => {
  if (action.type === ADD_A_BOOK) {
    return [...state, action.book];
  }
  if (action.type === REMOVE_A_BOOK) {
    return state.filter((book) => book.id !== action.book);
  }
  if (action.type === LIST_BOOKS) {
    return state;
  }
  return state;
};

export const addBook = (book) => async (dispatch) => {
  dispatch({
    type: ADD_A_BOOK,
    book,
  });
};

export const removeBook = (book) => async (dispatch) => {
  dispatch({
    type: REMOVE_A_BOOK,
    book,
  });
};

export const listBooks = () => async (dispatch) => {
  dispatch({
    type: LIST_BOOKS,
  });
};

export default booksReducer;
