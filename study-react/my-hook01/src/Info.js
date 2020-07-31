import React, { useReducer, useEffect } from 'react';
import useInputs from './useInputs';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

const Info = () => {
  //리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있는 Hook
  useEffect(() => {
    console.log('마운트 될 때만 실행됩니다.(최초 1번만 실행)');
  }, []);

  //componentDidMount 와 componentDidUpdate 를 합친 형태
  useEffect(() => {
    console.log('렌더링이 완료되었습니다!(매번 실행)');
  });
  
  /* 
  //여러개의 인풋을 관리하기 위하여 useReducer 사용
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: ''
  });
  const { name, nickname } = state;
  const onChange = e => {
    dispatch(e.target);
  }; */

  //useInputs 라는 Hook 으로 따로 분리
  const [state, onChange] = useInputs({
    name: '',
    nickname: ''
  });
  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;