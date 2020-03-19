import { memo } from 'react';
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

const Radio = memo(({id, title, checked, value, disabled, className='', children, size, onClick, onChange}) => {
  const radio_style = classNames(
    "radio-basic",
    { "on": checked === value },
    { "disabled": disabled },
    { "sml": size === "small" },
    className
  )
  return (
    <span className={radio_style} data-id={value} onClick={onClick}>
      <input type="radio" id={id} value={value} disabled={disabled} checked={checked === value} onChange={onChange} />
      <label htmlFor={id}>{title}</label>
      {children}
    </span>
  )
});

Radio.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  checked: PropTypes.number,
  value: PropTypes.number,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func
}

export default React.memo(Radio)