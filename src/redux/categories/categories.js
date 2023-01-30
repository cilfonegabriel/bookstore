const CHECK_STATUS = 'CHECK_STATUS';

const initialState = {categories: [],}

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_STATUS:
            return 'Under Constrution';
        default:
            return state;    
    }
};

export const checkStatus = () => async (dispatch) => {
    dispatch({
        type : CHECK_STATUS,
    })
};

export default categoriesReducer;