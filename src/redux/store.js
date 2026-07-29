import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { userReducer } from "./reducers/userReducer";
let root = combineReducers({ userReducer })
export let store = legacy_createStore(root, applyMiddleware(thunk))