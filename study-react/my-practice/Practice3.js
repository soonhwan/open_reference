import React, { useState, useCallback } from 'react';
import Checkbox from './Checkbox';
import P2 from './Practice22';

const Practice = () => {
  /* const data = [
    {id: 1, label: "체크01", checked: false},
    {id: 2, label: "체크02", checked: false},
    {id: 3, label: "체크03", checked: false},
    {id: 4, label: "체크04", checked: false},
    {id: 5, label: "체크05", checked: false},
    {id: 6, label: "체크06", checked: false},
  ];
  const [chkData, setChkData] = useState(data);

  const onChangeChk = (id) => (e) => {
    
  } */

  return (
    <>
      <P2 />

      <Checkbox label="4"/>
      <Checkbox label="5"/>
      <Checkbox label="6"/>
      {/* {chkData.map((v) => <Checkbox id={v.id} key={v.id} label={v.label} checked={v.checked} onChange={onChangeChk(v.id)} />)} */}
    
    </>
  );
};

export default Practice;






