import React, { useState, useCallback, useEffect } from 'react';
import Radio from './Radio';

const PracticeRadio = () => {
  //------------- data 버전
  const radio_group = [
    {id:'radioChk01', value:'1', checked:true, label:'선택1', disabled: false},
    {id:'radioChk02', value:'2', checked:false, label:'선택2', disabled: true},
    {id:'radioChk03', value:'3', checked:false, label:'선택3', disabled: false},
    {id:'radioChk04', value:'4', checked:false, label:'선택4', disabled: false},
  ]
  const [isCheck01, setICheck01] = useState(radio_group);

  const onChangeCheck01 = useCallback((e) => {
    console.log('data 버전 = ', e);
    setICheck01(
      isCheck01.map(v =>  
        v.id === e.target.id ? { ...v, checked: e.target.checked } : {...v, checked:false}
      )
    );
  }, [isCheck01]);

  // 중간에 데이터 패칭했을 경우?
  /* useEffect(() => {
    setICheck01(isCheck01);
  }, [isCheck01]); */

  //------------- 표준 버전
  const [selectedValue, setSelectedValue] = useState('3');
  const onChangeCheck = useCallback((e) => {
    console.log('표준 버전 = ', e);
    setSelectedValue(e.target.value);
  }, []);

  return (
    <>
      <h1>Radio sample</h1>
      <h2>data 버전</h2>
      {isCheck01.map(v => 
        <Radio key={v.id} id={v.id} name="radioChk1" label={v.label} onChange={onChangeCheck01} checked={v.checked} value={v.value} disabled={v.disabled} className="radio-st1" />
      )}
      <br />
      <br />
      <h2>표준 버전</h2>
      <Radio id="radioChk50" name="group2" label="단일1" onChange={onChangeCheck} className="radio-st1" checked={selectedValue === "1"} value="1" />
      <Radio id="radioChk51" name="group2" label="단일2" onChange={onChangeCheck} className="radio-st1" checked={selectedValue === "2"} value="2" disabled />
      <Radio id="radioChk52" name="group2" label="단일3" onChange={onChangeCheck} className="radio-st1" checked={selectedValue === "3"} value="3" />
      <Radio id="radioChk53" name="group2" label="단일4" onChange={onChangeCheck} className="radio-st1" checked={selectedValue === "4"} value="4" />
      <Radio id="radioChk54" name="group2" label="단일5" onChange={onChangeCheck} className="radio-st1" checked={selectedValue === "5"} value="5"><span className="makeClassName">단일5(customized)</span></Radio>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default PracticeRadio;






