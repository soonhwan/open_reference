import React, { useState, useCallback, useEffect } from 'react';
import Checkbox from './Checkbox';

const CheckboxGroup1 = ({ list, onChange }) => {
  let copyList = [...list];
  let btnAllChecked = list.every(i => i.checked === true);
  const [gcheckedAll, setGcheckedAll] = useState(btnAllChecked); //전체
  const [gcheckedList, setGcheckedList] = useState(list);
  /* useEffect(() => {
    console.log('useEffect = ', gcheckedList);
  }, [gcheckedList]); */

  // 중간에 데이터 패칭했을 경우?
  useEffect(() => {
    setGcheckedAll(list.every(i => i.checked === true));
    setGcheckedList(list);
  }, [list]);

  const onChangeAll = useCallback((e) => {
    //console.log('그룹 = ', e);
    if(e.target.indeterminate){
      setGcheckedList(
        //gcheckedList.map(v => { return { ...v, checked: e.target.checked }})
        gcheckedList.map(v => ({ ...v, checked: e.target.checked }))
      );
      copyList.map(v => v.checked = e.target.checked);
    }
    else{
      setGcheckedList(
        /* gcheckedList.map(v => {
          return v.id === e.target.id ? { ...v, checekd: e.target.checked } : v
        }) */
        gcheckedList.map(v => 
          v.id === e.target.id ? { ...v, checked: e.target.checked } : v
        )
      );
      copyList.map(v => v.id === e.target.id ? v.checked = e.target.checked : v);
    }
    
    //전체 체크
    btnAllChecked = copyList.every(i => i.checked === true);
    setGcheckedAll(btnAllChecked);

    const target = {
      btnAllChecked: btnAllChecked,
      list: copyList,
    }
    if(onChange) onChange({target});

  }, [gcheckedAll, gcheckedList]);


  return (
    <>
      <Checkbox id="gcheckedAll" indeterminate label="전체" onChange={onChangeAll} checked={gcheckedAll} />
      <br />
      {gcheckedList.map(v => 
        <Checkbox key={v.id} id={v.id} label={v.label} onChange={onChangeAll} checked={v.checked} />
      )}
    </>
  );
};

export default CheckboxGroup1;






