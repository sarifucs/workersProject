import { combineReducers, createStore } from 'redux';
import workerReducer from './reducers/workerReducer';

const reducer = combineReducers({ workerReducer });
const store = createStore(reducer);
window.store = store;
export default store;