import { configureStore, combineReducers } from '@reduxjs/toolkit';

import slice from './todo-redux';
const todoReducer = slice.reducer;

const rootReducer = combineReducers({todoReducer});

const store = configureStore({reducer:rootReducer});
const todoCreators = slice.actions;

export default store;
export { todoCreators };