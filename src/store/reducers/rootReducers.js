import { combineReducers } from "redux";
import blogReducers from "./blogReducers";
import { userReducers } from "./userReducers";

export const rootReducers = combineReducers({
    user: userReducers,
    blogs: blogReducers
});