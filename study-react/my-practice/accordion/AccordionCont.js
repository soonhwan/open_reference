import React, { useState, useCallback } from 'react';
import { AllContext } from './Accordion';

const AccordionCont = ({children}) => {

  return (
    <>
      <dd className="lm-cont">{children}</dd>
    </>
  );
};

export default AccordionCont;






