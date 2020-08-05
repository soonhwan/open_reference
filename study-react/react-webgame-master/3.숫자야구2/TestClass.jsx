import React, { Component } from 'react';

class TestClass extends Component {
  state = {
    counter: 0,
  };

  //언제 랜더링이 될지를 정해준다.
  shouldComponentUpdate(nextProps, nextState, nextContext){
    if(this.state.counter !== nextState.counter){
      return true;
    }
    return false;
  }

  //setState 호출하면 리랜더링이 일어난다. 성능이슈가 생김
  onClick = () => {
    this.setState({});
  };

  render() {
    return (
      <div>
        <button onClick={this.onClick}>클릭</button>
      </div>
    );
  }
}

export default TestClass;