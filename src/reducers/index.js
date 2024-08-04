import { combineReducers } from "redux";
import postReducer from "./postReducer";


export default combineReducers({
    replaceMe: () => 'Hi there',
    posts: postReducer
}); 