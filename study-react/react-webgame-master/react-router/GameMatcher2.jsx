import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NumberBaseball from '../3.숫자야구2/NumberBaseballClass';
import RSP from '../5.가위바위보2/RSPClass';
import Lotto from '../6.로또2/LottoClass';

class GameMatcher extends Component {
  render() {
    console.log('props = ', this.props);
    
    return (
      <div>
        일치하는 게임이 없습니다.
      </div>
    );
  }
}

//HOC 패턴
export default withRouter(GameMatcher);
