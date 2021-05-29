import userData from "../../fakeData/user/userData";

export const USER_LOGIN = "USER_LOGIN";
export const IS_LOGGED_IN = "IS_LOGGED_IN";

export const userLogin = payload => async (dispatch) => {
    try {
        const data = userData.find(user => ((user?.email === payload.email) && (user.password === payload.password)));
        if (data) {
            localStorage.setItem('token', data.token);
            dispatch({ type: USER_LOGIN, payload: data });
        }
    } catch (error) {

    }
}

export const isLoggedIn = () => {
    const token = localStorage.getItem('token');
    const data = userData.find(user => user.token == token);
    return {
        type: IS_LOGGED_IN,
        payload: data
    }
}