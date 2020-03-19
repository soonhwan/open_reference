import { useState } from 'react'
import CheckBox from './CheckBox'
import PropTypes from 'prop-types'

const CheckBoxItem = ({children, id, checked=false, size="large", onClick}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const handleClick = (e) => {
    e.preventDefault()
    setIsChecked(!isChecked)
    if (isChecked === false && onClick) onClick(e)
  }
  return (
    <li onClick={handleClick}>
      <CheckBox id={id} checked={isChecked} isSelf={false} size={size} />
      {children}
    </li>
  )
}

CheckBoxItem.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  checked: PropTypes.bool,
  size: PropTypes.string
}

export default CheckBoxItem