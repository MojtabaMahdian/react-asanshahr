import { createStore, combineReducers, applyMiddleware } from "redux";
import { Advertising } from "./reducers";
import thunk from "redux-thunk";

const reducer = combineReducers({
  add : Advertising
});
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
