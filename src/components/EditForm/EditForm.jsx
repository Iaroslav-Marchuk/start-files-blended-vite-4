import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';

import { useDispatch, useSelector } from 'react-redux';
import { editTodo, setIsEdit, setCurrentTodo } from '../../redux/todoSlice';

import style from './EditForm.module.css';

const EditForm = () => {
  const todos = useSelector(state => state.todos.items);
  const currentTodo = useSelector(state => state.todos.currentTodo);
  const dispatch = useDispatch();

  const findTodo = text => {
    return todos.some(todo => {
      return todo.text.trim().toLowerCase() === text.trim().toLowerCase();
    });
  };

  const handleEdit = event => {
    event.preventDefault();
    const updatedText = event.target.elements.text.value;
    if (!findTodo(updatedText)) {
      dispatch(editTodo({ id: currentTodo.id, text: updatedText }));
      dispatch(setIsEdit(false));
      dispatch(setCurrentTodo({ id: '', text: '' }));
    } else {
      toast.error('Todo with the same text already exists!');
    }
  };

  const handleCancel = () => {
    dispatch(setIsEdit(false));
    dispatch(setCurrentTodo({ id: '', text: '' }));
  };

  return (
    <form className={style.form} onSubmit={handleEdit}>
      <Toaster />
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={currentTodo.text}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={handleCancel}>
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
export default EditForm;
