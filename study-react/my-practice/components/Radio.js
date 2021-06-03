import React, { useState, useRef, memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const Radio = memo(({id="", name="", label="", className="", checked, disabled=false, value, onChange, children}) => {
  //console.log("label = ", label);
  const [chk, setChk] = useState(false);
  const chkRef = useRef(null);

  const customClassName = classNames(
    "radio-base",
    { "disabled": disabled},
    className
  )
  //onsole.log('customClassName = ', customClassName);

  const handleChange = () => {
    if(checked === undefined){
      setChk(!chk);
    }
    const target = {
      id: id,
      name: name,
      label: label,
      value: value,
      className: customClassName,
      checked: chkRef.current.checked,
      disabled: chkRef.current.disabled,
    }
    if(typeof onChange === 'function') onChange({target});
  };

  return (
    <label htmlFor={id} className={customClassName}>
      <input className="a11y" ref={chkRef} id={id} name={name} type="radio" checked={checked===undefined?chk:checked} disabled={disabled} value={value} onChange={handleChange} />
      <span className="label">{children || label}</span>
    </label>
  );
});

Radio.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node,
}

Radio.defaultProps = {
  id: '',
  name: '',
  label: '',
  className: '',
  disabled: false,
}

export default Radio;






