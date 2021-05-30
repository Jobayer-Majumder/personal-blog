import * as actions from '../actions/UserActions';

const initialState = {
    user: {}
};

export const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case actions.USER_LOGIN:
            return { ...state, user: action.payload };

        case actions.IS_LOGGED_IN:
            if (action.payload) {
                return { ...state, user: action.payload };

            }
        break
        default:
            return state;
    }
}