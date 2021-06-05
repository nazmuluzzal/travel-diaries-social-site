import  { combineReducers, createStore, applyMiddleware } from "redux";
import userReducer from "./reducers/userReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
const combineReducer = combineReducers({
  users : userReducer,
})
const middleware = applyMiddleware(thunk)
const  store = createStore(combineReducer, composeWithDevTools(middleware));

export default store;