import React, { useState, useRef, memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const Button = memo(({id="", className="", type="button", disabled=false, onClick, href="", target="", children}) => {
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
      target: chkRef.current.target ? chkRef.current.target : undefined,
      disabled: chkRef.current.disabled ? chkRef.current.disabled : disabled,
    }
    if(onClick) onClick({target});
  };

  const getLabel = () => {
    return (
      <span className="label">{children}</span>
    )
  }

  return (
    <>
    {href ? 
      <a href={href} target={target} ref={chkRef} id={id?id:null} className={customClassName} onClick={handleClick}>
        {getLabel()}
      </a>
       : 
      <button type={type} ref={chkRef} id={id?id:null} className={customClassName} onClick={handleClick} disabled={disabled}>
        {getLabel()}
      </button>
    }
    
    </>
  );
});

Button.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
}

export default Button;






