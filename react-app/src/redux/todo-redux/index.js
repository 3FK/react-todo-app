import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const initialState = {
    todoList: [],
}

const reducers = {
    addTodo : (state, action) => {
        const newState = {
            ...state, todoList: [...state.todoList, action.payload],
        };
        return newState;
    },
    updateTodo: (state, action) =>{
        const item = action.payload;
        const clonedItems = [...state.todoList];
        const index = _.findIndex(clonedItems, {ID: item.ID});
        clonedItems[index] = item;
        const newState = { ...state, todoList: clonedItems};
        return newState;
    },
    deleteTodo: state => {
        return state;
    },
};

const slice = createSlice({
    name:'todos',
    initialState,
    reducers,
})

export default slice;