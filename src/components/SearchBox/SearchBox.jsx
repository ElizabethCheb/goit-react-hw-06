import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Search by name"
      value={nameFilter}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
