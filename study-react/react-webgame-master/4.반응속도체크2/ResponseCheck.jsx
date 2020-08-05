import React, { useState, useRef } from 'react';

const ResponseCheck = () => {
  const [state, setstate] = useState('waiting');
  const [message, setMessage] = useState('클릭해서 시작하세요.');
  const [result, setResult] = useState([]);
  const timeout = useRef(null);
  const startTime = useRef(0);
  const endTime = useRef(0);

  const onClickScreen = () => {
    if(state === 'waiting'){
      timeout.current = setTimeout(()=>{
        setstate('now');
        setMessage('지금 클릭');
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
      setstate('ready');
      setMessage('초록색이 되면 클릭하세요.');
    }
    else if(state === 'ready'){
      clearTimeout(timeout.current);
      setstate('waiting');
      setMessage('너무 성급하시군요! 초록색이 된 후에 클릭하세요.');
    }
    else if(state === 'now'){
      endTime.current = new Date();
      setstate('waiting');
      setMessage('클릭해서 시작하세요.');
      setResult(r=>([...r, endTime.current - startTime.current]));
    }
  };

  const onReset = () => {
    setResult([]);
  };

  const renderAverage = () => {
    return result.length === 0 
    ? null 
    : <>
        <div>평균 시간: {result.reduce((a,c)=>a+c) / result.length}ms</div>
        <button onClick={onReset}>리셋</button>
      </>
  };

  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {renderAverage()}
    </>
  );
};

export default ResponseCheck;