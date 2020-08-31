import React, { useState, useCallback, useContext } from 'react';
import { AllContext } from './Accordion';

let cnt = 0;
const AccordionList = ({children, active=false,}) => {
  const { activeIndex, exclusive } = useContext(AllContext);
  const [on, setOn] = useState(activeIndex.includes(cnt));
  const onClick = useCallback(() => {
    //setOn(!on);
  }, []);

  exclusive ? cnt = null : cnt++;
  
  return (
    <li className={on ? 'on': null}>
        <dl className="lm-box">
          {children}
        </dl>
    </li>
  );
};

export default AccordionList;






