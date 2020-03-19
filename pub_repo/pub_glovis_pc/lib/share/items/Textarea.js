import { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';

const Textarea = ({countLimit, type, placeHolder='', disabled=false, data=undefined, onChange, onBlur, onFocus, name, height=120}) => {
  const [value, setValue] = useState(data);
  const [count, setCount] = useState(value !== undefined ? value.length : 0);
  const textareaEl = useRef(null);

  const handleInput = useCallback((e) => {
    setCount(textareaEl.current.value.length);
  }, [count]);
  const handleChange = useCallback((e) => {
    setValue(e.target.value);
    if(onChange) onChange(e);
  }, [value]);
  const handleBlur = useCallback((e) => {
    if(onBlur) onBlur(e);
  }, [value]);
  const handleFocus = useCallback((e) => {
    if(onFocus) onFocus(e);
  }, [value]);
  const handleKeyPress = useCallback((e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  }, []);
  const textareaStyle = (height === 48)
    ? {height: height+'px', overflow: 'hidden', padding: '15px 20px'}
    : {height: height+'px'};

  return (
    <div className={countLimit !== undefined ? "textarea-wrap" : "textarea-wrap no-counter"}>
      <textarea ref={textareaEl} className={`textarea-${type}`} onInput={handleInput} maxLength={countLimit} placeholder={placeHolder} disabled={disabled} value={value} onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} name={name} style={textareaStyle} onKeyPress={height === 48 ? handleKeyPress : null}  />
      {
        countLimit !== undefined && 
          <p className={`text-counter ${count > countLimit ? ` error` : ''}`}><span>{count}</span>/{countLimit}</p>
      }
    </div>
  )
}

Textarea.propTypes = {
  countLimit: PropTypes.number,
  type: PropTypes.string,
  placeHolder: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  height: PropTypes.number,
}

export default Textarea