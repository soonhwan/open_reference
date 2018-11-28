import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './a.scss';
import MyComponent from './MyComponent'; //컴포넌트 추가
import Practice from './Practice'; //컴포넌트 추가
import LifeCycleSample from './LifeCycleSample'; //컴포넌트 추가

// 랜덤 색상을 생성합니다
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    //JAX 문법 안에서 Javascript를 사용시 {} 해준다.
    //es6 - const : 변하지 않는 변수
    //es6 - let : { 괄호 스코프 에서만 작동하는 변수 }
  
    const text="안녕하세요";
    const condition = true;
    
    return (
      <div>
        {/* JAX 주석표기 */}
        <h1>{text}</h1>
        <h2>{condition ? "참" : "거짓"}</h2>
        
        {/* 컴포넌트 추가(곧 자식 컴포넌트임 App.js 가 MyComponent.js 로 정보를 내려줌) */}
        <MyComponent aaa="나는 App임 너 이거 받아라"></MyComponent><br /><br /><br />
        
        <Practice></Practice><br /><br /><br />

        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color}/><br /><br /><br />

        <div className="box">
          아아아
          <div className="ab">sds</div>
          <div className="ac">gggg</div>
        </div> 
      </div>
    );
  }
}

export default App;

/*
- 컴포넌트의 라이프 사이클 -

기본 javascript는 window.onload 함수뒤에 또 다른 함수 callback 구조

리액트에서는 내부적으로 내가 작성한 코드를 이리저리 편집해서 비교도 하고렌더링도 해야 하기 때문에 
특정 시점에 event가 필요하다

크게 마운트, 업데이트, 언마운트 존재

마운트 : DOM이 생성되고 브라우저에 나타나는걸 의미
constructor -> getDerviedStateFromProps -> render -> componentDidMount

업데이트 : props, state, 부모 컴포넌트 등이 수정이 되거나 리렌더링이 될때 발생

언마운트 : 컴포넌트가 DOM에서 제거될때 발생

render() 내부에서 state를 변경하는 구분을 사용하면 안되는 이유는
라이프사이클 함수중 render()는 render() 안에서도 라이프사이클 작동에 큰축을 담당하기 때문에 
state를 변경하면 오류를 발생
*/