import React, { useState, useCallback, useEffect } from 'react';
import Checkbox from './Checkbox';

const Practice = () => {
  //------------- 단일
  const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const setter = useCallback((e) => {
      console.log('단일 = ', e);
      setValue(e.target.checked);
    }, []);
    return [value, setter, setValue];
  };
  
  const [isCheck01, onChangeCheck01] = useInput(true);
  const [isCheck02, onChangeCheck02] = useInput(true);
  const [isCheck03, onChangeCheck03] = useInput(false);
  const [isCheck04, onChangeCheck04] = useInput(false);
  const [isCheck05, onChangeCheck05] = useInput(false);
  
  //------------- 전체동의
  const dummy = [
    { id: 'chk-agree-1', label: '이용약관 (필수)1-1', checked: false },
    { id: 'chk-agree-2', label: '환불규정 (필수)2-2', checked: false },
    { id: 'chk-agree-3', label: '환불규정 (필수)3-3', checked: false },
    { id: 'chk-agree-4', label: '환불규정 (필수)4-4', checked: false },
    { id: 'chk-agree-5', label: '고유식별정보 동의(선택)5-1', checked: false },
    { id: 'chk-agree-6', label: '고유식별정보 동의(선택)5-2', checked: false },
  ];
  const [gcheckedAll, setGcheckedAll] = useState(dummy.every(i => i.checked === true)); //전체
  const [gcheckedAll2, setGcheckedAll2] = useState(dummy.every(i => i.checked === true)); //필수
  const [gcheckedList, setGcheckedList] = useState(dummy);
  /* const [gchecked02, onChangeGCheck02] = useInput(false);
  const [gchecked03, onChangeGCheck03] = useInput(false);
  const [gchecked04, onChangeGCheck04] = useInput(false);
  const [gchecked05, onChangeGCheck05] = useInput(false); */
  
  /* useEffect(() => {
    console.log('useEffect = ', gcheckedList);
  }, [gcheckedList]); */

  const onChangeAll = useCallback((e) => {
    //console.log('그룹 = ', e);
    if(e.target.id === e.target.pid){
      setGcheckedAll(e.target.checked);
      setGcheckedList(
        //gcheckedList.map(v => { return { ...v, checked: e.target.checked }})
        gcheckedList.map(v => ({ ...v, checked: e.target.checked }))
      );
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

      if(e.target.checked === false && gcheckedAll === true){
        setGcheckedAll(false);
      }
      else{
        let i = 0;
        let allState = gcheckedList.some(v => {
          if(e.target.id !== v.id){
            v.checked === true ? i++ : false;
          }
          return i === gcheckedList.length-1 ? true : false;
        });
        //console.log('결과 = ', i, allState);
        setGcheckedAll(allState);
      }
    }    
  }, [gcheckedAll, gcheckedAll2, gcheckedList]);

  //------------- state 없음
  const onChangeCheck = useCallback((e) => {
    console.log('state 없음 = ', e);
  }, []);

  return (
    <>
      <Checkbox id="checked01" label="체크01" onChange={onChangeCheck01} checked={isCheck01} />
      <Checkbox id="checked02" label="체크02" onChange={onChangeCheck02} checked={isCheck02} disabled />
      <Checkbox id="checked03" label="체크03" onChange={onChangeCheck03} checked={isCheck03} disabled />
      <Checkbox id="checked04" label="체크04" onChange={onChangeCheck04} checked={isCheck04} />
      <Checkbox id="checked05" label="체크05" onChange={onChangeCheck05} checked={isCheck05} />
      <br />
      <br />
      <Checkbox id="checked06" label="no state1" onChange={onChangeCheck} />
      <Checkbox id="checked07" label="no state2" onChange={onChangeCheck} />
      <br />
      <br />
      <Checkbox id="gcheckedAll" pid="gcheckedAll" label="전체" onChange={onChangeAll} checked={gcheckedAll} />
      <Checkbox id="gcheckedAll2" pid="gcheckedAll gcheckedAll2" label="필수" onChange={onChangeAll} checked={gcheckedAll2} />
      <br />
      {gcheckedList.map(v => 
        <Checkbox key={v.id} id={v.id} pid="gcheckedAll gcheckedAll2" label={v.label} onChange={onChangeAll} checked={v.checked} />
      )}
    </>
  );
};

export default Practice;






