import React, { Component } from 'react';
import SubComponent from './SubComponent';
import MyComponentFn from './MyComponentFn';

class MyComponent extends Component {
  //state : 자체적 수정이 가능, state는 바로 표기 가능
  //setState로 state가 변하면 render() 함수가 다시 실행
  state = {
    a : 1
  }

  plus = () =>{
    this.setState({
      a : this.state.a + 1
    })
  }
  
  minus = () =>{
    this.setState({
      a : this.state.a - 1
    })
  }

  render() {
    //es6 - () => {...} : 익명함수 function(){}
    
    let aRe = this.props.aaa + ' 나는 MyComponent임 내가 다시 내려줄께';
    return (
      <div>
        <h3>MyComponent</h3>
        <p>{this.props.aaa}</p>
        
        {/* App로 부터 받은 aaa를 추적하기 쉽게 같은명(aaa)으로 SubComponent 전달 */}
        <SubComponent aaa={aRe} bbb={32} a={this.state.a} plus={this.plus} minus={this.minus}></SubComponent>

        {/* <span>MyComponent click -> {this.state.a} </span> */}

        {/* setState로 state를 수정하는 방법 
        <button type="button" onClick={()=>{
          this.setState({
            a : this.state.a + 1
          })
        }}>+ 버튼</button> 
        <button type="button" onClick={()=>{
          this.setState({
            a : this.state.a - 1
          })
        }}>- 버튼</button> */}

        <br /><br />
        <MyComponentFn></MyComponentFn>
      </div>
    );
  }
}

export default MyComponent; 