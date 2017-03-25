import { combineReducers, createStore } from 'redux';
import sales from './sales';
import initialState from './initialState';

const rootReducer = combineReducers({
  sales,
});

const store = createStore(rootReducer, initialState);
export default store;
