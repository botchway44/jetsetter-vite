import  { useCallback } from 'react';
import PropTypes from 'prop-types';




const Filter = (props) => {

  const { searchTerm, onChange } = props;

  const handleChange = useCallback(
    event => {
      const value = event.target.value;
      onChange(value);
    },
    [onChange],
  );

  return (
    <input
      className="Items-searchTerm"
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

Filter.propTypes = {
  searchTerm: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
