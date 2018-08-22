import { createStore, combineReducers } from 'redux';
import app from './app/reducer';

const store = createStore(
    combineReducers({app})
)

export default store;