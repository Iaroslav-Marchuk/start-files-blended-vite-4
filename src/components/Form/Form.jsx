import { FiSearch } from 'react-icons/fi';
// import { useId } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';

import { addTodo } from '../../redux/todoSlice';

import style from './Form.module.css';

const Form = () => {
  // const todoId = useId();
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const inputValue = event.target.elements.search.value.trim();

    if (!inputValue) return;

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
