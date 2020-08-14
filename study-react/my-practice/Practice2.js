import React, { useState, useCallback } from 'react';
import Checkbox from './Checkbox';
import { checkList } from './mockup';

const Practice = () => {
  const [isCheck, setIsCheck] = useState(checkList);

  const onChange = useCallback((id) => (e) => {
    console.log(id, e.target.checked, e.target.gname);

    const newCheck = [...isCheck];
    newCheck.map((v) => {
      if (v.id === id) {
        v.checked = !v.checked;
      }
    });
    setIsCheck(newCheck);
  }, [isCheck]);

  return (
    <>
      {isCheck.map(v => {
        return (
          <Checkbox key={v.id} checked={v.checked} label={v.label} disabled={v.disabled} onChange={onChange(v.id)} />
        )
      })}
    </>
  );
};

export default Practice;






