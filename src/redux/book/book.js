const ADD_A_BOOK = 'ADD_A_BOOK';
const REMOVE_A_BOOK = 'REMOVE_A_BOOK';
const LIST_BOOK = 'LIST_BOOK';

const initailState = {book:[]};

const booksReduce = (state = initailState, action) =>{
    switch(action.type){
        case ADD_A_BOOK:
            return state.books.push(action.book);
        case REMOVE_A_BOOK:
            return state.books.filter((book) => book.id !== action.book);
        case LIST_BOOK:
            return action.books;
        default:
            return state;    
    }
};

export const addBook = (book) => async (dispatch) =>{
    dispatch({
        type: 'ADD_A_BOOK',
        book,
    })
};

export const removeBook = (book) => async (dispatch) => {
    dispatch({
        type: 'REMOVE_A_BOOK',
        book,
    });
};

export const listBooks = () => async (dispatch) => {
    dispatch({
        type: 'LIST_BOOK',
    });
};

export default booksReduce;