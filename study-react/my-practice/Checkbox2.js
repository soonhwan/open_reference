import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Checkbox = memo(({id, name, pid, label, checked=false, disabled=false, onChange}) => {
  console.log(label);

  const handleChange = (e) => {
    if(onChange) onChange(e);
  };

  return (
    <label htmlFor={id} className="base-chk">
      <input id={id} name={name} pid={pid} type="checkbox" checked={checked} disabled={disabled} onChange={handleChange} />
      <span className="label">{label}</span>
    </label>
  );
});

Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  pid: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
}

export default Checkbox;






