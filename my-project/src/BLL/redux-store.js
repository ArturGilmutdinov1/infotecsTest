import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import usersReducer from "./usersReducer";
import { thunk } from "redux-thunk";

let reducer = combineReducers({
   usersPage: usersReducer,
})

let store = createStore(reducer, applyMiddleware(thunk));

export default store;