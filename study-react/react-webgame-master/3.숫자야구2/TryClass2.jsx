import React, {  PureComponent } from 'react';

class TryClass extends PureComponent {
  render() {
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