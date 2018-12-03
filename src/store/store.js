import { createStore, combineReducers } from 'redux';
import app from './app/reducer';
import sidebar from './sidebar/reducer';
import dialog from './dialog/reducer';

const store = createStore(
    combineReducers({
        app,
        sidebar,
        dialog
    })
)

export default store;