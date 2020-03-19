import { useState, useRef } from 'react'
import classNames from "classnames/bind"
import PropTypes from 'prop-types'

const Input = ({type='text', width='100%', height='48px', value='', closeButton=false, placeType=1, placeLabel=null, placeHolder, onChange, onBlur, onFocus, id, disabled=false, readOnly=false, onKeyPress, name, paddingLeft, paddingRight}) => {

  const [isValue, setIsValue] = useState(value);
  const [isActive, setIsActive] = useState(false);
  const [isPlaceType, setIsPlaceType] = useState(placeType);

  const inputEl = useRef()

  const span_style = classNames(
    "input-base",
    { "per" : width[width.length-1] == '%' },
    { "active" : isActive },
    { "w-close" : closeButton },
    { "type-1" : isPlaceType == 1 },
    { "type-2" : isPlaceType == 2 }
  )
  let input_style = {};
  typeof width === 'number' ? input_style.width = width + 'px' : input_style.width = width
  typeof height === 'number' ? input_style.height = height + 'px' : input_style.height = height
  paddingLeft !== undefined ? input_style.paddingLeft = paddingLeft + 'px' : null;
  paddingRight !== undefined ? input_style.paddingRight = paddingRight + 'px' : null;
  
  const handleChange = (e) => {
    setIsValue(e.target.value)
    if(onChange) onChange(e);
  }
  const handleClick = (e) => {
    setIsValue('')
    if(isPlaceType === 2) {
      setIsActive(false)
    }else{
      inputEl.current.focus()
    }
    
  }

  const handleLabelClick = (e) => {
    setIsActive(true);
    inputEl.current.focus()
  }

  const handleFocusIn = (e) => {
    setIsActive(true);
    if(onFocus) onFocus(e);
  }
  const handleFocusOut = (e) => {
    if(isPlaceType !== 2) {
      setIsActive(false);
    } else {
      if(isValue.trim().length === 0) {
        setIsValue('');
        setIsActive(false);
      }
    }
    if(onBlur) onBlur(e);
  }

  return (
    <span className={span_style}>
      {
        isPlaceType === 3
        ? <label className="tit" htmlFor={id}>{placeHolder}</label> : ""
      }
      <input 
        type={type}
        value={isValue}
        style={input_style}
        ref={inputEl}
        placeholder={isPlaceType === 1 ? placeHolder : ''}
        onChange={handleChange}
        onKeyPress={onKeyPress}
        onFocus={handleFocusIn}
        onBlur={handleFocusOut}
        id={id}
        disabled={disabled}
        readOnly={readOnly}
        name={name}
      />
      {closeButton ? <span className="btn-close" onClick={handleClick}>X</span> : ""}
      {
        isPlaceType === 2 
        ? <label className="label" onClick={handleLabelClick}>
            <span className="txt">{placeLabel}</span>
            <span className="exp">{placeHolder}</span>
          </label>
        : ""
      }
    </span>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  width: PropTypes.node,
  height: PropTypes.node,
  value: PropTypes.any,
  closeButton: PropTypes.bool,
  placeType: PropTypes.number,
  placeLabel: PropTypes.string,
  placeHolder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
}

export default React.memo(Input)