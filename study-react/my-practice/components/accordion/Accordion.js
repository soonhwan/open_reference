import React, { useState, useCallback, createContext, useMemo  } from 'react';
export const AllContext = createContext();

const Accordion = ({children, activeIndex=[], exclusive=false}) => {

  const value = useMemo(() => ({activeIndex, exclusive}), []);

  return (
    <>
      <ul className="menu-accordion">
        <AllContext.Provider value={value}>
          {children}
        </AllContext.Provider>
      </ul>
    </>
  );
};

export default Accordion;






