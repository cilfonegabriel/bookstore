const ADD_A_BOOK = 'bookStore/book/ADD_A_BOOK';
const REMOVE_A_BOOK = 'bookStore/book/REMOVE_A_BOOK';
const LIST_BOOKS = 'bookStore/book/LIST_BOOKS';

const initialState = [{
  id: '1', title: 'bealy', author: 'father', category: 'java',
}];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_A_BOOK:
      return [...state, action.book];
    case REMOVE_A_BOOK:
      return state.filter((book) => book.id !== action.book);
    case LIST_BOOKS:
      return state;
    default:
      return state;
  }
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
