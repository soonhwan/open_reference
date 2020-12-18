import React, { useState, useCallback, useMemo } from 'react';
import Checkbox from '../components/Checkbox';

const Study01 = () => {
  //------------- 단일
  const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const setter = useCallback((e) => {
      console.log('단일 = ', e);
      setValue(e.target.checked);
    }, []);
    return [value, setter, setValue];
  };

  //------------- state 없음
  const onChangeCheck = useCallback((e) => {
    console.log('state 없음 = ', e);
  }, []);
  
  const [isCheck01, onChangeCheck01] = useInput(true);


  ///////////////////////////////////////////////
  ///////////////////////////////////////////////
  ///////////////////////////////////////////////

  //함수를 반환
  //다른 state가 변경하면서 리랜더링 할때 useCallback으로 기억해뒀던 함수를 계속 실행한다
  const uCallbackTest = useCallback((e) => {
    console.log('uCallbackTest')
  }, []);

  //상태값을 반환
  //연산된 결과 값이 변경이 됐을때 실행한다
  const uMemoTest = useMemo((e) => {
    console.log('uMemoTest')
  }, []);


  return (
    <>
      <h1>useCallback, useMemo 차이</h1>
      { uCallbackTest() }
      { uMemoTest }
      <Checkbox id="uchecked001" label="체크01" onChange={onChangeCheck01} checked={isCheck01} className="chk-st1" />
      <Checkbox id="uchecked002" label="no state1" onChange={onChangeCheck} className="chk-st1" />
    </>
  );
};

export default Study01;






