import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';

const Checkbox = memo(({id, name, pid, label, checked, disabled=false, onChange}) => {
  const [chk, setChk] = useState(false);
  console.log("rerender")
  const handleChange = (e) => {
    if(checked === undefined){
      setChk(chk => !chk);
    }

    if(onChange) onChange(e);
  };

  return (
    <label htmlFor={id} className="base-chk">
      <input id={id} name={name} pid={pid} type="Checkbox" checked={checked===undefined?chk:checked} disabled={disabled} onChange={handleChange} />
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






