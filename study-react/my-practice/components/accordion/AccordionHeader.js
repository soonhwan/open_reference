import React, { useState, useCallback, useContext } from 'react';
import { AllContext } from './Accordion';
import Button from '../Button';

const AccordionHeader = ({children}) => {
  const { onClick } = useContext(AllContext);

  const handleClick = () => {
    if(typeof onClick === 'function') onClick(1);
  };

  return (
    <>
      <dt className="lm-header"><Button className="btn-st1" onClick={handleClick}>{children}</Button></dt>
    </>
  );
};

export default AccordionHeader;






