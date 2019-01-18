import React, { Component } from 'react';
// import Counter from '../components/Counter';
import CounterContainer from './CounterContainer'; 

class App extends Component {
  render() {
    return (
      <div>
        <CounterContainer />
      </div>
    );
  }
}

export default App;

/*
view 에
왼쪽 클릭
오른쪽 클릭
더블클릭
이런 이벤트가 발생됩니다.
이벤트가 발생되면
action 생성함수로 action을 생성해서
store로 dispatch 하게 되고
store는 액션을 받게 되면
reducer에게 액션을 분석해서
해당되는걸 실행하게 만듭니다.
리듀서는 state 값을 변경해서
리턴할거고
이 값은 다시 connect를 통해
요청한 component 값에 전달되며
값이 변경되고 리렌더링이 일어납니다.
*/