import React, { useState, useCallback, useEffect } from 'react';
import Checkbox from './Checkbox';

const CheckboxGroup2 = ({ list, onChange }) => {
  let copyList = [...list];
  let btnAllChecked = list.every(i => i.checked === true);
  let btnEssChecked = list.filter(i => i.essential === true).every(i => i.checked === true);
  const [gcheckedAll, setGcheckedAll] = useState(btnAllChecked); //전체
  const [gcheckedEss, setGcheckedEss] = useState(btnEssChecked); //필수
  const [gcheckedList, setGcheckedList] = useState(list);
  /* useEffect(() => {
    console.log('useEffect = ', gcheckedList);
  }, [gcheckedList]); */

  // 중간에 데이터 패칭했을 경우?
  useEffect(() => {
    setGcheckedAll(list.every(i => i.checked === true));
    setGcheckedEss(list.filter(i => i.essential === true).every(i => i.checked === true));
    setGcheckedList(list);
  }, [list]);

  const onChangeAll = useCallback((e) => {
    //console.log('그룹 = ', e);
    if(e.target.indeterminate){
      if(e.target.id === 'gcheckedEss'){
        setGcheckedList(gcheckedList.map(v => v.essential === true ? {...v, checked: e.target.checked} : v));
        copyList.map(v => v.essential === true ? v.checked = e.target.checked : v);
      }
      else{
        setGcheckedList(gcheckedList.map(v => ({ ...v, checked: e.target.checked })));
        copyList.map(v => v.checked = e.target.checked);
      }
    }
    else{
      setGcheckedList(gcheckedList.map(v => v.id === e.target.id ? { ...v, checked: e.target.checked } : v));
      copyList.map(v => v.id === e.target.id ? v.checked = e.target.checked : v);
    }
    
    //전체 체크
    btnAllChecked = copyList.every(i => i.checked === true);
    setGcheckedAll(btnAllChecked);

    //필수 체크
    btnEssChecked = copyList.filter(i => i.essential === true).every(i => i.checked === true);
    setGcheckedEss(btnEssChecked);

    const target = {
      btnAllChecked: btnAllChecked,
      btnEssChecked: btnEssChecked,
      list: copyList,
    }
    if(onChange) onChange({target});

  }, [gcheckedAll, gcheckedList]);


  return (
    <>
      <Checkbox id="gcheckedAll2" indeterminate label="전체" onChange={onChangeAll} checked={gcheckedAll} />
      <Checkbox id="gcheckedEss" indeterminate label="필수" onChange={onChangeAll} checked={gcheckedEss} />
      <br />
      {gcheckedList.map(v => 
        <Checkbox key={v.id} id={v.id} label={v.label} onChange={onChangeAll} checked={v.checked} />
      )}
    </>
  );
};

export default CheckboxGroup2;






