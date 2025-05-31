import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import Todo from '../Todo/Todo';

import { useSelector, useDispatch } from 'react-redux';

import { deleteTodo } from '../../redux/todoSlice';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.items);
  const filter = useSelector(state => state.filter.name);

  const visibleTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(filter.toLowerCase()),
  );

  const handleDelete = id => {
    dispatch(deleteTodo(id));
  };

  return (
    <Grid>
      {visibleTodos.map((todoItem, index) => (
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
