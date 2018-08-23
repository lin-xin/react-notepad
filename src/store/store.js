import { createStore, combineReducers } from 'redux';
import app from './app/reducer';
import sidebar from './sidebar/reducer';

const store = createStore(
    combineReducers({
        app,
        sidebar
    })
)

export default store;