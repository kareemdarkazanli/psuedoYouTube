import * as actionTypes from './actions';

const initialState = {
    searchQuery: "hp"
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SEARCH_CHANGED:
           return {
                ...state,
                searchQuery: action.event.target.value
           };
        default:
            return state;
    }
};

export default reducer;