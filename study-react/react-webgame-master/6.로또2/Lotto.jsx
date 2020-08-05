import React, { useState, useRef, useEffect, useMemo, useCallback, useReducer } from 'react';
import Ball from './Ball2';

function getWinNumbers() {
  console.log('getWinNumbers');
  const candidate = Array(45).fill().map((v, i)=> i + 1);
  const shuffle = [];
  while (candidate.length > 0){
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length),1)[0]);
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}

//---------------- hook는 여기서부터 다시 실행된다. 
const Lotto = () => {
  const lottoNumbers = useMemo(()=>getWinNumbers(),[]); //useMemo는 return 값을 기억한다 [] 바뀌기 전까지

  const [winNumbers, setWinNumbers] = useState(lottoNumbers); //getWinNumbers() <- 매번 실행
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);
  const timeouts = useRef([]);

  // 빈 배열이면 componentDidMount와 동일
  useEffect(() => {
    //ajaxs
    console.log('componentDidMount만');
  },[]);

  //componentDidUpdate만, componentDidMount x
  const mounted = useRef(false);
  useEffect(() => {
    if(!mounted.current){
      mounted.current = true;
    }
    else{
      //ajaxs
      console.log('componentDidUpdate만');
    }
  },[timeouts.current]);

  // 배열에 요소가 있으면 componentDidMount랑 componentDidUpdate 둘 다 수행
  useEffect(() => {
    console.log('didMount');
    for (let i = 0; i < winNumbers.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls(w => ([...w, winNumbers[i]]));
      }, (i + 1) * 400);
    }
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 3000);
    return () => { // componentWillUnmount 역할
      timeouts.current.forEach((v) => {
        clearTimeout(v);
        console.log('componentWillUnmount');
      });
    }; 
  }, [timeouts.current]);

  //state 마다 여러번 실행 할 수 있다.
  useEffect(() => {
    console.log('로또 숫자를 생성합니다.');
  }, [winNumbers]);

  //useCallback은 함수를 기억한다. [] 바뀌기 전까지
  const onClickRedo = useCallback(() => {
    console.log('onClickRedo');
    console.log(winNumbers);
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];
  }, []);

  return (
    <>
      <div>당첨 숫자</div>
      <div id="결과창">
        {winBalls.map((v) => <Ball key={v} number={v} />)}
      </div>
      <div>보너스!</div>
      {bonus && <Ball number={bonus} onClick={onClickRedo} />} {/* 자식에게 함수를 전달할때 useCallback 해줘야 한다. 매번 새로운함수가 생성되는걸 방지 */}
      {redo && <button onClick={onClickRedo}>한 번 더!</button>}
    </>
  );
}

export default Lotto;


