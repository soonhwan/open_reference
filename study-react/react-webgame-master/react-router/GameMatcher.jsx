import React, { Component } from 'react';
import NumberBaseball from '../3.숫자야구2/NumberBaseballClass';
import RSP from '../5.가위바위보2/RSPClass';
import Lotto from '../6.로또2/LottoClass';

class GameMatcher extends Component {
  render() {
    console.log('props = ', this.props);
    
    //쿼리스트링
    let urlSearchParams = new URLSearchParams(this.props.location.search.slice(1));
    console.log('urlSearchParams = ', urlSearchParams.get('query'), urlSearchParams.get('hello'), urlSearchParams.get('bye'));
    
    if (this.props.match.params.name === 'number-baseball') {
      return <NumberBaseball />
    } else if (this.props.match.params.name === 'rock-scissors-paper') {
      return <RSP />
    } else if (this.props.match.params.name === 'lotto-generator') {
      return <Lotto />
    }
    return (
      <div>
        일치하는 게임이 없습니다.
      </div>
    );
  }
}

export default GameMatcher;
