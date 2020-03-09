import React from 'react';
import { useRedux } from '../hooks';

const withUiComponent = Component => {
    return () => {
        const [ todoList, dispatch, todoCreators ] = useRedux();
        return (
            <Component
                todoList={todoList}
                fire={dispatch}
                todoCreators={todoCreators}
            />
        );
    };
};

export default withUiComponent;