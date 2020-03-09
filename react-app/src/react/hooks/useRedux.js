import { useDispatch, useSelector } from 'react-redux';
import { todoCreators } from '../../redux';

const useRedux = () => {
    const todoList = useSelector(state => state.todoReducer.todoList);
    const dispatch = useDispatch();

    return [todoList, dispatch, todoCreators];
}

export default useRedux;