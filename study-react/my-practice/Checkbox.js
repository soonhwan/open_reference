import React, { useState, useRef, memo } from 'react';
import PropTypes from 'prop-types';

const Checkbox = memo(({id="", name="", pid="", label="", className="base-chk", checked, disabled=false, onChange, onBlur, onFocus}) => {
  //console.log("label = ", label);
  const [chk, setChk] = useState(false);
  const chkRef = useRef(null);
  
  const handleChange = () => {
    if(checked === undefined){
      setChk(!chk);
    }
    const target = {
      id: id,
      name: name,
      pid: pid,
      label: label,
      className: className,
      checked: chkRef.current.checked,
      disabled: chkRef.current.disabled,
    }
    if(onChange) onChange({target});
  };

  const handleBlur = () => {
    if(onBlur) onBlur();
  };

  const handleFocus = () => {
    if(onFocus) onFocus();
  };

  return (
    <label htmlFor={id} className={className}>
      <input ref={chkRef} id={id} name={name} pid={pid} type="Checkbox" checked={checked===undefined?chk:checked} disabled={disabled} onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} />
      <span className="label">{label}</span>
    </label>
  );
});

Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  pid: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
}

export default Checkbox;






