import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { setIsEdit, setCurrentTodo } from '../../redux/todoSlice';

import Text from '../Text/Text';

import style from './Todo.module.css';

const Todo = ({ todoData: { id, text }, index, onDelete }) => {
  const dispatch = useDispatch();

  const handleEdit = (id, text) => {
    dispatch(setIsEdit(true));
    dispatch(setCurrentTodo({ id, text }));
  };
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO # {index + 1}
      </Text>

      <Text>{text}</Text>
      <button className={style.deleteButton} type="button">
        <RiDeleteBinLine
          size={24}
          onClick={() => {
            onDelete(id);
          }}
        />
      </button>
      <button className={style.editButton} type="button">
        <RiEdit2Line
          size={24}
          onClick={() => {
            handleEdit(id, text);
          }}
        />
      </button>
    </div>
  );
};

export default Todo;
