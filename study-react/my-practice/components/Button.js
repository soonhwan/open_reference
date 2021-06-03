import React, { useRef, memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

/**
 * Button
 */
const Button = memo(({id, className, type, disabled, onClick, href, target, children}) => {
  //console.log("children = ", children);
  const chkRef = useRef(null);

  const customClassName = classNames(
    "btn-base",
    { "disabled": disabled},
    className
  )
  //onsole.log('customClassName = ', customClassName);

  const handleClick = () => {
    const target = {
      id: id,
      className: customClassName,
      href: href,
      target: chkRef.current.target || undefined,
      disabled: chkRef.current.disabled || disabled,
    }
    if(typeof onClick === 'function') onClick({target});
  };

  const getLabel = () => {
    return (
      <span className="label">{children}</span>
    )
  }

  return (
    <>
    {href ? 
      <a href={href} target={target} ref={chkRef} id={id || null} className={customClassName} onClick={handleClick}>
        {getLabel()}
      </a>
       : 
      <button type={type} ref={chkRef} id={id || null} className={customClassName} onClick={handleClick} disabled={disabled}>
        {getLabel()}
      </button>
    }
    
    </>
  );
});

Button.propTypes = {
  /** id 값 */
  id: PropTypes.string,
  /** class 이름 */
  className: PropTypes.string,
  /** 버튼 타입 */
  type: PropTypes.string,
  /** Link href */
  href: PropTypes.string,
  /** Link target */
  target: PropTypes.string,
  /** 버튼 disabled */
  disabled: PropTypes.bool,
  /** onClick */
  onClick: PropTypes.func,
  /** label, html */
  children: PropTypes.node,
}

Button.defaultProps = {
  id: '',
  className: '',
  href: '',
  target: '',
  type: 'button',
  disabled: false,
}

export default Button;






