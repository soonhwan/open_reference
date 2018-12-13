import React, { Component } from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { CSSTransitionGroup } from 'react-transition-group'

class Practice extends  Component {
  /* es6 - map
  let a = ['매','미','다','아']
  a.map((item) => {
    console.log(item);
  });

  let b = [1,2,3,4,5]
  b.map((num) => {
    return num*num;
  });
  */
  
  state = {
    username : '',
    msg : '',
    word : ['매','미','다','아']
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  handleListAdd = () =>{
    //무조건 state 먼저 접근 한다
    //react 에서는 === 으로 형까지 비교를 기본으로 사용
    if(this.state.msg !== ''){
      this.setState({
        word : this.state.word.concat(this.state.msg), //concat 항상 새로운 배열을 반환해서 사용한다.
        msg : ''
      });
      this.inpMsg.focus();
    }
  }

  // ref -> focus()를 사용하고 싶고, DOM에 접근하고 싶을때 사용 해야함 이외에 state로 컨트롤 해준다
  handleInt = () =>{
    this.setState({
      msg : ''
    });
    this.inpMsg.focus();
  } 

  //es6 - 전개연산자(...) : const num = [1,2,3]; const num2 = [...num,4]; //num2 = [1,2,3,4];
  remove = (index) => {
    const { word } = this.state;
    this.setState({
      word: [
        ...word.slice(0, index),
        ...word.slice(index+1, word.length) //slice 항상 새로운 배열을 반환해서 사용한다.
      ]
    });
  } 

  //filter
  removeFilter = (index) => {
    const { word } = this.state;
    this.setState({
      word: word.filter((item,idx) => idx !== index)
    });
  } 

  render() {
    const {msg, username, word} = this.state; //비구조화 할당문법
    const ls = word.map((item, index) => {
      //key 는 크롬 확장프로그램을 통해서 확인 가능
      //key 는 id처럼 고유의 값이기 때문에 더 빨리 찾음
      
      return <li key={index} onDoubleClick={() => this.removeFilter(index)}>{item}</li>;
    });

    return (
      <div>
        <div>
          <input type="text" placeholder="아무거나 입력하세요" 
            value={msg} name="msg" 
            onChange={this.handleChange} 
            ref={(ref)=>this.inpMsg = ref}
          />
          <button type="button" onClick={this.handleInt} >초기화</button>
          <button type="button" onClick={this.handleListAdd}>추가</button>
        </div>

        <div>
          <input type="text" placeholder="이름을 입력하세요" 
            value={username} name="username" 
            onChange={this.handleChange} 
          />
          <button type="button" onClick={() => {this.setState({username:''})}}>초기화</button>
        </div>

        <ul>
          {/* <CSSTransitionGroup
            transitionName="exp"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            
            {ls}
          </CSSTransitionGroup> */}

          <CSSTransition
              in={showValidationMessage}
              timeout={300}
              classNames="message"
              unmountOnExit
              onExited={() => {
                this.setState({
                  showValidationButton: true,
                });
              }}
            >
              {state => (
                <HelpBlock>
                  Your name rocks!
                  <CSSTransition
                    in={state === 'entered'}
                    timeout={300}
                    classNames="star"
                    unmountOnExit
                  >
                    <div className="star">⭐</div>
                  </CSSTransition>
                </HelpBlock>
              )}
            </CSSTransition>
        </ul>
      </div>
    );
  }
}

export default Practice;

