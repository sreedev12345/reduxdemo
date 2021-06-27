import { createStore, applyMiddleware,compose } from "redux";
import thunkMiddleware from "redux-thunk";
import index from './index';
let middleware = [thunkMiddleware];

const store = createStore(index,applyMiddleware(...middleware));

export default store;

