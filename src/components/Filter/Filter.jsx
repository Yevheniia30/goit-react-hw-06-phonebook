import PropTypes from 'prop-types';
import s from './Filter.module.css';

export const Filter = ({ filter, onFilter }) => {
  return (
    <label>
      Search contact by name
      <input
        type="text"
        className={s.filter}
        // placeholder="Search contact..."
        value={filter}
        onChange={onFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
