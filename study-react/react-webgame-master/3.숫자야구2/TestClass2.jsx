import React, { Component, PureComponent } from 'react';

//간편하게 shouldComponentUpdate 구현해줌
class TestClass extends PureComponent {
  state = {
    counter: 0,
    string: 'hello',
    number: 1,
    boolean: true,
    object: {},
    array: [],
  };

  //객체, array 같은 것들은 PureComponent가 변경사항을 잘 알아채지 못함
  onClick = () => {
    this.setState({
      array: [...this.state.array , 1], 
    });
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