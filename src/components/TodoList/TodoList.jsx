import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import Todo from '../Todo/Todo';

import { useSelector, useDispatch } from 'react-redux';

import { deleteTodo } from '../../redux/todoSlice';

const TodoList = () => {
  const todos = useSelector(state => state.todos.items);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteTodo(id));
  };

  return (
    <Grid>
      {todos.map((todoItem, index) => (
        <GridItem key={todoItem.id}>
          <Todo
            todoData={todoItem}
            index={index}
            onDelete={handleDelete}
          ></Todo>
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
