import React, { Component } from 'react';

class TryClass extends Component {
  render() {
    //return <li key={this.props.v.fruit + this.props.v.taste}><b>{this.props.v.fruit}</b> - {this.props.v.taste + this.props.i}</li>
    
    const { tryInfo } = this.props; //비구조화 할당
    return (
      <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li>
    );
  }
}

export default TryClass;