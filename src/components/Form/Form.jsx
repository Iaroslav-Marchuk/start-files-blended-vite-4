import { FiSearch } from 'react-icons/fi';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';

import { addTodo } from '../../redux/todoSlice';

import style from './Form.module.css';

const Form = () => {
  const todos = useSelector(state => state.todos.items);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const inputValue = event.target.elements.search.value.trim();

    const isDublicate = todos.some(todo => todo.text === inputValue);

    if (isDublicate) {
      toast.error('Todo with the same text already exists!');
      return;
    }

    dispatch(
      addTodo({
        id: `id-${nanoid()}`,
        text: inputValue,
      }),
    );

    event.target.reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <Toaster />
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
