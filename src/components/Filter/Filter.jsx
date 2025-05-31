import style from './Filter.module.css';

import { useSelector, useDispatch } from 'react-redux';

import { changeFilter } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.filter.name);
  const handleFilterChange = filterValue => dispatch(changeFilter(filterValue));

  return (
    <input
      className={style.input}
      placeholder="Find it"
      name="filter"
      value={filter}
      onChange={event => handleFilterChange(event.target.value)}
    />
  );
};

export default Filter;
