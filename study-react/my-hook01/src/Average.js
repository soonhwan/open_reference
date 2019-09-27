import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = numbers => {
  console.log('평균값 계산중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef(null);

  // 컴포넌트가 처음 렌더링 될 때만 함수 생성
  const onChange = useCallback(
    e => {
      setNumber(e.target.value);
    }, 
    []
  );

  // number 혹은 list 가 바뀌었을 때만 함수 생성
  const onInsert = useCallback(
    e => {
      if(number !== ''){
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
      }
    },
    [number, list]
  ); 


  //렌더링 하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고 만약에 원하는 값이 바뀐 것이 아니라면 이전에 연산했던 결과를 다시 사용하는 방식
  const avg = useMemo(() => getAverage(list),[list]);

  return (
    <div>
      <input type="number" value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균 값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;