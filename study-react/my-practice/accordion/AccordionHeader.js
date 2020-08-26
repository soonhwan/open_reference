import React, { useState, useCallback } from 'react';
import { AllContext } from './Accordion';

const AccordionHeader = ({children}) => {

  const handleClick = () => {

  };

  return (
    <>
      <dt className="lm-header"><button onClick={handleClick}>{children}</button></dt>
    </>
  );
};

export default AccordionHeader;






