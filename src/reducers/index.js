import { combineReducers } from "redux";
import postReducer from "./postReducer";
import usersReducer from "./usersReducer";


export default combineReducers({
    replaceMe: () => 'Hi there',
    posts: postReducer,
    users: usersReducer
}); 