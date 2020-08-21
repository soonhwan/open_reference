import React, { useState, useCallback, useEffect } from 'react';
import Checkbox from './Checkbox';
import CheckboxGroup1 from './CheckboxGroup1';
import CheckboxGroup2 from './CheckboxGroup2';

const PracticeCheckbox = () => {
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

  //------------- state 없음
  const onChangeCheck = useCallback((e) => {
    console.log('state 없음 = ', e);
  }, []);

  //------------- 체크 그룹
  const testCheck = [
    { id: 'chk-agree-1', label: '이용약관 (필수)1-1', checked: false },
    { id: 'chk-agree-2', label: '환불규정 (필수)2-2', checked: false },
    { id: 'chk-agree-3', label: '환불규정 (필수)3-3', checked: false },
    { id: 'chk-agree-4', label: '환불규정 (필수)4-4', checked: false },
  ];
  const testCheck2 = [
    { id: 'chk-agree-5', label: '이용약관 (필수)1-1', checked: false, essential: true },
    { id: 'chk-agree-6', label: '환불규정 (필수)2-2', checked: false, essential: true },
    { id: 'chk-agree-7', label: '환불규정 (필수)3-3', checked: false, essential: true },
    { id: 'chk-agree-8', label: '환불규정 (필수)4-4', checked: false, essential: true },
    { id: 'chk-agree-9', label: '고유식별정보 동의(선택)5-1', checked: false, essential: false },
    { id: 'chk-agree-10', label: '고유식별정보 동의(선택)5-2', checked: false, essential: false },
  ];
  const [checkList, setCheckList] = useState(testCheck);
  const [checkList2, setCheckList2] = useState(testCheck2);

  // 체크박스 그룹의 onChange
  const onChangeAll1 = (e) => {
    console.log(e.target);
  }

  const onChangeAll2 = (e) => {
    console.log(e.target);
  }


  useEffect(() => {
    /* const result = [...checkList];
    result.map((v, i) => v.checked = v.id === 'chk-agree-3' ? true : false);
    const timeout = setTimeout(() => {
      setCheckList(result)
    }, 1000);
    return () => {
      clearTimeout(timeout);
    } */
  }, [])

  return (
    <>
      <h2>단일</h2>
      <Checkbox id="checked01" label="체크01" onChange={onChangeCheck01} checked={isCheck01} />
      <Checkbox id="checked02" label="체크02" onChange={onChangeCheck02} checked={isCheck02} disabled />
      <Checkbox id="checked03" label="체크03" onChange={onChangeCheck03} checked={isCheck03} disabled />
      <Checkbox id="checked04" label="체크04" onChange={onChangeCheck04} checked={isCheck04} />
      <Checkbox id="checked05" label="" onChange={onChangeCheck05} checked={isCheck05}>체크05(customized)</Checkbox>
      <br />
      <br />
      <h2>state 없음</h2>
      <Checkbox id="checked06" label="no state1" onChange={onChangeCheck} className="chk-sty1" />
      <Checkbox id="checked07" label="no state2" onChange={onChangeCheck} className="chk-sty2" />
      <Checkbox id="checked08" label="no state2" onChange={onChangeCheck} className="chk-sty3" />
      <br />
      <br />
      <h2>Group Type1</h2>
      <CheckboxGroup1 list={checkList} onChange={onChangeAll1} />
      <br />
      <br />
      <h2>Group Type2</h2>
      <CheckboxGroup2 list={checkList2} onChange={onChangeAll2} />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default PracticeCheckbox;






