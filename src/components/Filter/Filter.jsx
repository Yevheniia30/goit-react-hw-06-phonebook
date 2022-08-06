import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterUser } from 'redux/contacts/contactsActions';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleFilter = e => {
    const { value } = e.currentTarget;
    dispatch(filterUser(value));
  };

  return (
    <label>
      Search contact by name
      <input
        type="text"
        className={s.filter}
        placeholder="Search contact..."
        value={filter}
        onChange={handleFilter}
      />
    </label>
  );
};
