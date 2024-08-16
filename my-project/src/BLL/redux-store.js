import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import usersReducer from "./usersReducer";
import { thunk } from "redux-thunk";
import modalWindowReducer from "./modalReducer";

let reducer = combineReducers({
   usersPage: usersReducer,
   modalWindow: modalWindowReducer,
})

let store = createStore(reducer, applyMiddleware(thunk));

export default store;