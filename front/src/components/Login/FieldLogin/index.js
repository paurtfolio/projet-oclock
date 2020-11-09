import React from 'react';
import PropTypes from 'prop-types';

import './field.scss';

const FieldLogin = ({
  name,
  type,
  placeholder,
  value,
  changeField,
}) => {
  const handleOnChange = (event) => {
    changeField(event.target.value, event.target.name);
  };

  return (
    <input
      className="log-input"
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
      required
    />
  );
};

FieldLogin.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
};

FieldLogin.defaultProps = {
  type: 'text',
};

export default FieldLogin;
