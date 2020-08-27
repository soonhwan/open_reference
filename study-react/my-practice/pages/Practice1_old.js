import React, { useState, useCallback } from 'react';
import Checkbox from './Checkbox';

const Practice = () => {
  //단일
  const [isCheck, setIsCheck] = useState({
    checked01: true,
    checked02: true,
    checked03: false,
    checked04: false,
    checked05: false,
    checked06: false,
    checked07: false,
    checked08: false,
    checked09: false,
    checked10: false,
    checked11: false,
    checked12: false,
  });

  //전체동의
  const [isGcheck, setIsGcheck] = useState({
    gchecked01: false,
    gchecked02: false,
    gchecked03: false,
    gchecked04: false,
    gchecked05: false,
  });

  const onChange = useCallback((e) => {
    //console.log(e.target.id, e.target.checked, e.target.pid);
    //전체동의
    if(e.target.pid){
      const TempIsGcheck = {...isGcheck};
      if(e.target.id === e.target.pid){
        if(e.target.checked){
          for(let i in isGcheck){
            TempIsGcheck[i] = true;
          }
          setIsGcheck(TempIsGcheck);
        }
        else{
          for(let i in isGcheck){
            TempIsGcheck[i] = false;
          }
          setIsGcheck(TempIsGcheck);
        }
      }
      else{
        TempIsGcheck[e.target.id] = e.target.checked;
        for (const [key, value] of Object.entries(TempIsGcheck)) {
          if(key !== e.target.pid && value === false){
            TempIsGcheck[e.target.pid] = false;
            setIsGcheck(TempIsGcheck);
            return;
          }
        }
        TempIsGcheck[e.target.pid] = true;
        setIsGcheck(TempIsGcheck);
      }
    }
    else{
      //단일
      setIsCheck({ ...isCheck, [e.target.id]: e.target.checked });
    }

  }, [isCheck, isGcheck]);

  return (
    <>
      <Checkbox id="checked01" label="체크01" onChange={onChange} checked={isCheck.checked01} />
      <Checkbox id="checked02" label="체크02" onChange={onChange} checked={isCheck.checked02} disabled />
      <Checkbox id="checked03" label="체크03" onChange={onChange} checked={isCheck.checked03} disabled />
      <Checkbox id="checked04" label="체크04" onChange={onChange} checked={isCheck.checked04} />
      <Checkbox id="checked05" label="체크05" onChange={onChange} checked={isCheck.checked05} />
      <Checkbox id="checked06" label="체크06" onChange={onChange} checked={isCheck.checked06} />
      <Checkbox id="checked07" label="체크07" onChange={onChange} checked={isCheck.checked07} />
      <br />
      <br />
      <Checkbox id="gchecked01" pid="gchecked01" label="전체" onChange={onChange} checked={isGcheck.gchecked01} />
      <Checkbox id="gchecked02" pid="gchecked01" label="동의1" onChange={onChange} checked={isGcheck.gchecked02} />
      <Checkbox id="gchecked03" pid="gchecked01" label="동의2" onChange={onChange} checked={isGcheck.gchecked03} />
      <Checkbox id="gchecked04" pid="gchecked01" label="동의3" onChange={onChange} checked={isGcheck.gchecked04} />
      <Checkbox id="gchecked05" pid="gchecked01" label="동의4" onChange={onChange} checked={isGcheck.gchecked05} />
    </>
  );
};

export default Practice;






