import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import usersReducer from "./usersReducer";
import { thunk } from "redux-thunk";
import modalWindowReducer from "./modalReducer";

//комбайним редюсеры
let reducer = combineReducers({
   usersPage: usersReducer,
   modalWindow: modalWindowReducer,
})

//добавил Middleware(thunk)
let store = createStore(reducer, applyMiddleware(thunk));

export default store;