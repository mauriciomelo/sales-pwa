import { combineReducers, createStore } from 'redux';
import sales from './sales';
import products from './products';
import initialState from './initialState';

const rootReducer = combineReducers({
  sales,
  products,
});

const store = createStore(rootReducer, initialState);
export default store;
